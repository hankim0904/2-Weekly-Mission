import { ChangeEventHandler, FocusEventHandler, useState, forwardRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
`;

const InputField = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ $isError }) => ($isError ? 'var(--red)' : 'var(--gray20)')};
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray100);
  line-height: 2.4rem;

  &::placeholder {
    color: var(--gray60);
  }

  &:focus {
    border: 1px solid ${({ $isError }) => ($isError ? 'var(--red)' : 'var(--gray20)')};
  }
`;

const EyeIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translate(0%, -50%);

  button {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const HelperText = styled.p`
  padding-top: 0.6rem;
  color: var(--red);
  font-size: 1.4rem;
  font-weight: 400;
`;

interface InputProps {
  placeholder?: string;
  isPassword: boolean;
  $isError: boolean;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, isPassword = false, $isError = false, helperText, onChange, onBlur }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);

    const handleTogglePassword = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <>
        <InputContainer>
          <InputField
            ref={ref}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder={placeholder}
            $isError={$isError}
            onChange={onChange}
            onBlur={onBlur}
          />
          {isPassword && (
            <EyeIcon>
              <button type="button" onClick={handleTogglePassword}>
                {isPasswordVisible ? (
                  <Image fill src={'/images/eye-on.svg'} alt="비밀번호 보이기 아이콘" />
                ) : (
                  <Image fill src={'/images/eye-off.svg'} alt="비밀번호 가리기 아이콘" />
                )}
              </button>
            </EyeIcon>
          )}
        </InputContainer>
        {$isError && <HelperText>{helperText}</HelperText>}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
