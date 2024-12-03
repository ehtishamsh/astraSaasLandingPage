import { Link } from "react-router-dom";

function Howitworks() {
  return (
    <div className="mt-28 max-w-7xl mx-auto text-center pb-14 px-4">
      <span className="text-mainColor-100 bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
        HOW IT WORKS
      </span>
      <div className="mt-6 max-w-4xl mx-auto">
        <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
          Comprehensive Tools for Optimal Vendor Management
        </h2>
        <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
          Explore the suite of powerful features designed to streamline your
          vendor management process, enhance decision-making, and drive business
          success.
        </p>
        <div className="flex mt-10 items-center justify-center gap-4">
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
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-6 pt-24">
        <div className="p-8 rounded-2xl text-left bg-mainColor-800">
          <img
            src="/howitworks.svg"
            alt="How it works"
            className="max-w-6 mb-8"
          />
          <h3 className="text-2xl font-medium mb-4 text-mainColor-100">
            AI-Powered Insights
          </h3>
          <p className="text-mainColor-200/50 text-base">
            Gain actionable intelligence with advanced AI algorithms.
          </p>
        </div>
        <div className="p-8 rounded-2xl text-left bg-mainColor-800">
          <img
            src="/howitworks.svg"
            alt="How it works"
            className="max-w-6 mb-8"
          />
          <h3 className="text-2xl font-medium mb-4 text-mainColor-100">
            Real-Time Dashboards
          </h3>
          <p className="text-mainColor-200/50 text-base">
            Stay on top of vendor activities with interactive, real-time
            dashboards.
          </p>
        </div>
        <div className="p-8 rounded-2xl text-left bg-mainColor-800">
          <img
            src="/howitworks.svg"
            alt="How it works"
            className="max-w-6 mb-8"
          />
          <h3 className="text-2xl font-medium mb-4 text-mainColor-100">
            Automated Reporting
          </h3>
          <p className="text-mainColor-200/50 text-base">
            Save time and ensure accuracy with automated report generation.
          </p>
        </div>
        <div className="p-8 rounded-2xl text-left bg-mainColor-800">
          <img
            src="/howitworks.svg"
            alt="How it works"
            className="max-w-6 mb-8"
          />
          <h3 className="text-2xl font-medium mb-4 text-mainColor-100">
            Comprehensive Data
          </h3>
          <p className="text-mainColor-200/50 text-base">
            Access detailed historical data to track vendor performance over
            time.
          </p>
        </div>
        <div className="p-8 rounded-2xl text-left bg-mainColor-800">
          <img
            src="/howitworks.svg"
            alt="How it works"
            className="max-w-6 mb-8"
          />
          <h3 className="text-2xl font-medium mb-4 text-mainColor-100">
            Customizable Dashboards
          </h3>
          <p className="text-mainColor-200/50 text-base">
            Tailor your dashboards to fit your business needs.
          </p>
        </div>
        <div className="p-8 rounded-2xl text-left bg-mainColor-800">
          <img
            src="/howitworks.svg"
            alt="How it works"
            className="max-w-6 mb-8"
          />
          <h3 className="text-2xl font-medium mb-4 text-mainColor-100">
            AI-Powered Insights
          </h3>
          <p className="text-mainColor-200/50 text-base">
            Stay informed with real-time alerts and notifications about
            significant changes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
