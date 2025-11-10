import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuContainer from './component/header/commonHeader';
import { HomeHero } from './component/homePage/hero';
import ServiceHero from './component/services/servicesHero';
import { ContactHero } from './component/contact/contactHero';
import AboutUs from './component/about/aboutUs';
import OurStoryAboutTeam from './component/about/aboutTeam';
import PortfolioHero from './component/portfolio/portfolioHero';

function App() {
  return (
    <BrowserRouter>
      <MenuContainer />
      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/contact" element={<ContactHero />} />
        <Route path="/ourStory" element={<OurStoryAboutTeam />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<ServiceHero />} />
        <Route path="/theirStory" element={<PortfolioHero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
