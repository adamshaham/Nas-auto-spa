import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Don't forget this wrapper for SEO!

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          
          {/* FIX 1: Point /blog to the LIST page (BlogPage), not the single post */}
          <Route path="/blog" element={<BlogPage />} />

          {/* FIX 2: Change :id to :slug to match the SEO code we just wrote */}
          <Route path="/blog/:slug" element={<BlogPost />} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;