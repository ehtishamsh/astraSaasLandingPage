import { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import Reveal from "../animation/Reveal";

function Pricing() {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(!isToggled);
  return (
    <div className="mt-20 max-lg:mt-16 max-md:mt-8 text-center max-sm:mt-4 py-24 max-lg:py-16 bg-mainColor-800 px-4">
      <div className="max-w-7xl  mx-auto">
        <Reveal>
          <span className="text-mainColor-100 max-sm:px-2 max-sm:text-xs bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
            PRICING
          </span>
        </Reveal>

        <div className="mt-6 max-w-4xl  mx-auto">
          <Reveal delay={0.35}>
            <h2 className="text-[42px] max-sm:text-2xl max-sm:mb-2 mb-6 text-mainColor-100 tracking-tight leading-normal max-md:text-4xl font-medium">
              Flexible Plans for Every Business Need
            </h2>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto max-sm:text-sm max-sm:px-3">
              Not sure which plan is best for you? Contact our sales team for a
              personalized consultation.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-6 flex justify-center items-center gap-6">
              <span className="text-mainColor-100 text-lg max-sm:text-base">
                Monthly
              </span>
              <Toggle
                label="Monthly"
                isToggled={isToggled}
                setIsToggled={toggle}
              />
              <span className="text-mainColor-100 text-lg max-sm:text-base">
                Annually
              </span>
            </div>
          </Reveal>
        </div>
        <div className="max-lg:max-w-3xl mx-auto">
          <div className="mt-2 grid grid-cols-3 max-lg:grid-cols-1 transition-all duration-200 gap-6 pt-10 max-md:pt-6 max-md:max-w-xl max-md:mx-auto">
            <Reveal
              delay={0.65}
              classes="border border-borderMainColor rounded-xl text-left bg-customGray p-6 max-sm:p-4"
            >
              <span className="text-mainColor-100 text-xs font-bold tracking-[1.2px] max-sm:mb-3 mb-7 inline-block font-sans">
                STARTER
              </span>
              <p className="text-sm text-mainColor-100/80 mb-6 max-sm:mb-2 max-sm:text-[12px] leading-6">
                Perfect for businesses just beginning to optimize vendor
                management.
              </p>
              <div className="flex items-end h-fit">
                <span className="text-mainColor-100 text-5xl max-sm:text-3xl font-semibold tracking-[1.2px] inline-block font-sans">
                  {isToggled ? "$200" : "$24"}
                </span>
                <span className="text-mainColor-100/80 max-sm:text-[12px] tracking-wide inline-block font-sans ml-1">
                  /{isToggled ? "year" : "month"}
                </span>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-[8px] mt-8 flex items-center max-sm:mt-4 justify-center gap-1 text-base text-mainColor-100 bg-mainColor-700  border border-mainColor-600/40"
              >
                Get Started
              </Link>
              <hr className="border-mainColor-200/10  mt-9 max-sm:mt-5" />
              <div className="flex flex-col gap-4 mt-9 max-sm:mt-5">
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    100 credits
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Data Input: Limited
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    AI Analysis: Basic
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Blockchain Integration: Standard
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Support: Email
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal
              delay={0.75}
              classes="border pricingGlow border-borderMainColor rounded-xl text-left  p-6 max-sm:p-4"
            >
              <span className="text-mainColor-100 text-xs font-bold tracking-[1.2px] max-sm:mb-3 mb-7 inline-block font-sans">
                PROFESSIONAL
              </span>
              <p className="text-sm text-mainColor-100/80 mb-6 max-sm:mb-2 max-sm:text-[12px] leading-6">
                Ideal for teams needing more control and in-depth analytics.
              </p>
              <div className="flex items-end h-fit">
                <span className="text-mainColor-100 text-5xl max-sm:text-3xl  font-semibold tracking-[1.2px] inline-block font-sans">
                  {isToggled ? "$800" : "$99"}
                </span>
                <span className="text-mainColor-100/80 tracking-wide inline-block font-sans ml-1">
                  /{isToggled ? "year" : "month"}
                </span>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-[8px] max-sm:mt-4 mt-8 flex items-center justify-center gap-1 text-base text-mainColor-100 bg-gradient-to-b from-[#B266FF] to-[#9C39FF] border border-mainColor-300"
              >
                Get Started
              </Link>
              <hr className="border-mainColor-200/10  mt-9 max-sm:mt-5" />
              <div className="flex flex-col gap-4 mt-9 max-sm:mt-5">
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    1000 credits
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Data Input: Unlimited
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    AI Analysis: Advanced
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Blockchain Integration: Enhanced
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Support: Email and Phone
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal
              delay={0.85}
              classes="border border-borderMainColor rounded-xl text-left bg-customGray p-6 max-sm:p-4"
            >
              <span className="text-mainColor-100 text-xs font-bold tracking-[1.2px] max-sm:mb-3 mb-7 inline-block font-sans">
                ENTERPRISE
              </span>
              <p className="text-sm text-mainColor-100/80 mb-12 max-lg:mb-6 leading-6">
                Best for large organizations with complex needs.
              </p>
              <div className="flex items-end h-fit">
                <span className="text-mainColor-100 text-5xl max-sm:text-3xl  font-semibold tracking-[1.2px] inline-block font-sans">
                  {isToggled ? "$5500" : "$599"}
                </span>
                <span className="text-mainColor-100/80 tracking-wide inline-block font-sans ml-1">
                  /{isToggled ? "year" : "month"}
                </span>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-[8px] mt-8 flex items-center justify-center gap-1 text-base max-sm:mt-4 text-mainColor-100 bg-mainColor-700  border border-mainColor-600/40"
              >
                Get Started
              </Link>
              <hr className="border-mainColor-200/10  mt-9 max-sm:mt-5" />
              <div className="flex flex-col gap-4 mt-9 max-sm:mt-5">
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Unlimited credits
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Advanced customization options
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Tailor to your business needs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    24/7 Email & Chat Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/check.svg" alt="" className="w-5" />
                  <span className="text-mainColor-100 text-base max-sm:text-sm">
                    Dedicated Account Manager
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
