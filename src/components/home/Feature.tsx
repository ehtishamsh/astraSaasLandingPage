function Feature() {
  return (
    <div className="mt-28 max-w-7xl mx-auto text-center pb-14 px-4">
      <span className="text-mainColor-100 bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
        FEATURE
      </span>
      <div className="mt-6 max-w-4xl mx-auto">
        <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
          Transform Your Management with Powerful Features
        </h2>
        <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
          From AI-driven analytics to customizable dashboards, our features
          empower you to make data-driven decisions and enhance operational
          efficiency.
        </p>
      </div>
      <div className="mt-2 flex flex-col pt-36 items-center relative">
        <img
          src="/featuregrid.png"
          alt=""
          className="grayscale absolute z-20 top-0 max-h-[500px]"
        />
        <img src="/feature.png" alt="" className="rounded-xl z-40" />
      </div>
      <div className="mt-10 grid grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl text-left bg-mainColor-800">
          <h3 className="text-lg text-mainColor-100 mb-4">
            Comprehensive Statistics
          </h3>
          <p className="text-sm max-w-[75%] text-mainColor-100/80">
            Explore detailed historical statistics to identify long-term trends
            and patterns.
          </p>
        </div>
        <div className="p-5 rounded-2xl text-left bg-mainColor-800">
          <h3 className="text-lg text-mainColor-100 mb-4">
            Customizable Dashboards
          </h3>
          <p className="text-sm max-w-[75%] text-mainColor-100/80">
            Create personalized dashboards to focus on the metrics and KPIs that
            matter most.
          </p>
        </div>
        <div className="p-5 rounded-2xl text-left bg-mainColor-800">
          <h3 className="text-lg text-mainColor-100 mb-4">
            Automated Reporting
          </h3>
          <p className="text-sm max-w-[75%] text-mainColor-100/80">
            Generate detailed reports automatically, ensuring accuracy and
            saving valuable time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
