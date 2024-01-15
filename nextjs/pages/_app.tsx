import type { AppProps } from 'next/app';
import * as S from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <S.GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
