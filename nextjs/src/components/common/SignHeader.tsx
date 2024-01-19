import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3rem;

  .title-logo {
    width: 21rem;
    height: 3.8rem;
    position: relative;
  }

  .title-suggestion {
    display: flex;
    gap: 0.8rem;
    font-size: 1.6rem;
    font-weight: 400;

    .title-suggestion-link {
      color: var(--primary);
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }
`;

type SignHeaderProps = {
  message: string;
  link: {
    href: string;
    text: string;
  };
};

const SignHeader = ({ message, link }: SignHeaderProps) => {
  const { href, text } = link;
  return (
    <TitleContainer>
      <Link href="/">
        <div className="title-logo">
          <Image fill priority={true} src="/images/logo.svg" alt="Linkabrary 로고" />
        </div>
      </Link>
      <div className="title-suggestion">
        <span>{message}</span>
        <Link className="title-suggestion-link" href={href}>
          {text}
        </Link>
      </div>
    </TitleContainer>
  );
};

export default SignHeader;
