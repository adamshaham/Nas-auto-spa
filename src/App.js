import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';

import MobileDetailingPage from './pages/MobileDetailingPage';
import PaintCorrectionPage from './pages/PaintCorrectionPage';
import CeramicCoatingPage from './pages/CeramicCoatingPage';
import CommercialWashPage from './pages/CommercialWashPage';
import ServiceAreas from './pages/ServiceAreas';
import StamfordCTPage from './pages/StamfordCTPage';
import WestportCTPage from './pages/WestportCTPage';
import GreenwichTPage from './pages/GreenwichTPage';
import NorwalkCTPage from './pages/NorwalkCTPage';
import SouthportCTPage from './pages/SouthportCTPage';
import StratfordCTPage from './pages/StratfordCTPage';
import MilfordCTPage from './pages/MilfordCTPage';
import TrumbullCTPage from './pages/TrumbullCTPage';
import FairfieldCTPage from './pages/FairfieldCTPage';

// 🔹 Scroll handler that supports hashes (#pricing)
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // If URL has a hash, try to scroll to that element
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);

      if (el) {
        // Wait a tick so the page can render before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
        return;
      }
    }

    // Default: scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* CORE PAGES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* BLOG */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* SERVICE DETAIL PAGES – match Navbar paths */}
          <Route path="/mobile-detailing-fairfield-county-ct" element={<MobileDetailingPage />} />
          <Route path="/paint-correction-fairfield-county-ct" element={<PaintCorrectionPage />} />
          <Route path="/ceramic-coating-fairfield-county-ct" element={<CeramicCoatingPage />} />
          <Route path="/fleet-detailing-fairfield-county-ct" element={<CommercialWashPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
         <Route path="/service-areas-fairfield-county-ct" element={<ServiceAreas />} />
          <Route path="/stamford-ct" element={<StamfordCTPage />} />
         <Route path="/westport-ct" element={<WestportCTPage />} />
         <Route path="/greenwich-ct" element={<GreenwichTPage />} />
        <Route path="/norwalk-ct" element={<NorwalkCTPage />} />
         <Route path="/southport-ct" element={<SouthportCTPage />} />
         <Route path="/stratford-ct" element={<StratfordCTPage />} />
         <Route path="/milford-ct" element={<MilfordCTPage />} />
         <Route path="/trumbull-ct" element={<TrumbullCTPage />} />
         <Route path="/fairfield-ct" element={<FairfieldCTPage />} />


        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
