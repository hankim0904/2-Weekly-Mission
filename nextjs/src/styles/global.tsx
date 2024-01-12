import { createGlobalStyle } from 'styled-components';

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
  background: none;
	color: inherit;
	border: none;
  cursor:pointer;
}

input {
  outline: none;
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
