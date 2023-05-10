import React from 'react'
import StatisticsItem from './StatisticsItem'

const Floater = () => {
    return (
      <div
        className="absolute flex flex-col items-center justify-center gap-3 z-40 shadow-md -top-16 left-1 md:left-[15%] right-1 md:right-[15%] bg-slate-500 h-40"
        style={{
          background: "rgba(255, 255, 255, 0.23)",
          boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/*Title */}
        <h4 className="text-white c-h7 font-medium">Our Statistics</h4>
        <div className="w-[95%] md:w-10/12 mx-auto">
          <div className="text-center flex-1 flex justify-between">
            <StatisticsItem superText={"10000+"} subText={"Students taught"} />

            <StatisticsItem superText={"20000+"} subText={"Hours Lectured"} />

            <StatisticsItem
              className={"hidden md:block"}
              superText={"100+"}
              subText={"Centers"}
            />

            <StatisticsItem superText={"500+"} subText={"Lecturers"} />
          </div>
        </div>
      </div>
    );
}

export default Floater
