import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  { src: "/images/gallery/bmw-m2.jpg", alt: "BMW M2 detailed in Fairfield County CT" },
  { src: "/images/gallery/lamborghini-urus.jpg", alt: "Lamborghini Urus luxury detailing service" },
  { src: "/images/gallery/range-rover.jpg", alt: "Range Rover full interior and exterior detail" },
  { src: "/images/gallery/IMG_7717.png", alt: "SUV ceramic coating application" },
  { src: "/images/gallery/IMG_4637.png", alt: "Interior deep clean and restoration" },
  { src: "/images/gallery/IMG_4271.png", alt: "Exterior paint enhancement and polish" },
];

// Instagram reels
const videos = [
  "https://www.instagram.com/reel/DRGXvrjjNwA/embed",
  "https://www.instagram.com/reel/DQ2xZAyD3fY/embed",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Car Detailing Gallery | NAS Auto Spa | Fairfield County CT</title>

        <meta
          name="description"
          content="View our detailing gallery featuring BMW, Lamborghini, Range Rover, and more. Professional mobile detailing, paint correction & ceramic coatings in Fairfield County, CT."
        />

        <meta
          name="keywords"
          content="car detailing gallery, auto detailing portfolio, Fairfield County detailing, ceramic coating gallery, paint correction before and after, NAS Auto Spa work"
        />

        {/* JSON-LD SCHEMA FOR IMAGE GALLERY */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "NAS Auto Spa Detailing Gallery",
            description:
              "A gallery of vehicles detailed, corrected, and ceramic coated by NAS Auto Spa in Fairfield County CT.",
            image: images.map((img) => img.src),
            author: {
              "@type": "Organization",
              name: "NAS Auto Spa",
            },
            url: "https://www.nasautospa.com/gallery",
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-black text-white pt-28 pb-20">
        {/* HEADER */}
        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 uppercase">
            Our Work
          </p>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
            Detailing <span className="text-[#e1b11b]">Gallery</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-300 max-w-3xl leading-relaxed mt-4">
            Explore our collection of vehicles we've detailed across Fairfield County —
            including exotics, luxury SUVs, and high-performance models. View real work
            featuring paint correction, ceramic coating, and full interior restoration.
          </p>
        </section>

        {/* IMAGE GRID */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Photo <span className="text-[#e1b11b]">Gallery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO SECTION */}
        {videos.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Video <span className="text-[#e1b11b]">Highlights</span>
            </h2>

            <p className="text-sm md:text-base text-zinc-300 mb-6 max-w-2xl">
              Watch real detailing transformations including paint correction, ceramic
              coating, and deep interior cleaning. These clips are from our official
              Instagram page.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((src, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 h-80"
                >
                  <iframe
                    src={src}
                    title={`NAS Auto Spa detailing video ${idx + 1}`}
                    className="w-full h-full"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FULLSCREEN MODAL */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999] cursor-pointer"
          >
            <img
              src={selectedImage}
              alt="Full-screen detailed view"
              className="max-w-[90%] max-h-[90%] rounded-2xl border border-zinc-700 shadow-xl"
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;
