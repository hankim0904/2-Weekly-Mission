import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import { UserProfile } from '@/types/FolderType';

const flex = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface NavProps {
  $isSticky: boolean;
}

const Nav = styled.nav<NavProps>`
  background: var(--background);
  position: ${({ $isSticky }) => ($isSticky ? `sticky` : `static`)};
  top: 0;
  z-index: 1;
  ${flex}

  .gnb {
    width: 100%;
    max-width: 192rem;
    padding: 2rem 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cta.login {
    width: 12.8rem;
    border: none;
    border-radius: 0.8rem;
    background-image: linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: normal;
    padding: 1.6rem 2rem;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    ${flex}
  }

  .profile-logo {
    border-radius: 50%;
  }

  .profile-email {
    color: var(--gray100);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }

  .cta.profile {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  @media (max-width: 1199px) {
    ${flex}
    .gnb {
      justify-content: space-between;
      padding: 2rem 3.2rem;
      max-width: 79.9rem;
    }
  }

  @media (max-width: 767px) {
    .gnb {
      padding: 1.3rem 3.2rem;
    }

    .cta.login {
      font-size: 1.4rem;
      width: 8rem;
      height: 3.7rem;
    }

    .profile-email {
      display: none;
    }
  }
`;

interface NavigationProps {
  userProfile: UserProfile;
  isSticky?: boolean;
}

function Navigation({ userProfile, isSticky = true }: NavigationProps) {
  return (
    <Nav $isSticky={isSticky}>
      <div className="gnb">
        <Link href="/">
          <Image className="cta logo" src="/images/logo.svg" width={88.7} height={16} alt="로고" />
        </Link>
        {userProfile ? (
          <div className="cta profile">
            {userProfile.image_source && (
              <Image className="profile-logo" src={userProfile.image_source} width={28} height={28} alt="프로필 로고" />
            )}
            <span className="profile-email">{userProfile.email}</span>
          </div>
        ) : (
          <button className="cta login" type="button">
            로그인
          </button>
        )}
      </div>
    </Nav>
  );
}

export default Navigation;
