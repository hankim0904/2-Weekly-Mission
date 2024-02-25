import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@tanstack/react-query';
import { getFolderListQueryKey } from '@/api/queryKeys';
import { getFolderListApi } from '@/api/api';

import { useModal } from '@ebay/nice-modal-react';
import AddOrEditFolderModal from './modal/AddOrEditFolder';
import ShareFolderModal from './modal/ShareFolder';
import DeleteFolderOrLinkModal from './modal/DeleteFolderOrLink';

import * as S from '@/styles/Main';
import classNames from 'classnames';
import Image from 'next/image';

import FolderMainCards from '@/components/FolderMainCards';
import { Folder } from '@/types/FolderType';

interface FolderMainProps {
  currentFolder: string;
}

function FolderMain({ currentFolder }: FolderMainProps) {
  const router = useRouter();
  const [currentFolderName, setCurrentFolderName] = useState('');
  const addFolderModal = useModal(AddOrEditFolderModal);
  const editFolderModal = useModal(AddOrEditFolderModal);
  const shareFolderModal = useModal(ShareFolderModal);
  const DeleteFolderModal = useModal(DeleteFolderOrLinkModal);

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
        <button className="add" onClick={() => addFolderModal.show()}>
          <Image
            src="/images/add.svg"
            width={16}
            height={16}
            alt="폴더 추가 아이콘"
          />
        </button>
        <button className="add-mobile" onClick={() => addFolderModal.show()}>
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
            <button
              onClick={() => shareFolderModal.show({ currentFolderName })}
            >
              <Image
                src="/images/share.svg"
                width={18}
                height={18}
                alt="공유 아이콘"
              />
              <span>공유</span>
            </button>
            <button
              onClick={() =>
                editFolderModal.show({
                  currentFolder,
                  currentFolderName,
                  isEdit: true,
                })
              }
            >
              <Image
                src="/images/pen.svg"
                width={18}
                height={18}
                alt="이름변경 아이콘"
              />
              <span>이름 변경</span>
            </button>
            <button
              onClick={() =>
                DeleteFolderModal.show({
                  currentId: currentFolder,
                  subTitle: currentFolderName,
                })
              }
            >
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
      <FolderMainCards />
    </S.Main>
  );
}

export default FolderMain;
