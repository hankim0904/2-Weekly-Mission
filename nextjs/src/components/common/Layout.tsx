import * as S from '@/styles/global';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

interface LayoutProps {
  children: React.ReactNode;
  isSticky?: boolean;
}

function Layout({ children, isSticky = true }: LayoutProps) {
  return (
    <>
      <S.GlobalStyle />
      <Navigation isSticky={isSticky} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
