import { Link } from "react-router-dom";
import Reveal from "../animation/Reveal";

function RequestDemo() {
  return (
    <div className="mt-20 max-lg:mt-16 max-md:mt-8 max-w-7xl max-sm:mt-4 mx-auto pb-14 px-4">
      <div className="relative inline-block">
        <img
          src="/demo.png"
          alt="requestDemo"
          className="w-full h-auto max-sm:hidden"
        />
        <div className="absolute max-w-4xl max-md:max-w-xl max-sm:relative mx-auto text-center inset-0 flex flex-col items-center justify-center">
          <Reveal>
            <h2 className="text-[42px] max-sm:text-xl max-sm:mb-2 mb-6 max-md:mb-3 text-mainColor-100 tracking-tight leading-normal max-md:text-2xl font-medium">
              Take the next step toward optimized & streamlined operations
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="text-mainColor-200/50 max-md:text-sm max-sm:text-xs text-lg text-center max-w-4xl px-5 mx-auto">
              Empower your business with AI-driven insights, real-time tracking,
              and comprehensive historical data.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="flex gap-4 mt-10 max-sm:mt-4">
              <Link
                reloadDocument
                to="/"
                className="px-5 py-2 rounded-[8px] flex items-center justify-center gap-1 text-base max-md:text-sm max-md:px-3 text-mainColor-100 bg-gradient-to-b from-[#B266FF] to-[#9C39FF] border border-mainColor-300"
              >
                Get Started
              </Link>
              <Link
                reloadDocument
                to="/"
                className="px-5 py-2 rounded-[8px] flex items-center justify-center gap-1 text-base max-md:text-sm max-md:px-3 text-mainColor-100 bg-gradient-to-b from-[#b469ff53] to-transparent border border-mainColor-300"
              >
                Request a Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;
