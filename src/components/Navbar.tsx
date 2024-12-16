import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" fixed top-0 left-0 right-0 bg-mainColor-900/30 backdrop-blur-md  z-[999]">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex max-lg:justify-between items-center">
        <Link reloadDocument to="/" className="mr-14">
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <div className="flex  max-lg:hidden justify-between items-center w-full">
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
        <div className="lg:hidden z-[9999] flex items-center">
          <Hamburger
            color="#fff"
            toggle={setIsOpen}
            toggled={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-mainColor-900 z-[999] h-screen backdrop-blur-md"
          initial={{ x: "100%" }}
          animate={{ x: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
        >
          <div className="flex flex-col gap-4 text-mainColor-100 items-center justify-start pt-20 px-6 h-full">
            <Link
              reloadDocument
              to="/features"
              className="hover:bg-mainColor-700 text-lg rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <IoIosStarOutline size={20} />
              </span>
              <span>AI & Graph</span>
            </Link>
            <Link
              reloadDocument
              to="/features"
              className="hover:bg-mainColor-700 text-lg rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <IoMdCheckmarkCircleOutline size={20} />
              </span>
              <span>Features</span>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
