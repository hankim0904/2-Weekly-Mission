import styled from 'styled-components';

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3.2rem;
  width: 40rem;

  .sign-input {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    &-element {
      display: flex;
      flex-direction: column;

      label {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 1.2rem;
      }
    }
  }

  @media (max-width: 767px) {
    width: calc(100vw - 6.5rem);
  }
`;
