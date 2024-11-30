function Graphs() {
  return (
    <section className="py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto bg-mainColor-800 rounded-xl p-9 grid gap-16 grid-cols-7">
        <div className="col-span-4 py-8">
          <span className="text-mainColor-100 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
            GRAPHS
          </span>
          <div className="mt-6">
            <h2 className="text-4xl mb-6 text-mainColor-100 font-medium">
              Monthly Tracking Graphs
            </h2>
            <p className="text-mainColor-200/50 text-lg tracking-tight">
              Stay informed with intuitive monthly graphs that track vendor
              activities. Easily monitor performance metrics and make
              data-driven decisions to enhance efficiency and outcomes.
            </p>
          </div>
          <div className="mt-12 flex flex-col">
            <div className="flex items-start justify-start gap-4 py-4">
              <span className="mt-1">
                <svg
                  width="12.000000"
                  height="13.333008"
                  viewBox="0 0 12 13.333"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id="Vector"
                    d="M11.82 3.41L11.72 3.24C11.6 3.04 11.43 2.87 11.23 2.75L6.75 0.17C6.55 0.06 6.32 0 6.09 0L5.9 0C5.66 0 5.43 0.06 5.23 0.17L0.75 2.76C0.55 2.88 0.39 3.05 0.27 3.25L0.17 3.41C0.06 3.62 0 3.85 0 4.08L0 9.25C0 9.48 0.06 9.71 0.17 9.91L0.27 10.08C0.39 10.28 0.56 10.45 0.75 10.57L5.24 13.15C5.44 13.27 5.67 13.33 5.9 13.33L6.09 13.33C6.32 13.33 6.55 13.27 6.75 13.15L11.23 10.56C11.43 10.45 11.6 10.28 11.72 10.08L11.82 9.91C11.93 9.7 11.99 9.48 12 9.24L12 4.08C12 3.84 11.93 3.61 11.82 3.41ZM5.9 1.33L6.09 1.33L10 3.58L6 5.89L2 3.58L5.9 1.33ZM6.66 11.66L10.56 9.41L10.66 9.24L10.66 4.74L6.66 7.05L6.66 11.66Z"
                    fill="rgba(242, 235, 253, 0.7)"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
              <p className="ml-4 text-mainColor-100/80 text-base">
                Interactive Dashboards: Dive deeper into data with interactive
                and user-friendly dashboards.
              </p>
            </div>
            <hr className="border-mainColor-200/10" />
            <div className="flex items-start justify-start gap-4 py-4">
              <span className="mt-1">
                <svg
                  width="12.000000"
                  height="13.333008"
                  viewBox="0 0 12 13.333"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <path
                    id="Vector"
                    d="M11.82 3.41L11.72 3.24C11.6 3.04 11.43 2.87 11.23 2.75L6.75 0.17C6.55 0.06 6.32 0 6.09 0L5.9 0C5.66 0 5.43 0.06 5.23 0.17L0.75 2.76C0.55 2.88 0.39 3.05 0.27 3.25L0.17 3.41C0.06 3.62 0 3.85 0 4.08L0 9.25C0 9.48 0.06 9.71 0.17 9.91L0.27 10.08C0.39 10.28 0.56 10.45 0.75 10.57L5.24 13.15C5.44 13.27 5.67 13.33 5.9 13.33L6.09 13.33C6.32 13.33 6.55 13.27 6.75 13.15L11.23 10.56C11.43 10.45 11.6 10.28 11.72 10.08L11.82 9.91C11.93 9.7 11.99 9.48 12 9.24L12 4.08C12 3.84 11.93 3.61 11.82 3.41ZM5.9 1.33L6.09 1.33L10 3.58L6 5.89L2 3.58L5.9 1.33ZM6.66 11.66L10.56 9.41L10.66 9.24L10.66 4.74L6.66 7.05L6.66 11.66Z"
                    fill="rgba(242, 235, 253, 0.7)"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
              <p className="ml-4 text-mainColor-100/80 text-base">
                Historical Comparisons: Compare current performance with
                historical data to identify trends and make informed decisions.
              </p>
            </div>
            <hr className="border-mainColor-200/10" />
          </div>
        </div>
        <div className="col-span-3">
          <img
            src="/graphs.png"
            className="rounded-xl"
            alt="Graphs"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Graphs;