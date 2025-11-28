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

import MobileDetailingPage from './pages/services/MobileDetailingPage';
import PaintCorrectionPage from './pages/services/PaintCorrectionPage';
import CeramicCoatingPage from './pages/services/CeramicCoatingPage';
import CommercialWashPage from './pages/services/CommercialWashPage';

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
          <Route path="services/mobile-detailing" element={<MobileDetailingPage />} />
          <Route path="services/paint-correction" element={<PaintCorrectionPage />} />
          <Route path="services/ceramic-coating" element={<CeramicCoatingPage />} />
          <Route path="services/fleet-detailing" element={<CommercialWashPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
