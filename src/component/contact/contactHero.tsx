import { useState } from 'react';

export const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#FFF6F1] bg-[url('/dot-pattern.svg')] bg-repeat relative overflow-hidden">
      {/* Decorative Vector 1 - Top Right */}
      <div className="absolute top-0 right-0 w-96 h-96 lg:w-[500px] lg:h-[500px] opacity-60 pointer-events-none">
        <img
          src="/Vector2.jpg"
          alt="Decorative Vector"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Decorative Vector 2 - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 lg:w-[500px] lg:h-[500px] opacity-60 pointer-events-none">
        <img
          src="/Vector1.jpg"
          alt="Decorative Vector"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16 lg:py-24">
        {/* UPDATED: Changed max-w-7xl to max-w-6xl for better laptop spacing */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          {/* Left Section - Text Content */}
          <div className="flex flex-col space-y-6 lg:space-y-8 max-w-lg text-center lg:text-left mx-auto">
            {/* UPDATED: Refined text scaling for laptop (lg) vs desktop (xl) */}
            <p className="text-gray-800 text-lg lg:text-lg xl:text-xl leading-relaxed">
              Whether you have an idea, a question, or simply want to explore
              how V can work together, V're just a message away.
            </p>
            {/* UPDATED: Refined text scaling for laptop (lg) vs desktop (xl) */}
            <p className="text-gray-800 text-lg lg:text-lg xl:text-xl leading-relaxed">
              Let's catch up over coffee.
            </p>
            {/* UPDATED: Refined text scaling for laptop (lg) vs desktop (xl) */}
            <p className="text-gray-800 text-lg lg:text-lg xl:text-xl leading-relaxed">
              Great stories always begin with a good conversation
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="text-center lg:text-left">
              {/* UPDATED: Refined text scaling for laptop (lg) vs desktop (xl) */}
              <h2 className="text-4xl lg:text-4xl xl:text-5xl text-gray-900 font-bold mb-4 halant">
                Join the Story
              </h2>
              {/* UPDATED: Refined text scaling for laptop (lg) vs desktop (xl) */}
              <p className="text-gray-700 text-lg lg:text-lg xl:text-xl">
                Ready to bring your vision to life? Let's talk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 halant shadow-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 halant shadow-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 halant shadow-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 resize-none halant shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#D9794B] hover:bg-[#C4693B] text-white text-lg font-medium rounded-lg shadow-md transition-colors duration-200 halant"
              >
                Submit
              </button>
            </form>

            {/* Contact Information Below Form */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#D9794B] text-sm lg:text-base halant">
                <span>vernita@varnanfilms.co.in</span>
                <span className="hidden sm:inline">|</span>
                <span>+91 98736 84567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
