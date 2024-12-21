import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import Hamburger from "hamburger-react";
import DropdownMenu from "./home/DropdownMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" fixed top-0 left-0 right-0 bg-mainColor-900/30 backdrop-blur-md  z-[999]">
      <nav className="max-w-7xl mx-auto px-5 max-lg:py-2 py-4 flex max-lg:justify-between items-center">
        <Link reloadDocument to="/" className="mr-14">
          <img
            src="/logo.svg"
            alt="Logo"
            className="max-lg:w-auto max-lg:h-8"
          />
        </Link>
        <div className="flex  max-lg:hidden justify-between items-center w-full">
          <ul className="flex gap-8 items-center text-base text-mainColor-100">
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/#features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/#pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                className="hover:text-mainColor-300 transition-all duration-200"
                to="/#about"
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
            <li>
              <DropdownMenu />
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <Link
              reloadDocument
              to="/"
              className="inline-flex relative text-mainColor-100 bg-gradient-to-b from-[#b469ff53] to-transparent border border-mainColor-600  overflow-hidden items-center justify-center whitespace-nowrap text-sm ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none text-background btn-secondary font-normal h-9 rounded-md px-4"
            >
              Login
            </Link>
            <Link
              reloadDocument
              to="/"
              className="inline-flex relative overflow-hidden items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:ring-2 active:ring-offset-2 active:ring-offset-background active:ring-ring active:ring-opacity-50 group select-none bg-gradient-to-b from-[#B266FF] to-[#9C39FF] text-foreground hover:opacity-70 h-9 rounded-md px-4"
            >
              Get Started
              <span>
                <IoChevronForwardOutline size={18} />
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:hidden z-[9999] w-fit flex items-center">
          <Hamburger
            color="#fff"
            size={20}
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
          animate={{
            x: 0,
            transition: { duration: 0.5, ease: "backInOut", type: "tween" },
          }}
        >
          <div className="flex flex-col gap-4 text-mainColor-100 items-center justify-start pt-20 px-6 h-full">
            <Link
              reloadDocument
              to="/#ai"
              className="hover:bg-mainColor-700 text-base font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <LuBrainCircuit size={17} />
              </span>
              <span>AI & Graph</span>
            </Link>
            <Link
              reloadDocument
              to="/#features"
              className="hover:bg-mainColor-700 text-base font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <IoMdCheckmarkCircleOutline size={17} />
              </span>
              <span>Features</span>
            </Link>
            <Link
              reloadDocument
              to="/#how-it-works"
              className="hover:bg-mainColor-700 text-base font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <BsPersonGear size={17} />
              </span>
              <span>How it works</span>
            </Link>
            <Link
              reloadDocument
              to="/#pricing"
              className="hover:bg-mainColor-700 text-base font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <IoDiamondOutline size={17} />
              </span>
              <span>Pricing</span>
            </Link>
            <Link
              reloadDocument
              to="/#faq"
              className="hover:bg-mainColor-700 text-base font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200"
            >
              <span>
                <FaRegQuestionCircle size={17} />
              </span>
              <span>FAQ</span>
            </Link>
            <div className="z-[9999] hover:bg-mainColor-700 text-base font-medium rounded-[8px] flex gap-2 px-4 py-2 items-center text-start w-full transition-all duration-200">
              <span>
                <IoDiamondOutline size={17} />
              </span>
              <span>Pricing</span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
