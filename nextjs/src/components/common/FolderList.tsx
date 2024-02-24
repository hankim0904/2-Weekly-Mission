/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';

import { useQuery } from '@tanstack/react-query';
import { getFolderListQueryKey } from '@/api/queryKeys';
import { getFolderListApi } from '@/api/apiCollection';
import { Folder } from '@/types/FolderType';

const AddFolderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 2.4rem;
`;

const AddFolderListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f0f6ff;
  }

  &:hover p {
    color: #6d6afe;
  }
`;

const FolderName = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #373740;
`;

const LinkCount = styled.span`
  font-size: 14px;
  color: #9fa6b2;
  margin-left: 8px;
`;

const FolderList = () => {
  const {
    data: folderListData,
    isError: isFolderListError,
    isLoading: isFolderListLoading,
  } = useQuery({
    queryKey: getFolderListQueryKey(),
    queryFn: () => getFolderListApi(),
    staleTime: 1000 * 60 * 5,
  });

  if (isFolderListLoading) {
    return <div>Loading...</div>;
  }

  if (isFolderListError) {
    return <div>Error!</div>;
  }

  return (
    <AddFolderList>
      {folderListData.map((folder: Folder) => {
        return (
          <AddFolderListItem key={folder.id}>
            <FolderName>{folder.name}</FolderName>
            <LinkCount>{folder.link_count}개 링크</LinkCount>
          </AddFolderListItem>
        );
      })}
    </AddFolderList>
  );
};

export default FolderList;
