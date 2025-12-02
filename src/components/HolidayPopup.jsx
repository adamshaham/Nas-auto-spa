import React, { useEffect, useState } from "react";
import ThankYou from "./ThankYou";

const HolidayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Show popup after 5 seconds on EVERY page load
  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // ❌ removed localStorage so it shows again on refresh
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formElement = e.target;
      const submissionData = new FormData(formElement);

      submissionData.set(
        "_subject",
        "Holiday 20% Off Wash Lead - NAS Auto Spa (Popup)"
      );

      const vehicle = submissionData.get("Popup_Vehicle_Type") || "Not specified";
      const service = submissionData.get("Popup_Service_Type") || "Not specified";
      const method = submissionData.get("Popup_Service_Method") || "Not specified";

      submissionData.append(
        "Popup_Summary",
        `Vehicle: ${vehicle} | Service: ${service} | Method: ${method}`
      );

      const response = await fetch(
        "https://formsubmit.co/ajax/contact@nasautospa.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: submissionData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form. Please try again.");
      }

      // ❌ no localStorage here either
      setIsOpen(false);
      setShowThankYou(true);
      formElement.reset();
    } catch (err) {
      console.error("Error submitting popup form:", err);
      setError(
        "Something went wrong. Please call or text us directly at (929) 307-6986."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return <ThankYou />;
  }

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
          Lock in a{" "}
          <span className="text-[#e1b11b] font-semibold">
            holiday wash discount
          </span>{" "}
          on any detailing package. Answer a few quick questions and we&apos;ll
          reach out to confirm your booking.
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

        {/* Error banner */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-2 rounded-lg text-xs mb-3 text-center">
            {error}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          name="holiday-popup-form"
        >
          {/* Honeypot & config */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* Subject & meta */}
          <input
            type="hidden"
            name="_subject"
            value="Holiday 20% Off Wash Lead - NAS Auto Spa"
          />
          <input type="hidden" name="form_name" value="Holiday 20% Off Popup" />
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

          {/* Vehicle type dropdown */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              What type of vehicle do you have?
            </label>
            <select
              name="Popup_Vehicle_Type"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b]"
              defaultValue=""
            >
              <option value="" disabled>
                Select vehicle type
              </option>
              <option value="Sedan / Coupe">Sedan / Coupe</option>
              <option value="SUV / Truck">SUV / Truck</option>
              <option value="Luxury / Exotic / Sports">
                Luxury / Exotic / Sports
              </option>
              <option value="Van / Other">Van / Other</option>
            </select>
          </div>

          {/* Service type dropdown */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              What service are you looking for?
            </label>
            <select
              name="Popup_Service_Type"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b]"
              defaultValue=""
            >
              <option value="" disabled>
                Select service
              </option>
              <option value="Quick Wash">Quick Wash</option>
              <option value="Stage 1 Detail">Stage 1 Detail</option>
              <option value="Stage 2 Detail">Stage 2 Detail</option>
              <option value="Stage 3 Detail">Stage 3 Detail</option>
              <option value="Paint Correction">Paint Correction</option>
              <option value="Ceramic Coating">Ceramic Coating</option>
              <option value="Not Sure / Recommend One">
                Not sure – recommend a package
              </option>
            </select>
          </div>

          {/* Service method dropdown */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Do you want us to come to you or drop off?
            </label>
            <select
              name="Popup_Service_Method"
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text:white outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b]"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Mobile – come to me">
                I want NAS Auto Spa to come to me (mobile service)
              </option>
              <option value="Drop-off">
                I will drop off my vehicle
              </option>
              <option value="Not sure yet">
                Not sure yet
              </option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#e1b11b] text-black text-sm font-semibold tracking-wide transition-colors
              ${
                isSubmitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-yellow-400"
              }`}
          >
            {isSubmitting ? "Sending..." : "Claim 20% Off"}
          </button>

          <p className="text-[10px] text-zinc-500 mt-1">
            By submitting, you agree to be contacted by NAS Auto Spa about this
            holiday offer.
          </p>
        </form>
      </div>
    </div>
  );
};

export default HolidayPopup;
