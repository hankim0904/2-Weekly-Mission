import { useQuery } from '@tanstack/react-query';
import { getWholeLinkListQueryKey } from '@/api/queryKeys';
import { getWholeLinkListApi } from '@/api/apiCollection';

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

function FolderMainCards() {
  const {
    data: linkListData,
    isError: isLinkListError,
    isLoading: isLinkListLoading,
  } = useQuery({
    queryKey: getWholeLinkListQueryKey(),
    queryFn: () => getWholeLinkListApi(),
    staleTime: 1000 * 60 * 5,
  });

  if (isLinkListLoading) {
    return <div>Loading...</div>;
  }

  if (isLinkListError) {
    return <div>Error!</div>;
  }

  return (
    <>
      {linkListData.length === 0 ? (
        <StyledNolink>
          <p>저장된 링크가 없습니다</p>
        </StyledNolink>
      ) : (
        <ul className="cards">
          {linkListData.map((item: LinkListItem) => (
            <FolderMainCard
              key={item.id}
              linkData={item}
              target="_blank"
              rel="noreferrer"
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default FolderMainCards;
