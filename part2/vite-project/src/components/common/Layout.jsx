import * as S from '../../styles/global';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children, isSticky = true }) {
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
