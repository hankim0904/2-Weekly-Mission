import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

import { useQuery } from '@tanstack/react-query';
import { getUserQueryKey } from '@/api/queryKeys';
import { getSignedUserApi } from '@/api/apiCollection';

interface LayoutProps {
  children: React.ReactNode;
  isSticky?: boolean;
}

function Layout({ children, isSticky = true }: LayoutProps) {
  const {
    data: userData,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: getUserQueryKey(),
    queryFn: () => getSignedUserApi(),
    staleTime: 1000 * 60 * 60,
  });

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  if (isUserError) {
    return <div>Error!</div>;
  }

  const user = userData[0];
  return (
    <>
      <Navigation userProfile={user} isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
