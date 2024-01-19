import Image from 'next/image';
import styled from 'styled-components';

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40rem;
  padding: 1.2rem 2.4rem;
  border-radius: 8px;
  border: 1px solid var(--gray20);
  background: var(--gray10);

  .social-title {
    color: var(--gray100);
    font-size: 1.4rem;
    font-weight: 400;
  }
  .social-logos {
    display: flex;
    gap: 1.6rem;

    a {
      width: 4.2rem;
      height: 4.2rem;
      display: block;
      position: relative;
    }
  }
`;

const Oauth = () => {
  return (
    <SocialLogin>
      <span className="social-title">소셜 로그인</span>
      <div className="social-logos">
        <a href="https://www.google.com/">
          <Image fill src="/images/google_logo.svg" alt="구글 로고" />
        </a>
        <a href="https://www.kakaocorp.com/page/">
          <Image fill src="/images/kakao_logo.svg" alt="카카오톡 로고" />
        </a>
      </div>
    </SocialLogin>
  );
};

export default Oauth;
