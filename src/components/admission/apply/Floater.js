import React from 'react'
import ProcessItem from './ProcessItem'

const Floater = () => {
    return (
      <div
        className="absolute px-3 md:px-0 flex flex-col items-center justify-center gap-3 z-40 shadow-md -top-[50px] left-1 md:left-[15%] right-1 md:right-[15%] bg-slate-500 h-32"
        data-aos="fade-up"
        style={{
          background: "rgba(255, 255, 255, 0.23)",
          boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/*Title */}
        <h4 className="text-white c-h7 font-medium">Admission process</h4>
        <div className=" w-full md:w-10/12 mx-auto">
          <div className="bg-c-red h-[1.5px] border-0 " />

          <div className="text-center flex-1 flex justify-between">
            <ProcessItem text={"Pick"} subtext={"course"} />
            <ProcessItem text={"Check"} subtext={"Requirements"} />
            <ProcessItem text={"Make"} subtext={"application"} />
            <ProcessItem text={"Get"} subtext={"admitted"} />
            <ProcessItem text={"Receive"} subtext={"orientation"} />
          </div>
        </div>
      </div>
    );
}

export default Floater


