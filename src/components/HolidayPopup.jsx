import React, { useEffect, useState } from "react";

const HolidayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Don't show again if dismissed before
    if (typeof window === "undefined") return;
    const dismissed = localStorage.getItem("nas_holiday_popup_dismissed");
    if (dismissed === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("nas_holiday_popup_dismissed", "true");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 md:p-7">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-white text-sm"
          aria-label="Close holiday discount popup"
        >
          ✕
        </button>

        <p className="text-xs tracking-[0.22em] text-zinc-400 uppercase mb-2">
          Limited Time Holiday Offer
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          20% Off All Detailing Packages
        </h2>

        <p className="text-sm md:text-base text-zinc-300 mb-4">
          Lock in a <span className="text-[#e1b11b] font-semibold">holiday wash discount</span> on
          any detailing package. Drop your info below and we&apos;ll reach out to confirm your
          booking.
        </p>

        {/* 20% OFF TAG */}
        <div className="mb-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 rounded-md bg-[#1a1a1a] border border-[#e1b11b]/60 text-[#e1b11b] text-xs font-semibold tracking-wide cursor-default"
          >
            ✓ 20% OFF HOLIDAY DISCOUNT APPLIED
          </button>
        </div>

        {/* FORM – FormSubmit */}
        <form
          action="https://formsubmit.co/contact@nasautospa.com"
          method="POST"
          className="space-y-4"
        >
          {/* Replace the URL above with the same FormSubmit endpoint you use in your Contact form */}

          {/* Optional: email routing / subject */}
          <input
            type="hidden"
            name="_subject"
            value="Holiday 20% Off Wash Lead - NAS Auto Spa"
          />
          <input
            type="hidden"
            name="form_name"
            value="Holiday 20% Off Popup"
          />

          {/* Discount meta field */}
          <input
            type="hidden"
            name="discount"
            value="Holiday Sale - 20% Off All Detailing Packages"
          />

          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b]"
              placeholder="Full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b]"
              placeholder="Best number to reach you"
            />
          </div>

          {/* Optional note */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Vehicle / Notes (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b]"
              placeholder="Year, make, model or anything we should know."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#e1b11b] text-black text-sm font-semibold tracking-wide hover:bg-yellow-400 transition-colors"
          >
            Claim 20% Off
          </button>

          <p className="text-[10px] text-zinc-500 mt-1">
            By submitting, you agree to be contacted by NAS Auto Spa about this holiday offer.
          </p>
        </form>
      </div>
    </div>
  );
};

export default HolidayPopup;
