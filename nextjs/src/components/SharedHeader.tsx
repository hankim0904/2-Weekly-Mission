import styled from 'styled-components';
import { Folder } from '@/types/SharedType';
import Image from 'next/image';

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

function SharedHeader({ folder }: { folder: Folder }) {
  const {
    name,
    owner: { name: ownerName, profileImageSource },
  } = folder;

  return (
    <StyledSharedHeader>
      <div className="folder-owner">
        <div className="owner-img">
          <Image
            fill
            className="owner-img"
            src={profileImageSource}
            alt={ownerName}
          />
        </div>
        <span className="owner-name">@{ownerName}</span>
      </div>
      <h1 className="folder-name">{name}</h1>
    </StyledSharedHeader>
  );
}

export default SharedHeader;
