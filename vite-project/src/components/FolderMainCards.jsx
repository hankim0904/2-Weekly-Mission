import { useEffect, useState, useCallback } from "react";
import useAsync from "../hooks/useAsync";
import { endpoints, errorMessages, getApiInfo } from "../api/api";
import styled from "styled-components";
import FolderMainCard from "./FolderMainCard";

const StyledNolink = styled.div`
  width: 106rem;
  padding: 4.1rem 0 3.5rem;
  margin-top: 1.6rem;

  p {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) {
    width: 32.5rem;

    p {
      font-size: 1.4rem;
    }
  }
`;

function FolderMainCards({ currentFolder, folderList }) {
  const [LinkList, setLinkList] = useState([]);
  const [isLinkListLoading, isLinkListError, getLinkListAsync] =
    useAsync(getApiInfo);

  const loadLinkList = useCallback(async () => {
    const result = await getLinkListAsync(
      endpoints.userLinks,
      errorMessages.userLinks,
      currentFolder
    );
    if (!result) return;
    const { data } = result;
    setLinkList(data);
  }, [currentFolder, getLinkListAsync]);

  useEffect(() => {
    loadLinkList();
  }, [currentFolder, loadLinkList]);

  return (
    <>
      {LinkList.length === 0 ? (
        <StyledNolink>
          <p>저장된 링크가 없습니다</p>
        </StyledNolink>
      ) : (
        <ul className="cards">
          {LinkList.map((item) => (
            <FolderMainCard
              key={item.id}
              item={item}
              target="_blank"
              rel="noreferrer"
              folderList={folderList}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default FolderMainCards;
