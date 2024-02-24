/* eslint-disable @next/next/no-img-element */
import { formatDate, countAgo } from '@/utils/getDateInfo';
import { Link } from '@/types/SharedType';
import Image from 'next/image';

interface SharedMainCardProps {
  link: Link;
  target: string;
  rel: string;
}

function SharedMainCard({ link, target, rel }: SharedMainCardProps) {
  const { created_at, url, title, description, image_source } = link;

  return (
    <li className="card">
      <a href={url} target={target} rel={rel}>
        {image_source ? (
          <div className="card-img-selected">
            <img src={image_source} alt={title} />
          </div>
        ) : (
          <div className="card-img-default">
            <Image
              src="/images/logo.svg"
              width={133}
              height={24}
              alt="기본 이미지"
            />
          </div>
        )}
        <div className="container">
          <span className="card-ago">{countAgo(created_at)}</span>
          <p className="card-description">{description}</p>
          <span className="card-date">{formatDate(created_at)}</span>
        </div>
      </a>
    </li>
  );
}

export default SharedMainCard;
