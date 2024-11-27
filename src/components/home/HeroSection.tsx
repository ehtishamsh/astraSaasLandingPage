import { Link } from "react-router-dom";
import LogoTinker from "./LogoTinker";

function HeroSection() {
  return (
    <>
      <section className="mb-20">
        <div className="relative">
          <div
            className="w-full h-full relative pt-12 px-5"
            style={{
              backgroundImage: "url('/grid.svg')",
            }}
          >
            <div className="absolute -top-[60px] left-0 right-0 z-20 flex justify-center">
              <div className="  bg-mainColor-400/60 opacity-50 rounded-full blur-[15rem] w-[433px] h-[525px] hidden lg:flex">
                &nbsp;
              </div>
            </div>
            <div className="absolute -top-[100px] left-0 right-0 z-20 flex justify-center">
              <div className="  bg-mainColor-600/60 opacity-50 rounded-full blur-[15rem] w-[380px] h-[620px] hidden lg:flex">
                &nbsp;
              </div>
            </div>

            <div className="flex flex-col pt-36 mb-20 max-w-[900px] mx-auto items-center z-30 relative">
              <Link
                to={"/"}
                className=" border-b-0 border-x-0 border-t-2 border-mainColor-400/40 text-sm flex items-center gap-2 px-3 rounded-full py-1.5 backdrop-blur-md w-fit text-center text-textColor bg-white/10"
              >
                <span className="text-white text-[9px] tracking-wide font-medium bg-mainColor-500 rounded-full px-1.5 py-[0.5px]">
                  NEW
                </span>
                <span>Your Internal Developer Platform</span>
              </Link>
              <h1 className="mt-8 text-[54px] font-bold text-center tracking-wide leading-tight">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, #be9fdf 0%, rgb(243, 236, 254) 100%)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Transform Data into Actionable
                </span>{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, #be9fdf 0%, rgb(243, 236, 254) 100%)",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Insights Instantly
                </span>
              </h1>
              <h5 className="text-base mt-5 text-center text-[rgba(172,165,183,0.7)]">
                Leverage AI to generate real-time reports and make informed
                decisions faster than ever.
              </h5>
              <div className="flex gap-4 mt-10">
                <Link
                  reloadDocument
                  to="/"
                  className="px-5 py-2 rounded-[8px] flex items-center justify-center gap-1 text-base text-mainColor-100 bg-gradient-to-b from-[#B266FF] to-[#9C39FF] border border-mainColor-300"
                >
                  Get Started
                </Link>
                <Link
                  reloadDocument
                  to="/"
                  className="px-5 py-2 rounded-[8px] flex items-center justify-center gap-1 text-base text-mainColor-100 bg-gradient-to-b from-[#b469ff53] to-transparent border border-mainColor-300"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="flex justify-center relative z-30 max-w-[1200px] mx-auto">
              <img
                src="/hero-section-dashboard.png"
                alt="dashboard"
                className="w-full"
              />
            </div>
          </div>
          <div className="overlay">&nbsp;</div>
        </div>
        <div className="mt-20 relative mb-16 z-30 px-4 w-full">
          <span className="uppercase text-center inline-block w-full tracking-[1.2px] font-normal text-mainColor-100 text-xs">
            Used by the world's most average companies
          </span>
        </div>
        <div className="relative z-30">
          <LogoTinker />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
