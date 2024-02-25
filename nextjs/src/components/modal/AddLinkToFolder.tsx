import { FormEvent, useState } from 'react';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLinkToFolderApi } from '@/api/api';
import { getLinkListQueryKey } from '@/api/queryKeys';

import FolderList from '@/components/common/FolderList';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { NewLink } from '@/types/apiType';
import { useRouter } from 'next/router';

interface AddLinkToFolderProps {
  inputUrl: string;
  onCancel: () => void;
}

export default NiceModal.create(({ inputUrl }: AddLinkToFolderProps) => {
  const modal = useModal();
  return <AddLinkToFolder inputUrl={inputUrl} onCancel={modal.remove} />;
});

function AddLinkToFolder({ inputUrl, onCancel }: AddLinkToFolderProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const folderId = router.query['folderId'];
  const [selectedFolderId, setSelectedFolderId] = useState<number>(0);

  const { mutate } = useMutation({
    mutationFn: (newLink: NewLink) => postLinkToFolderApi(newLink),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getLinkListQueryKey(folderId),
      });
      onCancel();
    },
  });
  const handleLinkSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newLink: NewLink = { url: inputUrl, folderId: selectedFolderId };
    mutate(newLink);
  };

  return (
    <Modal modalTitle="폴더에 추가" subTitle={inputUrl} onClose={onCancel}>
      <form className="modal-content" onSubmit={handleLinkSubmit}>
        <FolderList
          selectedFolderId={selectedFolderId}
          setSelectedFolderId={setSelectedFolderId}
        />
        <Button colorVariant="default" type="submit">
          추가하기
        </Button>
      </form>
    </Modal>
  );
}
