import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header className=" bg-mainColor-800">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center">
        <Link reloadDocument to="/" className="mr-14">
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <div className="flex justify-between items-center w-full">
          <ul className="flex gap-8 items-center text-base text-mainColor-100">
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
          <Link
            reloadDocument
            to="/"
            className="px-5 py-2 rounded-[8px] flex items-center justify-center gap-1 text-base text-mainColor-100 bg-gradient-to-b from-[#B266FF] to-[#9C39FF] border border-mainColor-300"
          >
            Get Started
            <span>
              <IoChevronForwardOutline size={18} />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
