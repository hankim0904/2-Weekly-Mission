import { useEffect, useCallback } from 'react';

import useAsync from '@/hooks/useAsync';
import { getApiInfo } from '@/api/api';
import { ENDPOINT, ERROR_MESSAGE } from '@/stores/constants';

import styled from 'styled-components';
import FolderMainCard from '@/components/FolderMainCard';

import { Folder, Link } from '@/types/FolderType';

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

interface FolderMainCardsProps {
  currentFolder: number;
  folderList: Folder[];
}

interface LinkDataApiResponse {
  data: Link[];
}

function FolderMainCards({ currentFolder, folderList }: FolderMainCardsProps) {
  const getLinkList = useCallback(
    (): Promise<LinkDataApiResponse> =>
      getApiInfo(`${ENDPOINT.userLinks}${currentFolder ? `?folderId=${currentFolder}` : ''}`, ERROR_MESSAGE.userLinks),
    [currentFolder]
  );

  const { apiData: linkListResponse, execute: fetchLinkList } = useAsync(getLinkList);
  const linkList = linkListResponse?.data || [];

  useEffect(() => {
    fetchLinkList();
  }, [fetchLinkList]);

  return (
    <>
      {linkList.length === 0 ? (
        <StyledNolink>
          <p>저장된 링크가 없습니다</p>
        </StyledNolink>
      ) : (
        <ul className="cards">
          {linkList.map((item) => (
            <FolderMainCard key={item.id} linkData={item} target="_blank" rel="noreferrer" folderList={folderList} />
          ))}
        </ul>
      )}
    </>
  );
}

export default FolderMainCards;
