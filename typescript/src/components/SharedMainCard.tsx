import { formatDate, countAgo } from '../utils/getDateInfo';
import logo from '../../../images/landing/logo.svg';

interface LinkData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface SharedMainCardProps {
  link: LinkData;
  target: string;
  rel: string;
}

function SharedMainCard({ link, target, rel }: SharedMainCardProps) {
  const { createdAt, url, title, description, imageSource } = link;

  return (
    <li className="card">
      <a href={url} target={target} rel={rel}>
        {imageSource ? (
          <div className="card-img-selected">
            <img src={imageSource} alt={title} />
          </div>
        ) : (
          <div className="card-img-default">
            <img src={logo} alt="기본 이미지" />
          </div>
        )}
        <div className="container">
          <span className="card-ago">{countAgo(createdAt)}</span>
          <p className="card-description">{description}</p>
          <span className="card-date">{formatDate(createdAt)}</span>
        </div>
      </a>
    </li>
  );
}

export default SharedMainCard;
