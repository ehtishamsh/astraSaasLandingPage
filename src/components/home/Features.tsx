import Reveal from "../animation/Reveal";
import { cardData } from "./Cardbg";

function Features() {
  return (
    <div className="relative">
      <div className=" absolute top-[10%] -left-[10%] bg-mainColor-600 w-96 h-96 rounded-full z-10 blur-[14rem]"></div>
      <div className="mt-28 max-lg:mt-16 max-md:mt-8 max-w-7xl max-sm:mt-4 mx-auto text-center pb-14 px-4 relative z-20">
        <Reveal>
          <span className="text-mainColor-100 max-sm:px-2 max-sm:text-xs bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
            FEATURES
          </span>
        </Reveal>
        <div className="mt-6 max-w-4xl mx-auto max-md:px-4 max-md:max-w-xl max-sm:mt-4 max-sm:px-1">
          <Reveal delay={0.35}>
            <h2 className="text-[42px] max-sm:text-2xl max-sm:mb-2 mb-6 text-mainColor-100 tracking-tight leading-normal max-md:text-4xl font-medium">
              Unlock the Future of Vendor Management with Intelligent Analytics
            </h2>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto max-sm:text-sm max-sm:px-3">
              Empower your business with AI-driven insights, real-time tracking,
              and comprehensive historical data.
            </p>
          </Reveal>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-6 pt-24 max-lg:pt-16 max-md:pt-8 max-sm:pt-4 max-sm:grid-cols-1">
          {cardData.map((card, index) => (
            <Reveal
              delay={0.65 + index * 0.1}
              key={index}
              classes="border border-borderMainColor rounded-2xl flex flex-col gap-6 bg-mainColor-800/50 px-6 py-7 max-sm:p-4 max-sm:gap-4"
            >
              <img
                src={card.imgSrc}
                alt={card.imgAlt}
                className="rounded-2xl border border-borderMainColor w-full"
              />
              <div className="flex flex-col gap-2 max-sm:gap-1 text-left">
                <h3 className="text-lg text-mainColor-100 max-sm:text-base">
                  {card.title}
                </h3>
                <p className="text-sm text-mainColor-100/80 max-sm:text-xs">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
