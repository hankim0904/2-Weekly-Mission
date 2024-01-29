import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

import { UserProfile } from '@/types/FolderType';

interface LayoutProps {
  children: React.ReactNode;
  userProfile: UserProfile;
  isSticky?: boolean;
}

function Layout({ children, userProfile, isSticky = true }: LayoutProps) {
  return (
    <>
      <Navigation userProfile={userProfile} isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
