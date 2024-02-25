import { ChangeEvent, useState } from 'react';

import { useModal } from '@ebay/nice-modal-react';
import AddLinkToFolderModal from './modal/AddLinkToFolder';

import styled from 'styled-components';
import Image from 'next/image';

const flex = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFolderHeader = styled.header`
  padding: 6rem 0 9rem;
  background-color: #f0f6ff;

  form {
    width: 80rem;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    background: #fff;
    border-radius: 1.5rem;
    border: 1px solid #6d6afe;
    padding: 1.6rem 2rem;
    margin: 0 auto;
  }

  .link-icon {
    align-items: center;
    border: none;
    background-color: transparent;
    ${flex}
  }

  .link-icon-container {
    width: 2rem;
    height: 2rem;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: #fff;

    &::placeholder {
      color: #9fa6b2;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
    }
  }

  .link-cta {
    width: 8rem;
    border: none;
    border-radius: 0.8rem;
    background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem 1.6rem;
    align-items: center;
    white-space: nowrap;
    ${flex}
  }

  @media (max-width: 1124px) {
    padding: 6rem 3.25rem 9rem;

    form {
      width: 70.4rem;
    }
  }

  @media (max-width: 767px) {
    padding: 2.4rem 3.2rem 4rem;

    form {
      width: 32.5rem;
      padding: 0.8rem 1rem;
    }

    .link-icon {
      width: 1.6rem;
      height: 1.6rem;
    }

    .link-icon-container {
      width: 1.6rem;
      height: 1.6rem;
      position: relative;
    }
  }
`;

function FolderHeader() {
  const modal = useModal(AddLinkToFolderModal);
  const [inputUrl, setInputUrl] = useState<string>('');

  const handleInputUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  return (
    <StyledFolderHeader>
      <form>
        <button className="link-icon">
          <div className="link-icon-container">
            <Image fill src="/images/link.svg" alt="첨부 아이콘" />
          </div>
        </button>
        <input
          placeholder="링크를 추가해 보세요."
          onChange={handleInputUrlChange}
        />
        <button
          className="link-cta"
          onClick={(e) => {
            e.preventDefault();
            modal.show({ inputUrl });
          }}
        >
          추가하기
        </button>
      </form>
    </StyledFolderHeader>
  );
}

export default FolderHeader;
