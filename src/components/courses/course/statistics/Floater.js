import React from "react";
import StatisticsItem from "./StatisticsItem";

const Floater = () => {
  return (
    <div
      className="absolute flex flex-col items-center justify-center gap-3 z-40 shadow-md -top-16 left-1 right-1 md:left-[15%] md:right-[15%] bg-slate-500 h-40"
      style={{
        background: "rgba(255, 255, 255, 0.23)",
        boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/*Title */}
      <h4 className="text-white c-h7 font-medium">Course Statistics</h4>
      <div className="w-10/12 mx-auto">
        <div className="text-center flex-1 flex justify-between">
          <StatisticsItem superText={"120"} subText={"Credit hours"} />

          <StatisticsItem superText={"7500"} subText={"Fees per course"} />

          <StatisticsItem superText={"1850"} subText={"Course graduates"} />

          <StatisticsItem
            className={"hidden md:block"}
            superText={"4/2"}
            subText={"Course duration"}
          />
        </div>
      </div>
    </div>
  );
};

export default Floater;
