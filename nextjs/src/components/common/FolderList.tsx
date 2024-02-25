/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFolderListQueryKey } from '@/api/queryKeys';
import { getFolderListApi } from '@/api/api';

import styled from 'styled-components';
import { Folder } from '@/types/FolderType';
import Image from 'next/image';

interface ListItemProps {
  selected: boolean;
}

const AddFolderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 2.4rem;
`;

const AddFolderListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#f0f6ff' : '#fff')};
  cursor: pointer;

  &:hover {
    background-color: #f0f6ff;
  }

  &:hover p {
    color: #6d6afe;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
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

interface FolderListProps {
  selectedFolderId: number;
  setSelectedFolderId: (id: number) => void;
}

const FolderList = ({
  selectedFolderId,
  setSelectedFolderId,
}: FolderListProps) => {
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
          <AddFolderListItem
            key={folder.id}
            onClick={() => setSelectedFolderId(folder.id)}
            selected={folder.id === selectedFolderId}
          >
            <Container>
              <FolderName>{folder.name}</FolderName>
              <LinkCount>{folder.link_count}개 링크</LinkCount>
            </Container>
            {folder.id === selectedFolderId && (
              <Image
                src="/images/check.svg"
                alt="체크 아이콘"
                width={14}
                height={14}
              />
            )}
          </AddFolderListItem>
        );
      })}
    </AddFolderList>
  );
};

export default FolderList;
