import { useState } from 'react';

import * as S from '@/styles/Main';
import classNames from 'classnames';

import FolderMainCards from '@/components/FolderMainCards';
import Modal from '@/components/common/Modal';
import Input from '@/components/./common/Input';
import Button from '@/components/common/Button';
import ShareLink from '@/components/common/ShareLink';

import { Folder, CurrentFolder } from '@/types/FolderType';
import Image from 'next/image';

interface FolderMainProps {
  folderList: Folder[];
  currentFolder: CurrentFolder;
  setCurrentFolder: React.Dispatch<React.SetStateAction<CurrentFolder>>;
}

function FolderMain({
  folderList,
  currentFolder,
  setCurrentFolder,
}: FolderMainProps) {
  const [isAddModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);

  const handleFolderClick = (folderId: number, folderName: string) => {
    setCurrentFolder({
      id: folderId,
      name: folderName,
    });
  };

  const handleAddModal = () => {
    setIsModalOpen(true);
  };

  const handleShareModal = () => {
    setIsShareModalOpen(true);
  };
  const handleEditModal = () => {
    setIsEditModalOpen(true);
  };
  const handleRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsShareModalOpen(false);
    setIsEditModalOpen(false);
    setIsRemoveModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <S.Main>
      <form className="search">
        <button className="search-img">
          <Image src="/images/search.svg" width={16} height={16} alt="search" />
        </button>
        <input className="search-bar" placeholder="링크를 검색해 보세요." />
      </form>
      <S.Folder>
        <ul>
          <li
            onClick={() => {
              handleFolderClick(0, '');
            }}
          >
            <button className={classNames({ focused: !currentFolder.name })}>
              전체
            </button>
          </li>
          {folderList?.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  handleFolderClick(item.id, item.name);
                }}
              >
                <button
                  className={classNames({
                    focused: currentFolder.name === item.name,
                  })}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="add" onClick={handleAddModal}>
          <Image
            src="/images/add.svg"
            width={16}
            height={16}
            alt="폴더 추가 아이콘"
          />
        </button>
        <button className="add-mobile" onClick={handleAddModal}>
          폴더 추가
          <Image
            src="/images/add_white.svg"
            width={16}
            height={16}
            alt="폴더 추가 아이콘 흰색"
          />
        </button>
      </S.Folder>
      <S.Title>
        {currentFolder.name ? <h1>{currentFolder.name}</h1> : <h1>전체</h1>}
        {currentFolder.id !== 0 && (
          <div>
            <button onClick={handleShareModal}>
              <Image
                src="/images/share.svg"
                width={18}
                height={18}
                alt="공유 아이콘"
              />
              <span>공유</span>
            </button>
            <button onClick={handleEditModal}>
              <Image
                src="/images/pen.svg"
                width={18}
                height={18}
                alt="이름변경 아이콘"
              />
              <span>이름 변경</span>
            </button>
            <button onClick={handleRemoveModal}>
              <Image
                src="/images/bin.svg"
                width={18}
                height={18}
                alt="삭제 아이콘"
              />
              <span>삭제</span>
            </button>
          </div>
        )}
      </S.Title>
      <FolderMainCards
        currentFolder={currentFolder.id}
        folderList={folderList}
      />

      {isAddModalOpen && (
        <Modal modalTitle="폴더 추가" onClose={handleCloseModal}>
          <div className="modal-content">
            <Input placeholder="내용 입력" />
            <Button variant="default" size="lg">
              추가하기
            </Button>
          </div>
        </Modal>
      )}

      {isShareModalOpen && (
        <Modal
          modalTitle="폴더 공유"
          subTitle={currentFolder.name}
          onClose={handleCloseModal}
        >
          <div className="modal-content">
            <ShareLink />
          </div>
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal modalTitle="폴더 이름 변경" onClose={handleCloseModal}>
          <div className="modal-content">
            <Input placeholder="내용 입력" />
            <Button variant="default" size="lg">
              변경하기
            </Button>
          </div>
        </Modal>
      )}

      {isRemoveModalOpen && (
        <Modal
          modalTitle="폴더 삭제"
          subTitle={currentFolder.name}
          onClose={handleCloseModal}
        >
          <div className="modal-content">
            <Button variant="remove" size="lg">
              삭제하기
            </Button>
          </div>
        </Modal>
      )}
    </S.Main>
  );
}

export default FolderMain;
