import AI from "./AI";
import Graphs from "./Graphs";

function AIandGraphs() {
  return (
    <div className="relative">
      <div className=" absolute -bottom-[10%] -left-[10%] bg-mainColor-600 w-96 h-96 rounded-full z-10 blur-[14rem]"></div>
      <div className="z-20 relative">
        <AI />
        <Graphs />
      </div>
    </div>
  );
}

export default AIandGraphs;
