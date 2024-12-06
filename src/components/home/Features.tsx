import Reveal from "../animation/Reveal";
import { cardData } from "./Cardbg";

function Features() {
  return (
    <div className="relative">
      <div className=" absolute top-[10%] -left-[10%] bg-mainColor-600 w-96 h-96 rounded-full z-10 blur-[14rem]"></div>
      <div className="mt-28 max-w-7xl mx-auto text-center pb-14 px-4 relative z-20">
        <Reveal>
          <span className="text-mainColor-100 bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
            FEATURES
          </span>
        </Reveal>
        <div className="mt-6 max-w-4xl mx-auto">
          <Reveal delay={0.35}>
            <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
              Unlock the Future of Vendor Management with Intelligent Analytics
            </h2>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
              Empower your business with AI-driven insights, real-time tracking,
              and comprehensive historical data.
            </p>
          </Reveal>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-6 pt-24">
          {cardData.map((card, index) => (
            <Reveal
              delay={0.65 + index * 0.1}
              key={index}
              classes="border border-borderMainColor rounded-2xl flex flex-col gap-6 bg-mainColor-800/50 px-6 py-7"
            >
              <img
                src={card.imgSrc}
                alt={card.imgAlt}
                className="rounded-2xl border border-borderMainColor w-full"
              />
              <div className="flex flex-col gap-2 text-left">
                <h3 className="text-lg text-mainColor-100">{card.title}</h3>
                <p className="text-sm text-mainColor-100/80">
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
