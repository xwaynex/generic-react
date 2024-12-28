import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#c93] text-white p-4">
      <div className="flex justify-between items-center">
        {/* Word 'Generic' on the right side */}
        <div className=" md:block text-white text-lg font-semibold">
          Generic
        </div>


        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.label} className="group">
              <Link
                to={link.path}
                className="inline-block px-4 py-2 rounded transition-all duration-300 group-hover:text-black group-hover:scale-105"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for smaller screens */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 h-screen w-2/3 bg-[#c93] shadow-lg md:hidden">
          <div className="p-4">
            {/* Close Button */}
            <button
              className="mb-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="block px-4 py-2 rounded hover:bg-black transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
