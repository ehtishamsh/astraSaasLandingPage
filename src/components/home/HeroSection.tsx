import { Link } from "react-router-dom";
import LogoTinker from "./LogoTinker";
import Reveal from "../animation/Reveal";
import { AnimatedImg } from "./AnimatedImg";

function HeroSection() {
  return (
    <>
      <section className="mb-20 max-lg:mb-10">
        <div className="relative">
          <div
            className="w-full h-full relative pt-12 px-5"
            style={{
              backgroundImage: "url('/grid.svg')",
            }}
          >
            <div className="absolute -top-[60px] left-0 right-0 z-20 flex justify-center">
              <div className="  bg-mainColor-400/60 opacity-50 rounded-full blur-[15rem] w-[433px] h-[525px]  ">
                &nbsp;
              </div>
            </div>
            <div className="absolute -top-[100px] left-0 right-0 z-20 flex justify-center">
              <div className="  bg-mainColor-600/60 opacity-50 rounded-full blur-[15rem] w-[380px] h-[620px]  ">
                &nbsp;
              </div>
            </div>
            <Reveal>
              <div className="flex flex-col mb-40 pt-40 max-w-[900px] mx-auto items-center z-30 relative">
                <Link
                  to={"/"}
                  className=" border-b-0 border-x-0 border-t-2 border-mainColor-400/40 text-sm max-sm:text-xs flex items-center gap-2 px-3 rounded-full py-1.5 backdrop-blur-md w-fit text-center text-textColor bg-white/10"
                >
                  <span className="text-white text-[9px] max-md:text-[7px] tracking-wide font-medium bg-mainColor-500 rounded-full px-1.5 py-[0.5px]">
                    NEW
                  </span>
                  <span>Your Internal Developer Platform</span>
                </Link>
                <h1 className="mt-8 text-[54px] max-md:text-4xl max-sm:text-3xl font-bold text-center tracking-wide leading-tight">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(0deg, #be9fdf 0%, rgb(243, 236, 254) 100%)",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Transform Data into Actionable
                  </span>
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
            </Reveal>
            <AnimatedImg />
          </div>
          <div className="overlay">&nbsp;</div>
        </div>
        <div className="mt-10 relative mb-16 z-30 px-4 w-full">
          <span className="uppercase text-center inline-block w-full tracking-[1.2px] font-normal text-mainColor-100 text-xs">
            Used by the world's most average companies
          </span>
        </div>
        <Reveal>
          <div className="relative z-30">
            <LogoTinker />
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default HeroSection;
