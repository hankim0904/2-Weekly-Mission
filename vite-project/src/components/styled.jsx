import styled, { createGlobalStyle, css } from "styled-components";

const flex = css`
  display: flex;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Pretendard";
}

html,
body {
  font-size: 62.5%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor:pointer;
}

:root {
  --primary: #6d6afe;
  --red: #ff5b56;
  --black: #111322;
  --white: #ffffff;

  --gray100: #373740;
  --gray60: #9fa6b2;
  --gray20: #ccd5e3;
  --gray10: #e7effb;

  --background: #f0f6ff;
}
`;

export const Nav = styled.nav`
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

export const Footer = styled.footer`
  margin-top: 6rem;
  background-color: var(--black);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;

  .footer-notice {
    height: 16rem;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 6.4rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .copyright {
    font-family: Arial;
    color: #676767;
  }

  .footer-link {
    font-family: Arial;
    color: #cfcfcf;
  }

  .footer-links {
    display: flex;
    gap: 3rem;
  }

  .footer-sns {
    display: flex;
    gap: 1.2rem;
  }

  .footer-sns img {
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    margin-top: 4rem;

    .footer-notice {
      width: 100%;
      padding: 3.2rem 3.2rem;
      margin: 0;
      display: grid;
      grid-template-areas:
        "footer-links sns"
        "copyright .";
      row-gap: 6rem;
    }

    .copyright {
      grid-area: copyright;
    }

    .footer-links {
      grid-area: footer-links;
    }

    .footer-sns {
      grid-area: sns;
    }
  }
`;

export const SharedHeader = styled.header`
  padding: 2rem 0 6rem;
  background-color: var(--background);

  .folder-owner {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    ${flex}
  }

  .owner-img {
    width: 6rem;
    height: 6rem;
  }

  .owner-name {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .folder-name {
    color: #000;
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    line-height: normal;
    margin-top: 2rem;
  }

  @media (max-width: 767px) {
    header {
      padding-bottom: 4rem;
    }

    .folder-owner {
      gap: 0.6rem;
    }

    .owner-img {
      width: 4rem;
      height: 4rem;
    }

    .owner-name {
      font-size: 1.4rem;
    }

    .folder-name {
      font-size: 3.2rem;
    }
  }
`;

export const SharedMain = styled.main`
  padding: 4rem 0;
  display: grid;
  justify-content: center;
  align-items: center;

  .search {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    background: #f5f5f5;
    border-radius: 1rem;
    padding-left: 1.6rem;
    margin: 0 auto 4rem;
  }

  .search-bar {
    width: 100%;
    border-radius: 1rem;
    border: none;
    background: #f5f5f5;
    padding: 1.5rem 1.6rem 1.5rem 0;
  }

  .search-bar::placeholder {
    color: #666;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .search-img {
    width: 1.6rem;
    height: 1.6rem;
    align-items: center;
    border: none;
    background-color: transparent;
    ${flex}
  }

  .cards {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }

  .card {
    width: 34rem;
    height: 33.4rem;
    border-radius: 1.5rem;
    box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .card-img-selected {
    overflow: hidden;
    height: 20rem;
  }

  .card-img-default {
    height: 20rem;
    background-color: #dddfff;
    align-items: center;
    ${flex}
  }

  .card-img-selected img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-img-default img {
    opacity: 0.2;
    flex-shrink: 0;
  }

  .card:hover .card-img-selected img,
  .card:hover .card-img-default img {
    transform: scale(130%);
  }

  .container {
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-ago {
    color: #666;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: normal;
  }

  .card-description {
    height: 4.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .card-date {
    overflow: hidden;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 1124px) {
    padding: 4rem 3.2rem;

    .cards {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 2.5rem;
      column-gap: 2.4rem;
    }
  }

  @media (max-width: 767px) {
    padding: 2rem 3.2rem;

    .search {
      margin-bottom: 3.2rem;
    }

    .cards {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }

    .card {
      width: 32.5rem;
      height: 32.7rem;
    }
  }
`;

export const FolderHeader = styled.header`
  padding: 6rem 0 9rem;
  background-color: #f0f6ff;

  form {
    width: 80rem;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    background: #fff;
    border-radius: 1.5rem;
    border: 1px solid #6d6afe;
    padding: 1.6rem 2rem;
    margin: 0 auto;
  }

  .link-icon {
    width: 2rem;
    height: 2rem;
    align-items: center;
    border: none;
    background-color: transparent;
    ${flex}
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: #fff;

    &::placeholder {
      color: #9fa6b2;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
    }
  }

  .link-cta {
    width: 8rem;
    border: none;
    border-radius: 0.8rem;
    background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem 1.6rem;
    align-items: center;
    white-space: nowrap;
    ${flex}
  }

  @media (max-width: 1124px) {
    padding: 6rem 3.25rem 9rem;

    form {
      width: 70.4rem;
    }
  }

  @media (max-width: 767px) {
    padding: 2.4rem 3.2rem 4rem;

    form {
      width: 32.5rem;
      padding: 0.8rem 1rem;
    }

    .link-icon {
      width: 1.6rem;
      height: 1.6rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`;

export const Main = styled(SharedMain)`
  .search {
    margin-bottom: 4rem;
  }

  .card {
    position: relative;
  }

  .star-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1;
    background-color: transparent;
    border: none;
  }

  .bundle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .kebab-button {
    background-color: transparent;
    border: none;
  }

  @media (max-width: 767px) {
    width: 32.5rem;
    margin: 0 auto;

    .search {
      margin-bottom: 3.2rem;
    }
  }
`;

export const Folder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  ul {
    list-style: none;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  button {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid #6d6afe;
    background: #fff;
    padding: 0.8rem 1.2rem;
    white-space: nowrap;

    &.focused {
      color: #fff;
      background: #6d6afe;
    }
  }

  .add {
    border: none;
  }

  .add-mobile {
    display: none;
  }

  @media (max-width: 767px) {
    margin-bottom: 2.8rem;

    .add {
      display: none;
    }

    .add-mobile {
      display: flex;
      padding: 0.8rem 2.4rem;
      color: var(--gray10);
      text-align: center;
      font-family: Abel;
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: -0.3px;
      position: fixed;
      bottom: 10.1rem;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 2;
      border-radius: 20px;
      border: 1px solid var(--white);
      background: var(--primary);
      align-items: center;
      gap: 0.4rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.02rem;
  }

  div {
    display: flex;
    gap: 1.2rem;

    button {
      display: flex;
      align-items: center;
      border: none;
      background-color: #fff;

      img {
        width: 1.8rem;
        height: 1.8rem;
      }

      span {
        color: #9fa6b2;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: normal;
      }
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 2rem;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const Nolink = styled.div`
  width: 106rem;
  padding: 4.1rem 0 3.5rem;
  margin-top: 1.6rem;

  p {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) {
    width: 32.5rem;

    p {
      font-size: 1.4rem;
    }
  }
`;
