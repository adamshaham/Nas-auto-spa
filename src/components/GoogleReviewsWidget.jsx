import React, { useState } from "react";

// 🔗 All review links go here
const GOOGLE_URL =
  "https://www.google.com/search?sca_esv=a65b0ffea2fb0023&sxsrf=AE3TifM-8xD7nIF-WtLP49vWX5QsGIp5tQ:1764639320971&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E98WQS1DWb5tb4bcdV1GuEVWrakOEMoVhOy8lGI7wEKIu2JkQEZZnFitIOCtdKTrxOP7M1LQBrR0-gYV1EmwFlNbou8C&q=NAS+Auto+Spa+Reviews&sa=X&ved=2ahUKEwi3kojf4Z2RAxVH1fACHfw3LjsQ0bkNegQIOxAD&biw=1920&bih=953&dpr=1";

const REVIEWS = [
  {
    name: "Paul Tilkins",
    rating: 5,
    text:
      "Best detailers around. They had my dirty work truck looking like it just came off the lot! Amazing work and even better customer service.",
    link: GOOGLE_URL,
  },
  {
    name: "Raymil De Jesús",
    rating: 5,
    text:
      "Worth every penny! I took my car there for a Stage 2 detail and they made it look like it was new out of the dealership. 10/10 service.",
    link: GOOGLE_URL,
  },
  {
    name: "Noman Qayyum",
    rating: 5,
    text:
      "I got my car detailed and they did a really nice job. Prices are decent compared to others – highly recommended.",
    link: GOOGLE_URL,
  },
  {
    name: "Angela Rilley",
    rating: 5,
    text:
      "Got my mom’s car detailed for her birthday and wow – it looked brand new. Ended up getting my dad’s car detailed too.",
    link: GOOGLE_URL,
  },
  {
    name: "xavier sierra",
    rating: 5,
    text:
      "Great service, very professional. Left my car looking brand new. Definitely would go back to them!",
    link: GOOGLE_URL,
  },
  {
    name: "Zach Anderson",
    rating: 5,
    text: "Awesome service, definitely worth it.",
    link: GOOGLE_URL,
  },
  {
    name: "Z S",
    rating: 5,
    text:
      "Best detailers in Fairfield County, no question. My car has never looked this clean.",
    link: GOOGLE_URL,
  },
  {
    name: "Jahangir Khan",
    rating: 5,
    text:
      "I’ve been to almost 10 detailers in this area and no one does it like NAS. They went above and beyond and made my car brand new again.",
    link: GOOGLE_URL,
  },
  {
    name: "Axel Ortega",
    rating: 5,
    text:
      "The team was very professional and respectful. My car looked like it just came from the dealership. Money well spent.",
    link: GOOGLE_URL,
  },
  {
    name: "Rudy Carpio",
    rating: 5,
    text:
      "One of the best out there. I have a fleet of company trucks that NAS Auto Spa took care of and left spotless. Trustworthy, on time, and top quality.",
    link: GOOGLE_URL,
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex text-[#e1b11b] text-sm">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const GoogleReviewsWidget = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      {/* Floating badge bottom-right */}
      <button
        onClick={openDrawer}
        className="fixed bottom-4 right-4 z-[3000]"
        aria-label="View Google Reviews"
      >
        <div className="flex items-center gap-3 rounded-2xl bg-black/90 border border-[#e1b11b]/70 shadow-[0_0_20px_rgba(0,0,0,0.7)] px-3 py-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] hover:scale-[1.02] transition-transform duration-150">
          <div className="bg-white rounded-xl p-1.5 flex items-center justify-center">
            <img
              src="/images/gallery/google-reviews1.png"
              alt="Google Reviews"
              className="h-5 w-auto"
            />
          </div>

          <div className="flex flex-col leading-tight text-left">
            <span className="text-[11px] font-medium text-gray-300">
              Google Rating
            </span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-white">5.0</span>
              <StarRow />
            </div>
          </div>
        </div>
      </button>

      {/* Side drawer + backdrop */}
      {open && (
        <div className="fixed inset-0 z-[3500] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <div className="relative h-full w-full max-w-md bg-zinc-950 border-l border-[#e1b11b]/40 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-xl p-1.5 flex items-center justify-center">
                  <img
                    src="/images/gallery/google-reviews1.png"
                    alt="Google Reviews"
                    className="h-6 w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg sm:text-xl font-semibold text-white">
                    Hundreds of Happy Customers
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>5.0 Average Rating</span>
                    <span className="text-zinc-700">|</span>
                    <StarRow />
                  </div>
                </div>
              </div>
              <button
                onClick={closeDrawer}
                className="text-gray-400 hover:text-white text-xl leading-none"
                aria-label="Close reviews"
              >
                ×
              </button>
            </div>

            {/* Reviews list */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4 bg-black">
              {REVIEWS.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/90 rounded-2xl shadow-sm border border-zinc-800 p-4 flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-sm text-white">
                      {review.name}
                    </span>
                    <StarRow count={review.rating} />
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-4">
                    {review.text}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] text-gray-400">
                      <span className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-[#4285F4] bg-black/70">
                        G
                      </span>
                      <span>Posted on Google</span>
                    </div>
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#e1b11b] hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}

              {/* Link to all reviews */}
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-semibold text-[#e1b11b] mt-2 mb-4 hover:underline"
              >
                View all reviews on Google
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleReviewsWidget;
