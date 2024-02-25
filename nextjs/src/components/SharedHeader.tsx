/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import { useQuery } from '@tanstack/react-query';
import { getFolderQueryKey, getUserQueryKey } from '@/api/queryKeys';
import { getFolderApi, getSignedUserApi } from '@/api/api';

import styled from 'styled-components';

const flex = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSharedHeader = styled.header`
  padding: 2rem 0 6rem;
  background-color: var(--background);

  .folder-owner {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    ${flex}
  }

  .owner-img {
    width: 6rem;
    height: 6rem;
    position: relative;
  }

  .owner-name {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .folder-name {
    color: #000;
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    line-height: normal;
    margin-top: 2rem;
  }

  @media (max-width: 767px) {
    header {
      padding-bottom: 4rem;
    }

    .folder-owner {
      gap: 0.6rem;
    }

    .owner-img {
      width: 4rem;
      height: 4rem;
    }

    .owner-name {
      font-size: 1.4rem;
    }

    .folder-name {
      font-size: 3.2rem;
    }
  }
`;

function SharedHeader() {
  const router = useRouter();
  const folderId = router.query['folderId'];

  const {
    data: folderData,
    isError: isFolderError,
    isLoading: isFolderLoading,
  } = useQuery({
    queryKey: getFolderQueryKey(folderId),
    queryFn: () => getFolderApi(folderId),
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: userData,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: getUserQueryKey(),
    queryFn: () => getSignedUserApi(),
    staleTime: 1000 * 60 * 60,
  });

  if (isFolderLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  if (isFolderError || isUserError) {
    return <div>Error!</div>;
  }

  const folder = folderData[0];
  const user = userData[0];

  return (
    <StyledSharedHeader>
      <div className="folder-owner">
        <div className="owner-img">
          <img className="owner-img" src={user.image_source} alt={user.name} />
        </div>
        <span className="owner-name">@{user.name}</span>
      </div>
      <h1 className="folder-name">{folder.name}</h1>
    </StyledSharedHeader>
  );
}

export default SharedHeader;
