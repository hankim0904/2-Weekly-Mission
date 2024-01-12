import styled from 'styled-components';
import { Folder } from '../../types/FolderType';

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
  return (
    <AddFolderList>
      {folderList.map((item) => (
        <AddFolderListItem key={item.id}>
          <FolderName>{item.name}</FolderName>
          <LinkCount>{item.link.count}개 링크</LinkCount>
        </AddFolderListItem>
      ))}
    </AddFolderList>
  );
};

export default FolderList;
