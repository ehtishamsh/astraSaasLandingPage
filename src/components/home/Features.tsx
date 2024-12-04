function Features() {
  return (
    <div className="relative">
      <div className=" absolute top-[10%] -left-[10%] bg-mainColor-600 w-96 h-96 rounded-full z-10 blur-[14rem]"></div>
      <div className="mt-28 max-w-7xl mx-auto text-center pb-14 px-4 relative z-20">
        <span className="text-mainColor-100 bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
          FEATURES
        </span>
        <div className="mt-6 max-w-4xl mx-auto">
          <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
            Unlock the Future of Vendor Management with Intelligent Analytics
          </h2>
          <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
            Empower your business with AI-driven insights, real-time tracking,
            and comprehensive historical data.
          </p>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-6 pt-24">
          <div className="border border-borderMainColor rounded-2xl flex flex-col  gap-6 bg-mainColor-800/50 px-6 py-7">
            <img
              src="/bento1.png"
              alt="Customizable Dashboard"
              className="rounded-2xl border border-borderMainColor w-full"
            />
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-lg text-mainColor-100">
                Customizable Dashboards
              </h3>
              <p className="text-sm text-mainColor-100/80">
                Tailor dashboards to display the metrics and KPIs most relevant
                to your business needs.
              </p>
            </div>
          </div>
          <div className="border border-borderMainColor rounded-2xl flex flex-col  gap-6 bg-mainColor-800/50 px-6 py-7">
            <img
              src="/bento2.png"
              alt="Automated Reporting"
              className="rounded-2xl border border-borderMainColor w-full"
            />
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-lg text-mainColor-100">
                Automated Reporting
              </h3>
              <p className="text-sm  text-mainColor-100/80">
                Generate comprehensive reports automatically, saving time and
                ensuring accuracy.
              </p>
            </div>
          </div>
          <div className="border border-borderMainColor rounded-2xl flex flex-col  gap-6 bg-mainColor-800/50 px-6 py-7">
            <img
              src="/bento3.png"
              alt="Integrations"
              className="rounded-2xl border border-borderMainColor w-full"
            />
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-lg text-mainColor-100">Integrations</h3>
              <p className="text-sm  text-mainColor-100/80">
                Stay informed with real-time alerts and notifications about
                significant changes or anomalies in vendor performance.
              </p>
            </div>
          </div>
          <div className="border border-borderMainColor rounded-2xl flex flex-col  gap-6 bg-mainColor-800/50 px-6 py-7">
            <img
              src="/bento4.png"
              alt="Monthly Tracking Graphs"
              className="rounded-2xl border border-borderMainColor w-full"
            />
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-lg text-mainColor-100">
                Monthly Tracking Graphs
              </h3>
              <p className="text-sm  text-mainColor-100/80">
                Visualize vendor activities and performance with intuitive
                graphs updated every month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
