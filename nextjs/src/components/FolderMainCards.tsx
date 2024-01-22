import styled from 'styled-components';
import FolderMainCard from '@/components/FolderMainCard';

import { Folder, LinkListItem } from '@/types/FolderType';

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
  folderList: Folder[];
  linkList: LinkListItem[];
}

function FolderMainCards({ folderList, linkList }: FolderMainCardsProps) {
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
