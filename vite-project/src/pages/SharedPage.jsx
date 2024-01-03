import { endpoints, errorMessages, getApiInfo } from '../api/api';
import useAsync from '../hooks/useAsync';
import SharedHeader from '../components/SharedHeader';
import SharedMain from '../components/SharedMain';
import Layout from '../components/common/Layout';

function SharedPage() {
  const getFolder = () => getApiInfo(endpoints.folder, errorMessages.folder);
  const {
    isLoading: isFolderLoading,
    data: { folder: folderData },
  } = useAsync(getFolder);
  const { links } = folderData || {};

  return (
    <Layout>
      {!isFolderLoading && <SharedHeader folder={folderData} />}
      <SharedMain links={links} />
    </Layout>
  );
}

export default SharedPage;
