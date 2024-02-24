/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Folder } from "@/types/FolderType";
import instance from "@/api/axiosInstance";

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

interface FolderListProps {
  folderList: Folder[];
}

const FolderList = ({ folderList }: FolderListProps) => {
  const [folderListItems, setFolderListItems] = useState<React.ReactNode[]>([]);

  const getLinkList = async (folderId: number) => {
    const endpoint = `/links?folderId=${folderId}`;
    const linkListResponse = await instance.get(endpoint);
    const linkListData = linkListResponse.data.data.folder;
    return linkListData.length;
  };

  const renderFolderList = async () => {
    const items = await Promise.all(
      folderList.map(async (item) => {
        const linkCount = await getLinkList(item.id);
        return (
          <AddFolderListItem key={item.id}>
            <FolderName>{item.name}</FolderName>
            <LinkCount>{linkCount}개 링크</LinkCount>
          </AddFolderListItem>
        );
      })
    );

    setFolderListItems(items);
  };

  useEffect(() => {
    renderFolderList();
  }, []);

  return <AddFolderList>{folderListItems}</AddFolderList>;
};

export default FolderList;
