import React, { useState, useEffect } from 'react';
import ThankYou from './ThankYou';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    selectedServices: [],
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔥 Listen for package selection from Pricing
  useEffect(() => {
    const handlePackageSelect = (event) => {
      const key = event.detail; // e.g. 'STAGE 1', 'QUICK WASH', 'ENHANCEMENTS'

      let selected = [];

      switch (key) {
        case 'QUICK WASH':
          selected = ['QUICK WASH ($30)'];
          break;
        case 'STAGE 1':
          selected = ['Stage 1'];
          break;
        case 'STAGE 2':
          selected = ['Stage 2'];
          break;
        case 'STAGE 3':
          selected = ['Stage 3'];
          break;
        case 'ENHANCEMENTS':
          // preselect all enhancements; they can uncheck what they don’t want
          selected = [
            'Paint Correction',
            'Ceramic Coating',
            'Engine Bay cleaning',
          ];
          break;
        default:
          return;
      }

      setFormData((prev) => ({
        ...prev,
        selectedServices: selected,
      }));
    };

    window.addEventListener('nasPackageSelect', handlePackageSelect);
    return () => window.removeEventListener('nasPackageSelect', handlePackageSelect);
  }, []);

  const serviceCategories = [
    {
      title: 'Wash & Detailing Packages',
      options: ['QUICK WASH ($30)', 'Stage 1', 'Stage 2', 'Stage 3'],
    },
    {
      title: 'Enhancements & Add-ons',
      options: [
        'Paint Correction',
        'Ceramic Coating',
        'Engine Bay cleaning',
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleService = (service) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service),
        };
      }
      return {
        ...prev,
        selectedServices: [...prev.selectedServices, service],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formElement = e.target;
      const submissionData = new FormData(formElement);

      submissionData.append(
        '_subject',
        `New Inquiry: ${formData.firstName} ${formData.lastName}`
      );

      if (formData.selectedServices.length > 0) {
        submissionData.append(
          'Services_Interested_In',
          formData.selectedServices.join(', ')
        );
      }

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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        selectedServices: [],
      });

      setTimeout(() => {
        window.location.href = '/';
      }, 4000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please call us directly at (929) 307-6986.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return <ThankYou />;
  }

  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e1b11b] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900 opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl relative">
            {/* Header Section */}
            <div className="text-center mb-10">
              <h2 className="text-[#e1b11b] text-sm font-bold tracking-[0.2em] uppercase mb-3">
                Get in Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for a Transformation?
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Select your desired services below and fill out your details. We'll get back to you
                to confirm your appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {/* Hidden: selected services */}
              <input
                type="hidden"
                name="services_list"
                value={formData.selectedServices.join(', ')}
              />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg text-center text-sm">
                  {error}
                </div>
              )}

              {/* Personal Details */}
              {/* ... (rest of your Contact form unchanged) ... */}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-[#e1b11b] transition-colors">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-[#e1b11b] transition-colors">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-[#e1b11b] transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-[#e1b11b] transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/5">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <label className="block text-xs font-medium text-[#e1b11b] uppercase tracking-wider mb-3">
                      {category.title}
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {category.options.map((option) => {
                        const isSelected = formData.selectedServices.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleService(option)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border flex-grow md:flex-grow-0 text-center ${
                              isSelected
                                ? 'bg-[#e1b11b] border-[#e1b11b] text-black shadow-[0_0_15px_rgba(225,177,27,0.3)] scale-105'
                                : 'bg-black/40 border-white/10 text-gray-300 hover:border-[#e1b11b]/50 hover:bg-white/5'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 group-focus-within:text-[#e1b11b] transition-colors">
                  Tell us about your vehicle
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300 resize-none"
                  placeholder="Year, Make, Model and any specific concerns..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-[#e1b11b] hover:bg-[#cda218] text-black font-bold tracking-wide rounded-xl transform transition-all duration-300 shadow-lg hover:shadow-[#e1b11b]/20 flex justify-center items-center ${
                  isSubmitting
                    ? 'opacity-75 cursor-not-allowed'
                    : 'hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND REQUEST'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
