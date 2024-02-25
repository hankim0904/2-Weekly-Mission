import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import {
  getFolderListQueryKey,
  getLinkListQueryKey,
  getUserQueryKey,
} from '@/api/queryKeys';
import { getFolderListApi, getLinkListApi, getSignedUserApi } from '@/api/api';

import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';
import Layout from '@/components/common/Layout';
import { getCookie } from '@/utils/manageTokenInfo';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const { accessToken } = context.req.cookies;
  const folderId = '';

  await queryClient.prefetchQuery({
    queryKey: getUserQueryKey(),
    queryFn: () => getSignedUserApi(accessToken),
  });

  await queryClient.prefetchQuery({
    queryKey: getFolderListQueryKey(),
    queryFn: () => getFolderListApi(accessToken),
  });

  // await queryClient.prefetchQuery({
  //   queryKey: getLinkListQueryKey(folderId),
  //   queryFn: () => getLinkListApi(folderId, accessToken),
  // });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function FolderPage({ dehydratedState }: { dehydratedState: DehydratedState }) {
  const router = useRouter();
  const [currentFolder, setCurrentFolder] = useState('');

  useEffect(() => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      router.push('/signin');
    } else {
      const { folderId } = router.query;
      folderId && setCurrentFolder(folderId as string);
    }
  }, [router]);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Layout isSticky={false}>
        <FolderHeader />
        <FolderMain currentFolder={currentFolder} />
      </Layout>
    </HydrationBoundary>
  );
}

export default FolderPage;
