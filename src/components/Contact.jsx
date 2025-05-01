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
    
    try {
      const formElement = e.target;
      const formData = new FormData(formElement);
      
      // Send form data to FormSubmit
      await fetch("https://formsubmit.co/ajax/contactnasworks@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          _subject: "New Detail Request"
        })
      });

      // Show thank you message
      setShowThankYou(true);

      // Redirect to home page after 3 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
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
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800">
            <h2 className="text-gold-400 text-lg font-semibold tracking-wider mb-2">CONTACT US</h2>
            <h3 className="text-4xl font-bold mb-8">Let's connect!</h3>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-xl font-semibold">(929)-307-6986</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-xl">contactnasworks@gmail.com</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-gold-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-gold-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Select Service Package <span className="text-gold-500">*</span>
                </label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="services"
                      value="Stage 1 - Basic Exterior Detail (From $30)"
                      className="w-5 h-5 border-2 border-gray-700 rounded-full checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500"
                      onChange={handleServiceChange}
                      required
                    />
                    <span className="text-gray-300 group-hover:text-gold-400 transition-colors">
                      Stage 1 - Basic Exterior Detail (From $30)
                    </span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="services"
                      value="Stage 2 - Interior Refresh (From $50)"
                      className="w-5 h-5 border-2 border-gray-700 rounded-full checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500"
                      onChange={handleServiceChange}
                    />
                    <span className="text-gray-300 group-hover:text-gold-400 transition-colors">
                      Stage 2 - Interior Refresh (From $50)
                    </span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="services"
                      value="Stage 3 - Complete Detail (Starting at $150)"
                      className="w-5 h-5 border-2 border-gray-700 rounded-full checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500"
                      onChange={handleServiceChange}
                    />
                    <span className="text-gray-300 group-hover:text-gold-400 transition-colors">
                      Stage 3 - Complete Detail (Starting at $150)
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all duration-300"
                  placeholder="Tell us about your vehicle and service needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-semibold rounded-lg 
                         hover:from-gold-500 hover:to-gold-300 transform hover:scale-[1.02] transition-all duration-300"
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