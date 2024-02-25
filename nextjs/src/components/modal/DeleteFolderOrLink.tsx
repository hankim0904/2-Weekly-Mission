import { FormEvent } from 'react';
import { useRouter } from 'next/router';

import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFolderApi, deleteLinkApi } from '@/api/apiCollection';
import { getFolderListQueryKey, getLinkListQueryKey } from '@/api/queryKeys';

import Modal from '../common/Modal';
import Button from '../common/Button';

interface DeleteFolderOrLinkProps {
  currentId: string | number | undefined;
  subTitle?: string;
  isLink?: boolean;
  onCancel: () => void;
}

export default NiceModal.create(
  ({ currentId, subTitle, isLink = false }: DeleteFolderOrLinkProps) => {
    const modal = useModal();
    return (
      <DeleteFolderOrLink
        currentId={currentId}
        subTitle={subTitle}
        isLink={isLink}
        onCancel={modal.remove}
      />
    );
  }
);

function DeleteFolderOrLink({
  currentId,
  subTitle,
  isLink,
  onCancel,
}: DeleteFolderOrLinkProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const folderId = router.query['folderId'];

  const deleteFolderMutation = useMutation({
    mutationFn: () => deleteFolderApi(currentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getFolderListQueryKey(),
      });
      onCancel();
      router.push('/folder');
    },
  });

  const deleteLinkMutation = useMutation({
    mutationFn: () => deleteLinkApi(currentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getLinkListQueryKey(folderId),
      });
      onCancel();
    },
  });

  const handleDeleteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLink ? deleteLinkMutation.mutate() : deleteFolderMutation.mutate();
  };

  return (
    <Modal
      modalTitle={isLink ? '링크 삭제' : '폴더 삭제'}
      subTitle={subTitle}
      onClose={onCancel}
    >
      <form className="modal-content" onSubmit={handleDeleteSubmit}>
        <Button colorVariant="red" type="submit">
          삭제하기
        </Button>
      </form>
    </Modal>
  );
}
