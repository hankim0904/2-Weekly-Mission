import { useState } from 'react';

import useAsync from '../hooks/useAsync';
import { getApiInfo } from '../api/api';
import { ENDPOINT, ERROR_MESSAGE } from '../stores/constants';

import FolderHeader from '../components/FolderHeader';
import FolderMain from '../components/FolderMain';
import Layout from '../components/common/Layout';

interface CurrentFolder {
  id: number;
  name: string;
}

interface FolderData {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { count: number };
  name: string;
  user_id: number;
}

interface FolderDataApiResponse {
  data: FolderData[];
}

function FolderPage() {
  const [currentFolder, setCurrentFolder] = useState<CurrentFolder>({
    id: 0,
    name: '',
  });
  const getFolderList = (): Promise<FolderDataApiResponse> =>
    getApiInfo(ENDPOINT.userFolders, ERROR_MESSAGE.userFolders);

  const {
    apiData: { data: folderListData },
  } = useAsync(getFolderList);

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
