import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@tanstack/react-query';
import { getFolderListQueryKey } from '@/api/queryKeys';
import { getFolderListApi } from '@/api/apiCollection';

import * as S from '@/styles/Main';
import classNames from 'classnames';
import Image from 'next/image';

import FolderMainCards from '@/components/FolderMainCards';
import Modal from '@/components/common/Modal';
import ModalSearch from '@/components/common/ModalSearch';
import Button from '@/components/common/Button';
import ShareLink from '@/components/common/ShareLink';
import { Folder, LinkListItem } from '@/types/FolderType';

interface FolderMainProps {
  currentFolder: string;
}

function FolderMain({ currentFolder }: FolderMainProps) {
  const router = useRouter();
  const [currentFolderName, setCurrentFolderName] = useState('');
  const [isAddModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);

  const {
    data: folderListData,
    isError: isFolderListError,
    isLoading: isFolderListLoading,
  } = useQuery({
    queryKey: getFolderListQueryKey(),
    queryFn: () => getFolderListApi(),
    staleTime: 1000 * 60 * 5,
  });

  const handleFolderClick = (folderId: string | number) => {
    router.push(`/folder/${folderId}`);
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

  useEffect(() => {
    const folderName = folderListData.find(
      (folder: Folder) => String(folder.id) === currentFolder
    )?.name;
    folderName && setCurrentFolderName(folderName);
  }, [currentFolder, folderListData]);

  if (isFolderListLoading) {
    return <div>Loading...</div>;
  }

  if (isFolderListError) {
    return <div>Error!</div>;
  }

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
              handleFolderClick('');
            }}
          >
            <button className={classNames({ focused: !currentFolder })}>
              전체
            </button>
          </li>
          {folderListData?.map((folder: Folder) => {
            return (
              <li
                key={folder.id}
                onClick={() => {
                  handleFolderClick(folder.id);
                }}
              >
                <button
                  className={classNames({
                    focused: currentFolder === String(folder.id),
                  })}
                >
                  {folder.name}
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
        {currentFolder ? <h1>{currentFolderName}</h1> : <h1>전체</h1>}
        {currentFolder && (
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
      <FolderMainCards folderList={folderListData} />

      {isAddModalOpen && (
        <Modal modalTitle="폴더 추가" onClose={handleCloseModal}>
          <div className="modal-content">
            <ModalSearch placeholder="내용 입력" />
            <Button colorVariant="default">추가하기</Button>
          </div>
        </Modal>
      )}

      {isShareModalOpen && (
        <Modal
          modalTitle="폴더 공유"
          subTitle={currentFolderName}
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
            <ModalSearch placeholder="내용 입력" />
            <Button colorVariant="default">변경하기</Button>
          </div>
        </Modal>
      )}

      {isRemoveModalOpen && (
        <Modal
          modalTitle="폴더 삭제"
          subTitle={currentFolderName}
          onClose={handleCloseModal}
        >
          <div className="modal-content">
            <Button colorVariant="red">삭제하기</Button>
          </div>
        </Modal>
      )}
    </S.Main>
  );
}

export default FolderMain;
