import { useState } from 'react';

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Status {
  type: 'success' | 'error';
  msg: string;
}

export const ContactHero = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<Status | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Please fill name, email and message.' });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data?.detail || data?.message || `Request failed (${res.status})`
        );
      }

      setStatus({
        type: 'success',
        msg: 'Thanks! Your message has been sent.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        msg:
          (err as Error)?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="h-screen bg-[url('/dot-pattern.svg')] bg-repeat relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 opacity-50 lg:opacity-60 pointer-events-none">
        <img
          src="/Vector2.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 opacity-50 lg:opacity-60 pointer-events-none">
        <img
          src="/Vector1.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 py-20 lg:py-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
   
          <div className="flex flex-col space-y-4 lg:space-y-6 text-center lg:text-left">
            <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
              Whether you have an idea, a question, or simply want to explore
              how V can work together, V're just a message away.
            </p>
            <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
              Let's catch up over coffee.
            </p>
            <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
              Great stories always begin with a good conversation
            </p>
          </div>

         
          <div className="flex flex-col space-y-4 lg:space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-bold mb-2 lg:mb-3">
                Join the Story
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                Ready to bring your vision to life? Let's talk.
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  required
                  className="w-full px-3 py-2 lg:px-4 lg:py-2.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 shadow-sm text-sm lg:text-base"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  required
                  className="w-full px-3 py-2 lg:px-4 lg:py-2.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 shadow-sm text-sm lg:text-base"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  className="w-full px-3 py-2 lg:px-4 lg:py-2.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 shadow-sm text-sm lg:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 lg:px-4 lg:py-2.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9794B] focus:border-transparent text-gray-900 placeholder-gray-500 resize-none shadow-sm text-sm lg:text-base"
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-8 py-2.5 lg:px-12 lg:py-3 bg-[#F15D2B] hover:bg-[#ee4f19] text-white text-base lg:text-lg font-medium rounded-4xl shadow-md transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-xs lg:text-sm text-center ${
                    status.type === 'success'
                      ? 'text-green-700'
                      : 'text-red-600'
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </div>

          
            <div className="pt-2 lg:pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[#D9794B] text-xs sm:text-sm lg:text-base">
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
