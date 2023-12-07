import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import { endpoints, errorMessages, getApiInfo } from "../api";
import * as S from "./styled";
import search from "../../../images/shared/search.svg";
import FolderMainCards from "./FolderMainCards";
import addIcon from "../../../images/folder/add.svg";
import addWhiteIcon from "../../../images/folder/add_white.svg";
import shareIcon from "../../../images/folder/share.svg";
import penIcon from "../../../images/folder/pen.svg";
import binIcon from "../../../images/folder/bin.svg";

function FolderMain() {
  const [folderList, setFolderList] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({
    id: "",
    name: "전체",
  });
  const [isfolderListLoading, folderListError, getFolderListAsync] =
    useAsync(getApiInfo);

  const loadFolderList = async () => {
    const result = await getFolderListAsync(
      endpoints.userFolders,
      errorMessages.userFolders
    );
    if (!result) return;

    const { data } = result;

    setFolderList(data);
  };

  const handleFolderClick = (folderId, folderName) => {
    setCurrentFolder({
      id: folderId,
      name: folderName,
    });
  };

  useEffect(() => {
    loadFolderList();
  }, [currentFolder]);

  return (
    <S.Main>
      <form className="search">
        <button className="search-img">
          <img src={search} alt="search" />
        </button>
        <input className="search-bar" placeholder="링크를 검색해 보세요." />
      </form>
      <S.Folder>
        <ul>
          <li
            onClick={() => {
              handleFolderClick("", "");
            }}
          >
            <button className={!currentFolder.name && `focused`}>전체</button>
          </li>
          {folderList.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  handleFolderClick(item.id, item.name);
                }}
              >
                <button
                  className={currentFolder.name === item.name ? `focused` : ""}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="add">
          <img src={addIcon} alt="폴더 추가 아이콘" />
        </button>
        <button className="add-mobile">
          폴더 추가
          <img src={addWhiteIcon} alt="폴더 추가 아이콘 흰색" />
        </button>
      </S.Folder>
      <S.Title>
        <h1>{currentFolder.name}</h1>
        {currentFolder.id && (
          <div>
            <button>
              <img src={shareIcon} alt="공유 아이콘" />
              <span>공유</span>
            </button>
            <button>
              <img src={penIcon} alt="이름변경 아이콘" />
              <span>이름 변경</span>
            </button>
            <button>
              <img src={binIcon} alt="삭제 아이콘" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </S.Title>
      <FolderMainCards currentFolder={currentFolder.id} />
    </S.Main>
  );
}

export default FolderMain;
