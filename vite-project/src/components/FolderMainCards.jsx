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
  const [linkList, setLinkList] = useState([]);
  const getLinkList = useCallback(
    () =>
      getApiInfo(endpoints.userLinks, errorMessages.userLinks, currentFolder),
    [currentFolder]
  );
  const { data: LinkListResponse, execute: fetchLinkList } =
    useAsync(getLinkList);

  useEffect(() => {
    fetchLinkList();
  }, [fetchLinkList]);

  useEffect(() => {
    const LinkListData = LinkListResponse?.data || [];
    setLinkList(LinkListData);
  }, [LinkListResponse]);

  return (
    <>
      {linkList.length === 0 ? (
        <StyledNolink>
          <p>저장된 링크가 없습니다</p>
        </StyledNolink>
      ) : (
        <ul className="cards">
          {linkList.map((item) => (
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
