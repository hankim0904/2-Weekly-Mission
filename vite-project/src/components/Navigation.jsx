import * as S from "./styled";
import logo from "../../../images/landing/logo.svg";
import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import { endpoints, errorMessages, getApiInfo } from "../api";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const isFolderPage = location.pathname === "/folder";
  const [profile, setProfile] = useState({});
  const [isProfileLoading, ProfileError, getProfileAsync] =
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
    <S.Nav $isFolderPage={isFolderPage}>
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
    </S.Nav>
  );
}

export default Navigation;
