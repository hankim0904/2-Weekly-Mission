import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedPage from './pages/SharedPage.jsx';
import FolderPage from './pages/FolderPage.jsx';
import Temp from './pages/TempPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Temp />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
