import { useState } from 'react';

import useAsync from '../hooks/useAsync';
import { endpoints, errorMessages, getApiInfo } from '../api/api';

import FolderHeader from '../components/FolderHeader';
import FolderMain from '../components/FolderMain';
import Layout from '../components/common/Layout';

function FolderPage() {
  const [currentFolder, setCurrentFolder] = useState({
    id: '',
    name: '전체',
  });
  const getFolderList = () =>
    getApiInfo(endpoints.userFolders, errorMessages.userFolders);
  const { data: folderListResponse } = useAsync(getFolderList);
  const folderListData = folderListResponse?.data || [];
  return (
    <Layout isSticky={false}>
      <FolderHeader folderList={folderListData} />
      <FolderMain
        folderList={folderListData}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
      />
    </Layout>
  );
}

export default FolderPage;
