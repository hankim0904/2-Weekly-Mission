import styled, { css } from 'styled-components';

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #f5f5f5;
  padding: 16px 0;
  border-radius: 8px;
  outline: none;
  border: none;
  width: 100%;
`;

const StyledDefaultButton = styled(BaseButton)`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

const StyledRedButton = styled(BaseButton)`
  background-color: var(--red);
`;

interface ButtonProps {
  children: React.ReactNode;
  colorVariant: 'default' | 'red';
}

function Button({ children, colorVariant }: ButtonProps) {
  let StyledComponent: any;

  switch (colorVariant) {
    case 'default':
      StyledComponent = StyledDefaultButton;
      break;
    case 'red':
      StyledComponent = StyledRedButton;
      break;
    default:
      break;
  }

  return <StyledComponent>{children}</StyledComponent>;
}

export default Button;
