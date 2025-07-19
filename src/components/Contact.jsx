import React, { useState, useEffect } from 'react';
import ThankYou from './ThankYou';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    selectedServices: []
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check URL for package selection
    const hash = window.location.hash;
    if (hash.includes('?package=')) {
      const packageType = hash.split('?package=')[1];
      let checkboxValue = '';
      
      // Map the package type to the corresponding checkbox value
      switch(packageType) {
        case 'stage1':
          checkboxValue = 'Stage 1 - Basic Exterior Detail (From $30)';
          break;
        case 'stage2':
          checkboxValue = 'Stage 2 - Interior Refresh (From $50)';
          break;
        case 'stage3':
          checkboxValue = 'Stage 3 - Complete Detail (Starting at $150)';
          break;
      }

      // Find and check the corresponding checkbox
      const checkbox = document.querySelector(`input[value="${checkboxValue}"]`);
      if (checkbox) {
        checkbox.checked = true;
        setFormData(prev => ({
          ...prev,
          selectedServices: [...prev.selectedServices, checkboxValue]
        }));

        // Scroll the checkbox into view with some offset
        setTimeout(() => {
          checkbox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      selectedServices: [value] // Only store the selected value in an array
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const formElement = e.target;
      const formData = new FormData(formElement);
      formData.append('_subject', 'New Detail Request');

      const response = await fetch("https://formsubmit.co/ajax/contactnasworks@gmail.com", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again.');
      }

      setShowThankYou(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      setError(error.message || 'Error submitting form.');
      console.error('Error submitting form:', error);
    }
  };

  if (showThankYou) {
    return <ThankYou />;
  }

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container-wrapper">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 flex flex-col justify-center min-h-[600px]">
            <div className="text-center space-y-12">
              <div>
                <h2 className="text-white text-lg font-semibold tracking-wider mb-2">CONTACT US</h2>
                <h3 className="text-4xl font-bold text-white">Let's connect!</h3>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <p className="text-white/80 text-sm">Phone</p>
                    <p className="text-xl font-semibold text-white">(929)-307-6986</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <p className="text-xl text-white">contactnasworks@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img src="/images/nas-logo.png" alt="NAS Logo" className="h-24 md:h-32 w-auto" />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 flex flex-col justify-center min-h-[600px]">
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div className="bg-red-700 text-white p-3 rounded mb-4 text-center">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    First Name <span className="text-[#e1b11b]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300 text-white"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Last Name <span className="text-[#e1b11b]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300 text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Email <span className="text-[#e1b11b]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number <span className="text-[#e1b11b]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300 text-white"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">
                  Select Service Package <span className="text-[#e1b11b]">*</span>
                </label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="services"
                      value="Stage 1 - Basic Exterior Detail (From $30)"
                      className="w-5 h-5 border-2 border-gray-700 rounded-full checked:bg-[#e1b11b] checked:border-[#e1b11b] focus:ring-[#e1b11b]"
                      onChange={handleServiceChange}
                      required
                    />
                    <span className="text-white group-hover:text-white/80 transition-colors">
                      Stage 1 - Basic Exterior Detail (From $30)
                    </span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="services"
                      value="Stage 2 - Interior Refresh (From $50)"
                      className="w-5 h-5 border-2 border-gray-700 rounded-full checked:bg-[#e1b11b] checked:border-[#e1b11b] focus:ring-[#e1b11b]"
                      onChange={handleServiceChange}
                    />
                    <span className="text-white group-hover:text-white/80 transition-colors">
                      Stage 2 - Interior Refresh (From $50)
                    </span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="services"
                      value="Stage 3 - Complete Detail (Starting at $150)"
                      className="w-5 h-5 border-2 border-gray-700 rounded-full checked:bg-[#e1b11b] checked:border-[#e1b11b] focus:ring-[#e1b11b]"
                      onChange={handleServiceChange}
                    />
                    <span className="text-white group-hover:text-white/80 transition-colors">
                      Stage 3 - Complete Detail (Starting at $150)
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#e1b11b] focus:ring-1 focus:ring-[#e1b11b] transition-all duration-300 text-white"
                  placeholder="Tell us about your vehicle and service needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#e1b11b] text-black font-semibold rounded-lg 
                         hover:bg-[#e1b11b]/90 transform hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 