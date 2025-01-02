import Reveal from "../animation/Reveal";

function Feature() {
  return (
    <div className="mt-20 max-w-7xl max-lg:mt-16 max-md:mt-8 mx-auto max-sm:mt-4 text-center pb-14 px-4">
      <Reveal>
        <span className="text-mainColor-100 max-sm:px-2 max-sm:text-xs bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
          FEATURE
        </span>
      </Reveal>
      <div className="mt-6 max-w-4xl mx-auto max-md:px-4 max-md:max-w-xl max-sm:mt-4 max-sm:px-1">
        <Reveal delay={0.35}>
          <h2 className="text-[42px] max-sm:text-2xl max-sm:mb-2 mb-6 text-mainColor-100 tracking-tight leading-normal max-md:text-4xl font-medium">
            Transform Your Management with Powerful Features
          </h2>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto max-sm:text-sm max-sm:px-3">
            From AI-driven analytics to customizable dashboards, our features
            empower you to make data-driven decisions and enhance operational
            efficiency.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.65}>
        <div className="mt-2 flex flex-col pt-36 items-center relative max-md:pt-20 max-sm:pt-10">
          <img
            src="/featuregrid.png"
            alt=""
            className="grayscale absolute z-20  top-0 max-h-[500px] max-sm:h-[300px] max-md:h-[400px]"
          />

          <div className=" border-borderMainColor z-40">
            <img
              src="/feature.png"
              alt=""
              className=" w-full border-[12px] max-sm:border-[2px] rounded-xl"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.7}>
        <div className="mt-10 max-sm:mt-4 grid grid-cols-3 gap-6 max-sm:grid-cols-1">
          <div className="p-5 rounded-2xl text-left bg-mainColor-800 max-md:p-3">
            <h3 className="text-lg text-mainColor-100 mb-4 max-sm:mb-2 max-sm:text-base">
              Comprehensive Statistics
            </h3>
            <p className="text-sm max-w-[75%] text-mainColor-100/80 max-sm:text-xs max-md:max-w-full">
              Explore detailed historical statistics to identify long-term
              trends and patterns.
            </p>
          </div>
          <div className="p-5 rounded-2xl text-left bg-mainColor-800 max-md:p-3">
            <h3 className="text-lg text-mainColor-100 mb-4 max-sm:mb-2 max-sm:text-base">
              Customizable Dashboards
            </h3>
            <p className="text-sm max-w-[75%] text-mainColor-100/80 max-sm:text-xs max-md:max-w-full">
              Create personalized dashboards to focus on the metrics and KPIs
              that matter most.
            </p>
          </div>
          <div className="p-5 rounded-2xl text-left bg-mainColor-800 max-md:p-3">
            <h3 className="text-lg text-mainColor-100 mb-4 max-sm:mb-2 max-sm:text-base">
              Automated Reporting
            </h3>
            <p className="text-sm max-w-[75%] text-mainColor-100/80 max-sm:text-xs max-md:max-w-full">
              Generate detailed reports automatically, ensuring accuracy and
              saving valuable time.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Feature;
