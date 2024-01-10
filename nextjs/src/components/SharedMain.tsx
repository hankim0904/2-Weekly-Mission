import SharedMainCard from './SharedMainCard';
import search from '../../../images/shared/search.svg';
import * as S from '../styles/Main';
import { Link } from '../types/SharedType';
import Image from 'next/image';

const MainSearchBox = ({ className }: { className: string }) => (
  <form className={className}>
    <button className="search-img">
      <Image src="/images/search.svg" width={16} height={16} alt="search" />
    </button>
    <input className="search-bar" placeholder="링크를 검색해 보세요." />
  </form>
);

function SharedMain({ links }: { links: Link[] }) {
  return (
    <S.SharedMain>
      <MainSearchBox className="search" />
      <ul className="cards">
        {links.map((item) => {
          return (
            <SharedMainCard
              key={item.id}
              link={item}
              target="_blank"
              rel="noreferrer"
            />
          );
        })}
      </ul>
    </S.SharedMain>
  );
}

export default SharedMain;
