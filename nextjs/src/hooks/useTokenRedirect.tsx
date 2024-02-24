import { getCookie } from '@/utils/manageTokenInfo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useTokenRedirect = (tokenResponse?: string) => {
  const router = useRouter();

  useEffect(() => {
    const routeToFolderPage = () => {
      router.replace('/folder');
    };
    const accessTokenInCookie = getCookie('accessToken');

    if (tokenResponse || accessTokenInCookie) {
      routeToFolderPage();
    }
  }, [tokenResponse, router]);
};
