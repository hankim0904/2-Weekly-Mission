import * as S from "../styles/global";
import { Outlet } from "react-router-dom";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
