import styled from 'styled-components';
import Image from 'next/image';

const EyeIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: relative;

  button {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

interface PasswordEyeButtonProps {
  inputType: string;
  onToggle: () => void;
}

const PasswordEyeButton = ({ inputType, onToggle }: PasswordEyeButtonProps) => {
  return (
    <EyeIcon>
      <button type="button" onClick={onToggle}>
        {inputType === 'text' ? (
          <Image fill src={'/images/eye-on.svg'} alt="비밀번호 보이기 아이콘" />
        ) : (
          <Image fill src={'/images/eye-off.svg'} alt="비밀번호 가리기 아이콘" />
        )}
      </button>
    </EyeIcon>
  );
};

export default PasswordEyeButton;
