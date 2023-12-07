import * as S from "./styled";
import linkIcon from "../../../images/folder/link.svg";

function FolderHeader() {
  return (
    <S.FolderHeader>
      <form>
        <button className="link-icon">
          <img src={linkIcon} alt="첨부 아이콘" />
        </button>
        <input placeholder="링크를 추가해 보세요." />
        <button className="link-cta">추가하기</button>
      </form>
    </S.FolderHeader>
  );
}

export default FolderHeader;
