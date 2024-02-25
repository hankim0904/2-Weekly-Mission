import NiceModal, { useModal } from '@ebay/nice-modal-react';
import Modal from '../common/Modal';
import ShareLink from '../common/ShareLink';

interface ShareFolderProps {
  currentFolderName: string;
  onCancel: () => void;
}

export default NiceModal.create(({ currentFolderName }: ShareFolderProps) => {
  const modal = useModal();
  return (
    <ShareFolder
      currentFolderName={currentFolderName}
      onCancel={modal.remove}
    />
  );
});

function ShareFolder({ currentFolderName, onCancel }: ShareFolderProps) {
  return (
    <Modal
      modalTitle="폴더 공유"
      subTitle={currentFolderName}
      onClose={onCancel}
    >
      <div className="modal-content">
        <ShareLink />
      </div>
    </Modal>
  );
}
