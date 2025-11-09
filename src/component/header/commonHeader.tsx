import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLetsTalk = () => {
    toggleMenu();
    navigate('/contact');
  };

  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-4 lg:p-6">
        <nav className="flex items-center">
          <div
            className={`flex items-center space-x-6 transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen
                ? 'max-w-[800px] opacity-100 mr-4'
                : 'max-w-0 opacity-0 mr-0'
            }`}
          >
            <Link
              to="/#services"
              className="text-gray-800 text-base lg:text-lg font-normal whitespace-nowrap hover:text-red-500 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/#stories"
              className="text-gray-800 text-base lg:text-lg font-normal whitespace-nowrap hover:text-red-500 transition-colors"
              onClick={toggleMenu}
            >
              Their Stories
            </Link>
            <Link
              to="/#our-story"
              className="text-gray-800 text-base lg:text-lg font-normal whitespace-nowrap hover:text-red-500 transition-colors"
              onClick={toggleMenu}
            >
              Our Story
            </Link>
            <Link
              to="/#varnan"
              className="text-gray-800 text-base lg:text-lg font-normal whitespace-nowrap hover:text-red-500 transition-colors"
              onClick={toggleMenu}
            >
              Varnan
            </Link>
            <button
              onClick={handleLetsTalk}
              className="flex items-center justify-center space-x-2 px-6 py-2 
                         bg-[#D9794B] hover:bg-[#C4693B] text-white text-base lg:text-lg 
                         font-medium rounded-md shadow-md transition-colors whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2-3H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"
                ></path>
              </svg>
            </button>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none transition-transform hover:scale-110"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMenuOpen}
          >
            <img
              src={isMenuOpen ? '/MenuOpen.jpg' : '/MenuClose.jpg'}
              alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default HeaderLayout;
