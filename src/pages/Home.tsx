function Home() {
  return (
    <section className="relative h-screen">
      <div className="absolute top-0  left-0 right-0 bottom-0 z-[10]">
        <img src="/grid.svg" alt="" className="w-full max-h-[400px]" />
      </div>
      <div className="flex flex-col pt-36 max-w-[900px] mx-auto items-center z-30 relative">
        <span className="text-sm px-5 rounded-sm py-1 border w-fit text-center border-[rgba(_243,_236,_254,_0.1)] text-textColor bg-mainColor-800">
          Your Internal Developer Platform
        </span>
        <h1 className="mt-8 text-[54px] font-medium text-center tracking-wide leading-tight">
          <span
            style={{
              backgroundImage:
                "linear-gradient(0deg, #be9fdf 0%, rgb(243, 236, 254) 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Transform Data into Actionable
          </span>{" "}
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
          Leverage AI to generate real-time reports and make informed decisions
          faster than ever.
        </h5>
        <div></div>
      </div>
    </section>
  );
}

export default Home;
