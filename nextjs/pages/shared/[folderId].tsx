import { useState } from 'react';
import { useRouter } from 'next/router';
import useAsyncAxios from '@/hooks/useAsyncAxios';
import { axiosInstance } from '@/api/axiosInstance';
import { getApiInfo } from '@/api/api';
import { ENDPOINT, ERROR_MESSAGE } from '@/stores/constants';

import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import Layout from '@/components/common/Layout';

import { Link, Folder } from '@/types/SharedType';
import { APP_DIR_ALIAS } from 'next/dist/lib/constants';

interface FolderApiResponse {
  folder: Folder;
}

export async function getServerSideProps(context) {
  const folderId = context.query['folderId'];

  const folderResponse = await axiosInstance.get(`/folders/${folderId}`);
  const folderName = folderResponse.data.data[0].name;

  const userResponse = await axiosInstance.get('/users/1');
  const userProfile = userResponse.data.data[0];

  const linkResponse = await axiosInstance.get(`/users/1/links?folderId=${folderId}`);
  const links = linkResponse.data.data;

  return {
    props: {
      folderName,
      userProfile,
      links,
    },
  };
}

function SharedPage({ folderName, userProfile, links }) {
  return (
    <Layout userProfile={userProfile}>
      <SharedHeader folderName={folderName} userProfile={userProfile} />
      <SharedMain links={links} />
    </Layout>
  );
}

export default SharedPage;
