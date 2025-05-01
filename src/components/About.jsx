import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">About Us</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content with Background Elements */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
              {/* Left Side - Image Column */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="relative">
                  {/* Main Image */}
                  <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-[1.02] transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
                      alt="Luxury Car Detailing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gold Decorative Border */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500 rounded-lg z-[-1]"></div>
                  
                  {/* Floating Detail Badge */}
                  <div className="absolute -top-5 -right-5 bg-black/80 backdrop-blur-sm text-gold-500 border border-gold-500 px-6 py-3 rounded-full text-sm font-medium">
                    PREMIUM DETAILING
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-gold-500">3</h3>
                    <p className="text-gray-400 text-sm mt-1">Passionate Experts</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-gold-500">100%</h3>
                    <p className="text-gray-400 text-sm mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Text Column */}
              <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gold-500 mb-6">Our Passion Story</h3>
                
                <div className="space-y-6 text-lg">
                  <p className="text-gray-300">
                    We're three friends in our twenties united by an unwavering passion for luxury automobiles. What began as meticulous care for our own vehicles has evolved into <span className="text-gold-400 font-medium">NAS WORKS</span>—where enthusiasm meets expertise.
                  </p>
                  
                  <p className="text-gray-300">
                    Each of us grew up admiring automotive excellence, not just as status symbols, but as engineering masterpieces deserving the highest level of care. Our garages became laboratories where we perfected the art of detailing, discovering the profound satisfaction of transforming beautiful machines into immaculate works of art.
                  </p>
                  
                  <p className="text-gray-300">
                    Friends took notice of our obsessive attention to detail, and casual requests quickly evolved into a realization: our passion could serve others who share our appreciation for automotive excellence.
                  </p>
                  
                  <p className="text-gray-300">
                    Today, we bring that same dedication, precision, and reverence to every vehicle we touch. When you choose NAS WORKS, you're experiencing the culmination of our lifelong passion, delivered with uncompromising standards.
                  </p>
                </div>

                {/* Values Pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="bg-black/60 border border-gold-600 text-gold-400 px-4 py-2 rounded-full text-sm">Obsessive Attention</span>
                  <span className="bg-black/60 border border-gold-600 text-gold-400 px-4 py-2 rounded-full text-sm">Genuine Passion</span>
                  <span className="bg-black/60 border border-gold-600 text-gold-400 px-4 py-2 rounded-full text-sm">Expert Care</span>
                  <span className="bg-black/60 border border-gold-600 text-gold-400 px-4 py-2 rounded-full text-sm">Luxury Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 