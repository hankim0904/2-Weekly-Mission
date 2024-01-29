import styled, { css } from 'styled-components';

const flex = css`
  display: flex;
  justify-content: center;
`;

export const SharedMain = styled.main`
  padding: 4rem 0;
  margin: 0 auto;
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
  }

  .card-img-selected {
    border-radius: 15px 15px 0 0;
    overflow: hidden;
    height: 20rem;
  }

  .card-img-default {
    height: 20rem;
    border-radius: 15px 15px 0 0;
    background-color: #dddfff;
    align-items: center;
    ${flex}
  }

  .card-img-selected img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease-in-out 0.3s;
  }

  .card-img-default img {
    opacity: 0.2;
    flex-shrink: 0;
    transition: all ease-in-out 0.3s;
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
