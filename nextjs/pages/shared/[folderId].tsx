import { axiosInstance } from '@/api/axiosInstance';
import { GetServerSidePropsContext } from 'next';

import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import Layout from '@/components/common/Layout';

import { Link, UserProfile } from '@/types/SharedType';

interface SharedPageProps {
  folderName: string;
  userProfile: UserProfile;
  links: Link[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
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

function SharedPage({ folderName, userProfile, links }: SharedPageProps) {
  return (
    <Layout userProfile={userProfile}>
      <SharedHeader folderName={folderName} userProfile={userProfile} />
      <SharedMain links={links} />
    </Layout>
  );
}

export default SharedPage;
