import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => (
  <div className="min-h-screen bg-black text-white">
    <SEO
      title="404 – Page Not Found | NAS Auto Spa"
      description="The page you requested could not be found. Browse NAS Auto Spa mobile detailing services in Fairfield County, CT."
      path="/404"
      noindex
    />
    <Navbar />
    <main className="pt-32 max-w-4xl mx-auto px-6 pb-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-zinc-400 mb-8">
        That page does not exist. Try one of our service or location pages instead.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="px-5 py-2.5 rounded-full bg-[#e1b11b] text-black font-semibold hover:bg-[#e1b11b]/90 transition"
        >
          Go Home
        </Link>
        <Link
          to="/services"
          className="px-5 py-2.5 rounded-full border border-zinc-700 text-white hover:border-[#e1b11b] transition"
        >
          View Services
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFoundPage;
