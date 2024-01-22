import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';
import Layout from '@/components/common/Layout';

import instance from '@/api/InterceptorManager';

function FolderPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState({});
  const [folderList, setFolderList] = useState([]);
  const [linkList, setLinkList] = useState([]);
  const [currentFolder, setCurrentFolder] = useState('');

  const getUserProfile = async () => {
    const userProfileResponse = await instance.get('/users');
    const userProfileData = userProfileResponse.data.data[0];
    setUserProfile(userProfileData);
  };

  const getFolderList = async () => {
    const folderListResponse = await instance.get(`/folders`);
    const folderListData = folderListResponse.data.data.folder;
    setFolderList(folderListData);
  };

  const getLinkList = async (folderId: string) => {
    const endpoint = folderId ? `/links?folderId=${folderId}` : '/links';
    const linkListResponse = await instance.get(endpoint);
    const linkListData = linkListResponse.data.data.folder;
    setLinkList(linkListData);
  };

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (!accessToken) {
      router.push('/signin');
    } else {
      const { folderId } = router.query;
      folderId && setCurrentFolder(folderId);

      getUserProfile();
      getFolderList();
      getLinkList(folderId);
    }
  }, [router]);

  return (
    <Layout userProfile={userProfile} isSticky={false}>
      <FolderHeader folderList={folderList} />
      <FolderMain folderList={folderList} linkList={linkList} currentFolder={currentFolder} />
    </Layout>
  );
}

export default FolderPage;
