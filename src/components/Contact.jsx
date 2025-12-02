import React, { useState, useEffect } from 'react';
import ThankYou from './ThankYou';

const Contact = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleCondition: '',
    desiredService: '',
    timing: '',
    preferredDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    selectedServices: [],
    smsConsent: false,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔔 New: which option is currently flashing (step-value)
  const [highlightedOption, setHighlightedOption] = useState(null);

  // Helper: sync selectedServices with desiredService
  const mapServiceToSelected = (value) => {
    switch (value) {
      case 'Quick Wash':
        return ['QUICK WASH ($30)'];
      case 'Stage 1 Detail':
        return ['Stage 1'];
      case 'Stage 2 Detail':
        return ['Stage 2'];
      case 'Stage 3 Detail':
        return ['Stage 3'];
      case 'Paint Correction':
        return ['Paint Correction'];
      case 'Ceramic Coating':
        return ['Ceramic Coating'];
      case 'Commercial / Fleet':
        return ['Commercial / Fleet Detailing'];
      default:
        return [];
    }
  };

  // 🔥 Listen for package selection from Pricing
  useEffect(() => {
    const handlePackageSelect = (event) => {
      const key = event.detail; // e.g. 'STAGE 1', 'QUICK WASH', 'ENHANCEMENTS'

      let desiredService = '';
      switch (key) {
        case 'QUICK WASH':
          desiredService = 'Quick Wash';
          break;
        case 'STAGE 1':
          desiredService = 'Stage 1 Detail';
          break;
        case 'STAGE 2':
          desiredService = 'Stage 2 Detail';
          break;
        case 'STAGE 3':
          desiredService = 'Stage 3 Detail';
          break;
        case 'ENHANCEMENTS':
          desiredService = 'Other / Not Sure';
          break;
        default:
          return;
      }

      const selectedServices = mapServiceToSelected(desiredService);

      setFormData((prev) => ({
        ...prev,
        desiredService,
        selectedServices,
      }));
    };

    window.addEventListener('nasPackageSelect', handlePackageSelect);
    return () => window.removeEventListener('nasPackageSelect', handlePackageSelect);
  }, []);

  // Generic input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Choose service from step 2
  const handleServiceSelect = (value) => {
    const selectedServices = mapServiceToSelected(value);
    setFormData((prev) => ({
      ...prev,
      desiredService: value,
      selectedServices,
    }));
  };

  const steps = ['Vehicle Type', 'Condition', 'Service', 'Timing', 'Your Info'];

  const vehicleTypeOptions = [
    {
      value: 'Sedan / Coupe',
      title: '🚗 Sedan / Coupe',
      description: 'Standard passenger car',
    },
    {
      value: 'SUV / Truck',
      title: '🚙 SUV / Truck',
      description: 'Larger vehicle with more surface area',
    },
    {
      value: 'Luxury / Exotic / Sports',
      title: '🏎️ Luxury / Exotic / Sports Car',
      description: 'High-end or performance vehicle',
    },
    {
      value: 'Van / Other',
      title: '🚐 Van / Other',
      description: 'Minivan, commercial vehicle, or other',
    },
  ];

  const conditionOptions = [
    {
      value: 'Lightly Dirty',
      title: '✨ Lightly Dirty',
      description: 'Regular dust, light use, no major stains',
    },
    {
      value: 'Moderately Dirty',
      title: '🧽 Moderately Dirty',
      description: 'Food crumbs, light stains, some pet hair',
    },
    {
      value: 'Heavily Dirty',
      title: '🧼 Heavily Dirty',
      description: 'Heavy dirt, stains, pet hair, spills',
    },
    {
      value: 'Severely Dirty',
      title: '⚠️ Severely Dirty / Disaster',
      description: 'Vomit, mold, extreme mess, or biohazard',
    },
  ];

  const serviceOptions = [
    {
      value: 'Quick Wash',
      title: '💦 Quick Wash',
      description: 'Basic exterior wash, perfect maintenance clean',
    },
    {
      value: 'Stage 1 Detail',
      title: '🪣 Stage 1 Detail',
      description: 'Light interior & exterior detail',
    },
    {
      value: 'Stage 2 Detail',
      title: '🧽 Stage 2 Detail',
      description: 'Deeper interior & exterior cleaning',
    },
    {
      value: 'Stage 3 Detail',
      title: '🧼 Stage 3 Detail',
      description: 'Full restoration-style interior & exterior',
    },
    {
      value: 'Paint Correction',
      title: '🛠️ Paint Correction',
      description: 'Swirl/scratch removal & gloss restoration',
    },
    {
      value: 'Ceramic Coating',
      title: '🛡️ Ceramic Coating',
      description: 'Long-term protection & extreme gloss',
    },
    {
      value: 'Commercial / Fleet',
      title: '🚛 Commercial / Fleet',
      description: 'Multiple company vehicles or fleets',
    },
    {
      value: 'Other / Not Sure',
      title: '❔ Not Sure – Recommend a Package',
      description: 'We’ll suggest the best option for you',
    },
  ];

  const timingOptions = [
    {
      value: 'ASAP',
      title: '⏱️ ASAP',
      description: 'As soon as you can fit me in',
    },
    {
      value: 'This Week',
      title: '📅 This Week',
      description: 'Sometime in the next 7 days',
    },
    {
      value: 'This Month',
      title: '🗓️ This Month',
      description: 'Within the next few weeks',
    },
    {
      value: 'Flexible',
      title: '🤝 Flexible',
      description: 'I’m flexible on dates',
    },
  ];

  const canProceed = () => {
    switch (step) {
      case 0:
        return !!formData.vehicleType;
      case 1:
        return !!formData.vehicleCondition;
      case 2:
        return !!formData.desiredService;
      case 3:
        return !!formData.timing;
      case 4:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.address &&
          formData.smsConsent
        );
      default:
        return false;
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canProceed()) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const formElement = e.target;
      const submissionData = new FormData(formElement);

      submissionData.append(
        '_subject',
        `New Detailing Inquiry: ${formData.firstName} ${formData.lastName}`
      );

      if (formData.selectedServices.length > 0) {
        submissionData.append(
          'Services_Interested_In',
          formData.selectedServices.join(', ')
        );
      }

      submissionData.append('Vehicle_Type', formData.vehicleType);
      submissionData.append('Vehicle_Condition', formData.vehicleCondition);
      submissionData.append('Timing', formData.timing);
      submissionData.append('Preferred_Date', formData.preferredDate || 'Not specified');

      const response = await fetch(
        'https://formsubmit.co/ajax/contact@nasautospa.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: submissionData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form. Please try again.');
      }

      setShowThankYou(true);

      setFormData({
        vehicleType: '',
        vehicleCondition: '',
        desiredService: '',
        timing: '',
        preferredDate: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        selectedServices: [],
        smsConsent: false,
      });

      setStep(0);

      setTimeout(() => {
        window.location.href = '/';
      }, 4000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(
        'Something went wrong. Please call or text us directly at (929) 307-6986.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return <ThankYou />;
  }

  // ⭐ Helper: flash yellow + then go to next step
  const flashAndNext = (stepIndex, valueKey, updateFn, nextStep) => {
    const id = `${stepIndex}-${valueKey}`;
    setHighlightedOption(id);
    updateFn(valueKey);

    setTimeout(() => {
      setHighlightedOption(null);
      if (typeof nextStep === 'number') {
        setStep(nextStep);
      }
    }, 180); // quick but noticeable
  };

  // Card component for each answer option
  const OptionCard = ({ option, selected, onClick, highlight }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border px-4 sm:px-6 py-4 sm:py-5 mb-3 transition-all duration-200
        ${
          highlight
            ? 'bg-[#facc16] border-[#facc16] shadow-[0_0_0_1px_rgba(250,204,22,0.7)] scale-[1.01]'
            : selected
            ? 'bg-white/10 border-[#facc16] shadow-[0_0_0_1px_rgba(250,204,22,0.4)]'
            : 'bg-white/5 border-white/10 hover:border-[#facc16]/70 hover:bg-white/10'
        }`}
    >
      <div
        className={`font-semibold text-sm sm:text-base ${
          highlight ? 'text-black' : 'text-white'
        }`}
      >
        {option.title}
      </div>
      <div
        className={`text-xs sm:text-sm mt-1 ${
          highlight ? 'text-black/80' : 'text-gray-400'
        }`}
      >
        {option.description}
      </div>
    </button>
  );

  // Question content per step (auto-advance on click)
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              What type of vehicle do you have?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              This helps us estimate the time, products, and pricing for your detail.
            </p>
            {vehicleTypeOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={formData.vehicleType === opt.value}
                highlight={highlightedOption === `0-${opt.value}`}
                onClick={() =>
                  flashAndNext(
                    0,
                    opt.value,
                    (val) =>
                      setFormData((prev) => ({
                        ...prev,
                        vehicleType: val,
                      })),
                    1
                  )
                }
              />
            ))}
          </>
        );
      case 1:
        return (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              What best describes the current condition of your vehicle?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Be honest here—this only helps us recommend the right level of detail.
            </p>
            {conditionOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={formData.vehicleCondition === opt.value}
                highlight={highlightedOption === `1-${opt.value}`}
                onClick={() =>
                  flashAndNext(
                    1,
                    opt.value,
                    (val) =>
                      setFormData((prev) => ({
                        ...prev,
                        vehicleCondition: val,
                      })),
                    2
                  )
                }
              />
            ))}
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              What type of service are you looking for?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Choose the option that fits best. If you&apos;re not sure, we&apos;ll recommend one.
            </p>
            {serviceOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={formData.desiredService === opt.value}
                highlight={highlightedOption === `2-${opt.value}`}
                onClick={() =>
                  flashAndNext(
                    2,
                    opt.value,
                    (val) => {
                      handleServiceSelect(val);
                    },
                    3
                  )
                }
              />
            ))}
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              When are you hoping to get this done?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              We&apos;ll do our best to match your preferred timing.
            </p>
            {timingOptions.map((opt) => (
              <OptionCard
                key={opt.value}
                option={opt}
                selected={formData.timing === opt.value}
                highlight={highlightedOption === `3-${opt.value}`}
                onClick={() =>
                  flashAndNext(
                    3,
                    opt.value,
                    (val) =>
                      setFormData((prev) => ({
                        ...prev,
                        timing: val,
                      })),
                    4
                  )
                }
              />
            ))}

            <div className="mt-4">
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wide mb-1">
                Preferred date or days (optional)
              </label>
              <input
                type="text"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16]"
                placeholder="Example: Next Saturday, evenings only, weekdays after 3pm, etc."
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Last step – tell us how to reach you
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              We&apos;ll review your answers and text or email you with availability and a quote.
            </p>

            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16]"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16]"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16]"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16]"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Address (for mobile appointments)<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16]"
                placeholder="Street, city, ZIP"
              />
            </div>

            {/* Extra details */}
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Anything else we should know? (optional)
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-[#facc16] focus:ring-1 focus:ring-[#facc16] resize-none"
                placeholder="Parking situation, gate codes, extreme conditions, special requests, etc."
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2 text-xs text-gray-400 mb-2">
              <input
                type="checkbox"
                id="smsConsent"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleInputChange}
                className="mt-[2px] h-4 w-4 rounded border-white/30 bg-black/40"
                required
              />
              <label htmlFor="smsConsent" className="leading-relaxed">
                I agree to be contacted by NAS Auto Spa at the phone number and email provided
                regarding my inquiry. I understand I may receive text updates and can reply STOP
                at any time. We never sell or share your information.
              </label>
            </div>

            <p className="text-[11px] text-gray-500">
              Final pricing may vary based on vehicle size, condition, and location. We&apos;ll confirm
              everything before you book.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#facc16]/10 border border-[#facc16]/50 text-xs font-semibold tracking-wide text-[#facc16] mb-3">
            🚗 NAS AUTO SPA • FAIRFIELD COUNTY, CT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Find Your Perfect Detail
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Answer a few quick questions about your vehicle and we&apos;ll follow up with a personalized
            recommendation, quote, and availability.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>
            Step {step + 1} of {steps.length}: {steps[step]}
          </span>
          <div className="flex-1 ml-4 h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full bg-[#facc16] transition-all duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form card */}
        <div className="bg-black border border-gray-800 rounded-3xl shadow-2xl p-5 sm:p-7">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-center text-xs mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} name="contact-form">
            {/* Hidden formsubmit config */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="services_list"
              value={formData.selectedServices.join(', ')}
            />
            <input type="hidden" name="Vehicle_Type" value={formData.vehicleType} />
            <input
              type="hidden"
              name="Vehicle_Condition"
              value={formData.vehicleCondition}
            />
            <input
              type="hidden"
              name="Desired_Service"
              value={formData.desiredService}
            />
            <input type="hidden" name="Timing" value={formData.timing} />
            <input
              type="hidden"
              name="Preferred_Date"
              value={formData.preferredDate || 'Not specified'}
            />

            {/* Visible step content */}
            {renderStepContent()}

            {/* Navigation buttons */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm border text-white bg-transparent hover:bg-[#facc16]/10 border-[#facc16]/60 transition ${
                  step === 0 ? 'opacity-0 pointer-events-none' : ''
                }`}
              >
                ← Back
              </button>

              {step === steps.length - 1 && (
                <button
                  type="submit"
                  disabled={!canProceed() || isSubmitting}
                  className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm sm:text-base font-semibold 
                    bg-[#facc16] text-black
                    shadow-lg shadow-[#facc16]/40
                    transition-all duration-200
                    ${
                      !canProceed() || isSubmitting
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:brightness-95 hover:scale-[1.01] active:scale-[0.99]'
                    }
                  `}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              )}
            </div>

            <p className="text-[11px] text-gray-500 text-center mt-4">
              Prefer to talk instead? Call or text{' '}
              <a
                href="tel:+19293076986"
                className="text-[#facc16] underline underline-offset-2"
              >
                (929) 307-6986
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* CONTACT PAGE SCHEMA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact NAS Auto Spa',
            url: 'https://www.nasautospa.com/#contact',
            about: {
              '@type': 'AutoDetailing',
              name: 'NAS Auto Spa LLC',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+19293076986',
              contactType: 'customer service',
              areaServed: 'Fairfield County CT',
              availableLanguage: ['English'],
            },
          }),
        }}
      />
    </section>
  );
};

export default Contact;
