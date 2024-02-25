import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as S from '@/styles/global';
import NiceModal from '@ebay/nice-modal-react';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <S.GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <NiceModal.Provider>
          <Component {...pageProps} />
        </NiceModal.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
