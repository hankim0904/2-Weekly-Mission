import SharedMainCard from "./SharedMainCard";
import search from "../../../images/shared/search.svg";
import * as S from "../styles/Main";

const MainSearchBox = ({ className }) => (
  <form className={className}>
    <button className="search-img">
      <img src={search} alt="search" />
    </button>
    <input className="search-bar" placeholder="링크를 검색해 보세요." />
  </form>
);

function SharedMain({ links }) {
  return (
    <S.SharedMain>
      <MainSearchBox className="search" />{" "}
      <ul className="cards">
        {links?.map((item) => {
          return (
            <SharedMainCard
              key={item.id}
              item={item}
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
