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
`;

const LargeButton = styled(BaseButton)`
  width: 280px;
`;

const MediumButton = styled(BaseButton)``;

const SmallButton = styled(BaseButton)``;

const DefaultButton = css`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

const RemoveButton = css`
  background-color: var(--red);
`;

const StyledDefaultButton = styled(BaseButton)`
  ${DefaultButton};
`;

const StyledRemoveButton = styled(BaseButton)`
  ${RemoveButton};
`;

interface ButtonProps {
  children: React.ReactNode;
  variant: 'default' | 'remove';
  size?: 'lg' | 'md' | 'sm';
}

function Button({ children, variant, size, ...props }: ButtonProps) {
  let ButtonComponent: any = BaseButton;

  switch (size) {
    case 'lg':
      ButtonComponent = LargeButton;
      break;
    case 'md':
      ButtonComponent = MediumButton;
      break;
    case 'sm':
      ButtonComponent = SmallButton;
      break;
    default:
      break;
  }

  let StyledComponent: any;

  switch (variant) {
    case 'default':
      StyledComponent = StyledDefaultButton;
      break;
    case 'remove':
      StyledComponent = StyledRemoveButton;
      break;
    default:
      break;
  }

  return <StyledComponent {...props}>{children}</StyledComponent>;
}

export default Button;
