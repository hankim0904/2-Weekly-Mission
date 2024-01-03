import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { endpoints, errorMessages, getApiInfo } from "../../api/api";
import useAsync from "../../hooks/useAsync";
import styled from "styled-components";
import logo from "../../../../images/landing/logo.svg";

const flex = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  background: var(--background);
  position: ${({ $isFolderPage }) => ($isFolderPage ? `static` : `sticky`)};
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
    background-image: linear-gradient(
      91deg,
      var(--primary) 0.12%,
      #6ae3fe 101.84%
    );
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
    width: 2.8rem;
    height: 2.8rem;
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

    .cta.logo {
      width: 8.87rem;
      height: 1.6rem;
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

function Navigation() {
  const location = useLocation();
  const isFolderPage = location.pathname === "/folder";
  const [profile, setProfile] = useState({});
  const [isProfileLoading, isProfileError, getProfileAsync] =
    useAsync(getApiInfo);

  const loadProfile = async () => {
    const result = await getProfileAsync(endpoints.user, errorMessages.user);
    if (!result) return;
    const { data } = result;
    const { image_source, email } = data[0];
    setProfile({ image_source, email });
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <Nav $isFolderPage={isFolderPage}>
      <div className="gnb">
        <a href="/">
          <img className="cta logo" src={logo} alt="로고" />
        </a>
        {profile ? (
          <div className="cta profile">
            <img
              className="profile-logo"
              src={profile.image_source}
              alt="프로필 로고"
            />
            <span className="profile-email">{profile.email}</span>
          </div>
        ) : (
          <a href="../../../signin/index.html">
            <button className="cta login" type="button">
              로그인
            </button>
          </a>
        )}
      </div>
    </Nav>
  );
}

export default Navigation;
