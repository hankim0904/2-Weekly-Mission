import { ReactNode } from 'react';
import styled from 'styled-components';

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background);
`;

interface SignLayoutProps {
  header: ReactNode;
  form: ReactNode;
  oauth: ReactNode;
}

const SignLayout = ({ header, form, oauth }: SignLayoutProps) => {
  return (
    <>
      <SignContainer>
        {header}
        {form}
        {oauth}
      </SignContainer>
    </>
  );
};

export default SignLayout;
