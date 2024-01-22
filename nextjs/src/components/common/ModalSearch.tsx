import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 1.8rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: var(--gray100);
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray20);
  background: var(--white);
  outline: none;

  &:hover,
  &:focus {
    border: 0.1rem solid var(--primary);
  }
`;

const ModalSearch = ({ type = 'text', ...props }) => {
  return <StyledInput type={type} {...props} />;
};

export default ModalSearch;
