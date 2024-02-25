import { ChangeEvent, FormEvent, useState } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddFolderApi, putEditFolderApi } from '@/api/apiCollection';
import { getFolderListQueryKey } from '@/api/queryKeys';

import Modal from '@/components/common/Modal';
import ModalSearch from '../common/ModalSearch';
import Button from '@/components/common/Button';
import { NewFolder } from '@/types/apiType';

interface AddLinkToFolderProps {
  currentFolder: string;
  currentFolderName?: string;
  isEdit?: boolean;
  onCancel: () => void;
}

export default NiceModal.create(
  ({
    currentFolder,
    currentFolderName,
    isEdit = false,
  }: AddLinkToFolderProps) => {
    const modal = useModal();
    return (
      <AddFolder
        currentFolder={currentFolder}
        currentFolderName={currentFolderName}
        isEdit={isEdit}
        onCancel={modal.remove}
      />
    );
  }
);

function AddFolder({
  isEdit,
  currentFolder,
  currentFolderName,
  onCancel,
}: AddLinkToFolderProps) {
  const queryClient = useQueryClient();
  const [inputFolderName, setInputFolderName] = useState<string>(
    currentFolderName ? currentFolderName : ''
  );

  const addFolderMutation = useMutation({
    mutationFn: (newFolder: NewFolder) => postAddFolderApi(newFolder),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getFolderListQueryKey(),
      });
      onCancel();
    },
  });

  const editFolderMutation = useMutation({
    mutationFn: (editedFolder: NewFolder) =>
      putEditFolderApi(editedFolder, currentFolder),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getFolderListQueryKey(),
      });
      onCancel();
    },
  });

  const handleInputFolderNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFolderName(e.target.value);
  };

  const handleFolderSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFolder = { name: inputFolderName };
    const editedFolder = { name: inputFolderName };
    isEdit
      ? editFolderMutation.mutate(editedFolder)
      : addFolderMutation.mutate(newFolder);
  };

  return (
    <Modal
      modalTitle={isEdit ? '폴더 이름 변경' : '폴더 추가'}
      onClose={onCancel}
    >
      <form className="modal-content" onSubmit={handleFolderSubmit}>
        <ModalSearch
          placeholder="내용 입력"
          onChange={handleInputFolderNameChange}
          value={inputFolderName}
        />
        <Button colorVariant="default" type="submit">
          {isEdit ? '변경하기' : '추가하기'}
        </Button>
      </form>
    </Modal>
  );
}
