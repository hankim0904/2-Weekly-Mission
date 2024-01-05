import useAsync from '../hooks/useAsync';
import { getApiInfo } from '../api/api';
import { ENDPOINT, ERROR_MESSAGE } from '../stores/constants';

import SharedHeader from '../components/SharedHeader';
import SharedMain from '../components/SharedMain';
import Layout from '../components/common/Layout';

interface FolderOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface LinkData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface Folder {
  id: number;
  name: string;
  owner: FolderOwner;
  links: LinkData[];
  count: number;
}

interface FolderApiResponse {
  folder: Folder;
}

function SharedPage() {
  const getFolder = (): Promise<FolderApiResponse> =>
    getApiInfo(ENDPOINT.folder, ERROR_MESSAGE.folder);
  const {
    isLoading: isFolderLoading,
    apiData: { folder: folderData },
  } = useAsync(getFolder);
  const { links }: { links: LinkData[] } = folderData || {};

  return (
    <Layout>
      {!isFolderLoading && <SharedHeader folder={folderData} />}
      <SharedMain links={links} />
    </Layout>
  );
}

export default SharedPage;
