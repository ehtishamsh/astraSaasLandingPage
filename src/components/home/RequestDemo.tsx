import { Link } from "react-router-dom";
import Reveal from "../animation/Reveal";

function RequestDemo() {
  return (
    <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center text-center  min-h-[470px] relative mb-7 px-4">
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
        <img src="/demo.png" alt="Request Demo" />
      </div>
      <div className="flex justify-center  max-w-4xl mx-auto flex-col items-center relative z-30">
        <Reveal>
          <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
            Take the next step toward optimized & streamlined operations.
          </h2>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
            Empower your business with AI-driven insights, real-time tracking,
            and comprehensive historical data.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
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
        </Reveal>
      </div>
    </div>
  );
}

export default RequestDemo;
