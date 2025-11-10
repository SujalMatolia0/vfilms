import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type NavigationItem = {
  id: number;
  label: string;
  href: string;
  mobileHref: string;
};

const navigationItems: NavigationItem[] = [
  {
    id: 1,
    label: 'Services',
    href: '/services',
    mobileHref: '/services',
  },
  {
    id: 2,
    label: 'Their Stories',
    href: '/theirStory',
    mobileHref: '/theirStory',
  },
  {
    id: 3,
    label: 'Our Story',
    href: '/ourStory',
    mobileHref: '/ourStory',
  },
  {
    id: 4,
    label: 'Varnan',
    href: '/aboutUs',
    mobileHref: '/aboutUs',
  },
];

interface HeaderComponentProps {
  navItems: NavigationItem[];
}

const HeaderComponent = ({ navItems }: HeaderComponentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLetsTalk = () => {
    setIsMenuOpen(false);
    navigate('/contact');
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-5 lg:p-6 w-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/LogoSmall.jpg"
            alt="Company Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center">
          <div
            className={`flex items-center space-x-6 transition-all duration-500 ease-in-out overflow-hidden ${
              isMenuOpen
                ? 'max-w-[800px] opacity-100 mr-4'
                : 'max-w-0 opacity-0 mr-0'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="text-gray-800 text-base lg:text-lg font-normal whitespace-nowrap hover:text-red-500 transition-colors"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={handleLetsTalk}
              className="flex items-center justify-center space-x-2 px-6 py-2 
               bg-[#F15D2B] hover:bg-[#df5223] text-white text-base lg:text-lg 
               font-medium rounded-full shadow-md transition-colors whitespace-nowrap"
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

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 focus:outline-none transition-transform hover:scale-110"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
        >
          <img
            src={isMenuOpen ? '/MenuOpen.jpg' : '/MenuClose.jpg'}
            alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="w-6 h-6 object-contain"
          />
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-end p-4 border-b">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none transition-transform hover:scale-110"
              aria-label="Close Menu"
            >
              <img
                src="/MenuOpen.jpg"
                alt="Close Menu"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>

          <nav className="flex flex-col flex-1 p-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.mobileHref}
                className="text-gray-800 text-lg font-normal hover:text-red-500 transition-colors py-2"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={handleLetsTalk}
              className="flex items-center justify-center space-x-2 px-6 py-3 mt-4
               bg-[#F15D2B] hover:bg-[#df5223] text-white text-lg 
               font-medium rounded-full shadow-md transition-colors"
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
          </nav>
        </div>
      </div>
    </>
  );
};
const HeaderLayout = () => {
  return <HeaderComponent navItems={navigationItems} />;
};

export default HeaderLayout;
