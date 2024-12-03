import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="mt-20 text-center py-24 bg-mainColor-800 px-4">
      <div className="max-w-7xl  mx-auto">
        <span className="text-mainColor-100 bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
          PRICING
        </span>
        <div className="mt-6 max-w-4xl mx-auto">
          <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
            Flexible Plans for Every Business Need
          </h2>
          <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
            Not sure which plan is best for you? Contact our sales team for a
            personalized consultation.
          </p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-6 pt-24">
          <div className="border border-borderMainColor rounded-xl text-left bg-customGray p-6">
            <span className="text-mainColor-100 text-xs font-bold tracking-[1.2px] mb-7 inline-block font-sans">
              STARTER
            </span>
            <p className="text-sm text-mainColor-100/80 mb-6 leading-6">
              Perfect for businesses just beginning to optimize vendor
              management.
            </p>
            <div className="flex items-end h-fit">
              <span className="text-mainColor-100 text-5xl font-semibold tracking-[1.2px] inline-block font-sans">
                $24
              </span>
              <span className="text-mainColor-100/80 tracking-wide inline-block font-sans ml-1">
                /month
              </span>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-[8px] mt-8 flex items-center justify-center gap-1 text-base text-mainColor-100 bg-mainColor-700  border border-mainColor-600/40"
            >
              Get Started
            </Link>
            <hr className="border-mainColor-200/10  mt-9" />
            <div className="flex flex-col gap-4 mt-9">
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  100 credits
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Data Input: Limited
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  AI Analysis: Basic
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Blockchain Integration: Standard
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Support: Email
                </span>
              </div>
            </div>
          </div>
          <div
            className="border border-borderMainColor rounded-xl text-left  p-6"
            style={{
              background:
                "radial-gradient(116% 106% at 50% 0%, rgba(168, 113, 255, 0.4), rgb(31, 25, 41) 100%)",
            }}
          >
            <span className="text-mainColor-100 text-xs font-bold tracking-[1.2px] mb-7 inline-block font-sans">
              PROFESSIONAL
            </span>
            <p className="text-sm text-mainColor-100/80 mb-6 leading-6">
              Ideal for teams needing more control and in-depth analytics.
            </p>
            <div className="flex items-end h-fit">
              <span className="text-mainColor-100 text-5xl font-semibold tracking-[1.2px] inline-block font-sans">
                $99
              </span>
              <span className="text-mainColor-100/80 tracking-wide inline-block font-sans ml-1">
                /month
              </span>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-[8px] mt-8 flex items-center justify-center gap-1 text-base text-mainColor-100 bg-gradient-to-b from-[#B266FF] to-[#9C39FF] border border-mainColor-300"
            >
              Get Started
            </Link>
            <hr className="border-mainColor-200/10  mt-9" />
            <div className="flex flex-col gap-4 mt-9">
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  1000 credits
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Data Input: Unlimited
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  AI Analysis: Advanced
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Blockchain Integration: Enhanced
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Support: Email and Phone
                </span>
              </div>
            </div>
          </div>
          <div className="border border-borderMainColor rounded-xl text-left bg-customGray p-6">
            <span className="text-mainColor-100 text-xs font-bold tracking-[1.2px] mb-7 inline-block font-sans">
              ENTERPRISE
            </span>
            <p className="text-sm text-mainColor-100/80 mb-12 leading-6">
              Best for large organizations with complex needs.
            </p>
            <div className="flex items-end h-fit">
              <span className="text-mainColor-100 text-5xl font-semibold tracking-[1.2px] inline-block font-sans">
                $599
              </span>
              <span className="text-mainColor-100/80 tracking-wide inline-block font-sans ml-1">
                /month
              </span>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-[8px] mt-8 flex items-center justify-center gap-1 text-base text-mainColor-100 bg-mainColor-700  border border-mainColor-600/40"
            >
              Get Started
            </Link>
            <hr className="border-mainColor-200/10  mt-9" />
            <div className="flex flex-col gap-4 mt-9">
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Unlimited credits
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Advanced customization options
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Tailor to your business needs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  24/7 Email & Chat Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/check.svg" alt="" className="w-5" />
                <span className="text-mainColor-100 text-base">
                  Dedicated Account Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
