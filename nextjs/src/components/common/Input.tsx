import { useState, forwardRef, ReactNode, ChangeEventHandler, FocusEventHandler } from 'react';
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

const RightContent = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translate(0%, -50%);
`;

const HelperText = styled.p`
  padding-top: 0.6rem;
  color: var(--red);
  font-size: 1.4rem;
  font-weight: 400;
`;

type RightContentProps = {
  inputType: string;
  onToggle: () => void;
};

type RightContentType = (props: RightContentProps) => ReactNode;

interface InputProps {
  type: string;
  placeholder?: string;
  $isError: boolean;
  rightContent?: RightContentType;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, $isError = false, rightContent, helperText, onChange, onBlur }, ref) => {
    const [inputType, setInputType] = useState(type);

    const handleTogglePassword = () => {
      setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'));
    };

    return (
      <>
        <InputContainer>
          <InputField
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            $isError={$isError}
            onChange={onChange}
            onBlur={onBlur}
          />
          {rightContent && <RightContent>{rightContent({ inputType, onToggle: handleTogglePassword })}</RightContent>}
        </InputContainer>
        {helperText && <HelperText>{helperText}</HelperText>}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
