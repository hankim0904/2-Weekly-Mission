import useAsync from '@/hooks/useAsync';
import { getApiInfo } from '@/api/api';
import { ENDPOINT, ERROR_MESSAGE } from '@/stores/constants';

import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import Layout from '@/components/common/Layout';

import { Link, Folder } from '@/types/SharedType';

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
  const { links }: { links: Link[] } = folderData || { links: [] };

  return (
    <Layout>
      {!isFolderLoading && <SharedHeader folder={folderData} />}
      <SharedMain links={links} />
    </Layout>
  );
}

export default SharedPage;
