/* eslint-disable @next/next/no-img-element */
import { MouseEvent, useState } from 'react';

import { useModal } from '@ebay/nice-modal-react';
import AddLinkToFolderModal from './modal/AddLinkToFolder';
import DeleteFolderOrLinkModal from './modal/DeleteFolderOrLink';

import styled from 'styled-components';
import classNames from 'classnames';

import { LinkListItem } from '@/types/FolderType';
import { formatDate, countAgo } from '@/utils/getDateInfo';
import Image from 'next/image';

const StyledFolderMainCard = styled.li`
  .kebab-menu {
    position: absolute;
    z-index: 2;

    list-style: none;
    box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  }

  .hide {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  .kebab-menu button {
    display: block;
    width: 100px;
    padding: 7px 0;
    font-size: 14px;
    font-weight: 400;
    background-color: #fff;
    border: none;
    outline: none;
  }

  .kebab-menu li:hover button {
    color: var(--primary);
    background-color: #e7effb;
  }
`;

interface FolderMainCardProps {
  linkData: LinkListItem;
  target: string;
  rel: string;
}

function FolderMainCard({ linkData, target, rel }: FolderMainCardProps) {
  const addLinkToFolderModal = useModal(AddLinkToFolderModal);
  const deleteLinkModal = useModal(DeleteFolderOrLinkModal);
  const { id, created_at, url, title, description, image_source } = linkData;
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);

  const handleToggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsSelectMenuOpen((prev) => !prev);
  };

  return (
    <StyledFolderMainCard
      className="card"
      onClick={() => setIsSelectMenuOpen(false)}
    >
      <button className="star-button">
        <Image
          src="/images/star.svg"
          width={34}
          height={34}
          alt="별모양 버튼"
        />
      </button>

      <a href={url} target={target} rel={rel}>
        {image_source ? (
          <div className="card-img-selected">
            <img src={image_source} alt={title || '이미지 없음'} />
          </div>
        ) : (
          <div className="card-img-default">
            <Image
              src="/images/logo.svg"
              width={133}
              height={24}
              alt="기본 이미지"
            />
          </div>
        )}
      </a>

      <div className="container">
        <div className="bundle">
          <span className="card-ago">{countAgo(created_at)}</span>
          <div>
            <button className="kebab-button" onClick={handleToggleMenu}>
              <Image
                src="/images/kebab.svg"
                width={21}
                height={17}
                alt="케밥 버튼"
              />
            </button>

            {isSelectMenuOpen && (
              <ul
                className={classNames('kebab-menu', {
                  hide: !isSelectMenuOpen,
                })}
              >
                <li>
                  <button
                    onClick={() =>
                      deleteLinkModal.show({
                        currentId: id,
                        subTitle: url,
                        isLink: true,
                      })
                    }
                  >
                    삭제하기
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => addLinkToFolderModal.show({ inputUrl: url })}
                  >
                    폴더에 추가
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <p className="card-description">{description}</p>
        <span className="card-date">{formatDate(created_at)}</span>
      </div>
    </StyledFolderMainCard>
  );
}

export default FolderMainCard;
