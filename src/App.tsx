import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuContainer from './component/header/commonHeader';
import { HomeHero } from './component/homePage/hero';
import { ContactHero } from './component/contact/contactHero';

function App() {
  return (
    <BrowserRouter>
      <MenuContainer />
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/contact" element={<ContactHero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
