import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useTokenRedirect = (tokenResponse?: string) => {
  const router = useRouter();

  useEffect(() => {
    const routeToFolderPage = () => {
      router.replace('/folder');
    };
    const accessTokenInLocalStorage = localStorage.getItem('accessToken');

    if (tokenResponse || accessTokenInLocalStorage) {
      routeToFolderPage();
    }
  }, [tokenResponse, router]);
};
