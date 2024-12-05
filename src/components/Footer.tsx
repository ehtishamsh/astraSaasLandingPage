import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative overflow-y-hidden">
      <div className=" absolute -bottom-[30%] -left-[10%]   bg-mainColor-600 w-96 h-96 rounded-full z-10 blur-[14rem]"></div>

      <div className="mt-28 relative z-20">
        <hr className="border-mainColor-200/10" />
        <div className="max-w-7xl px-6 py-20 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-7">
              <img src="/logo.svg" alt="Astro" className="max-w-28" />
              <span className="text-mainColor-200/70">
                Seamlessly transform your concepts into a fully operational,
                mobile-friendly, code-free SaaS web platform.
              </span>
              <div className="flex gap-4 items-center">
                <Link to="https://www.facebook.com/" target="_blank">
                  <SlSocialLinkedin className="text-mainColor-200 text-xl hover:text-mainColor-100 transition-all duration-200" />
                </Link>
                <Link to="https://www.twitter.com/" target="_blank">
                  <FaXTwitter className="text-mainColor-200 text-xl hover:text-mainColor-100 transition-all duration-200" />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="text-mainColor-200 text-xl hover:text-mainColor-100 transition-all duration-200" />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FiFacebook className="text-mainColor-200 text-xl hover:text-mainColor-100 transition-all duration-200" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-mainColor-100 font-semibold text-lg mb-4">
                Company
              </span>
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-mainColor-200/70 hover:text-mainColor-100 transition-all duration-200"
                >
                  Pricing
                </Link>
                <Link
                  to="/"
                  className="text-mainColor-200/70 hover:text-mainColor-100 transition-all duration-200"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="text-mainColor-200/70 hover:text-mainColor-100 transition-all duration-200"
                >
                  Demo
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-mainColor-100 font-semibold text-lg mb-4">
                Info
              </span>
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-mainColor-200/70 hover:text-mainColor-100 transition-all duration-200"
                >
                  Privacy
                </Link>
                <Link
                  to="/"
                  className="text-mainColor-200/70 hover:text-mainColor-100 transition-all duration-200"
                >
                  Terms & Policy
                </Link>
                <Link
                  to="/"
                  className="text-mainColor-200/70 hover:text-mainColor-100 transition-all duration-200"
                >
                  404
                </Link>
              </div>
            </div>
          </div>
          <hr className="border-mainColor-200/10 mt-8" />
          <div className="flex items-center py-5">
            <span className="text-mainColor-200/70">
              © {new Date().getFullYear()} Astro. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
