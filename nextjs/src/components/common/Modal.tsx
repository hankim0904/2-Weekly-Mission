import { useEffect } from 'react';
import Overlay from '@/components/common/Overlay';
import styled from 'styled-components';
import Image from 'next/image';

const StyledModal = styled.div`
  position: relative;
  padding: 32px 40px;
  border: 1px solid #ccd5e3;
  border-radius: 15px;
  background-color: var(--white);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray100);
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: var(--gray10);
  position: absolute;
  top: 15px;
  right: 15px;
`;

const SubTitle = styled.p`
  color: var(--gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 8px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface ModalProps {
  onClose: () => void;
  modalTitle: string;
  subTitle?: string;
  children: React.ReactNode;
}

const Modal = ({ onClose, modalTitle, subTitle, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Overlay>
      <StyledModal>
        <CloseButton className="modal-btn-close" onClick={onClose}>
          <Image
            src="/images/close.svg"
            width={24}
            height={24}
            alt="모달 닫기 버튼"
          />
        </CloseButton>
        <Header className="modal-header">
          <ModalTitle>{modalTitle}</ModalTitle>
          <SubTitle>{subTitle}</SubTitle>
        </Header>
        <ModalContent className="modal-content">{children}</ModalContent>
      </StyledModal>
    </Overlay>
  );
};

export default Modal;
