import React from "react";

const Statistics = () => {
  return (
    <div className={"my-6 bg-[#FFFFFF14] p-4 md:p-8 px-2"}>
      <h6 className={"c-large font-semibold text-center mb-2"}>
        Our Statistics
      </h6>

      <div className={"flex justify-between p-2"}>
        <div className={"text-center"}>
          <h5 className={"font-medium text-xl md:c-h7 text-center"}>10000+</h5>

          <span className={"text-sm font-medium my-2"}>Students taught</span>
        </div>

        <div className={"text-center"}>
          <h5 className={"font-medium text-xl md:c-h7 text-center"}>20000+</h5>

          <span className={"text-sm font-medium my-2"}>Hours Lectured</span>
        </div>

        <div className={"text-center hidden md:block"}>
          <h5 className={"font-medium text-xl md:c-h7 text-center"}>100+</h5>

          <span className={"text-sm font-medium my-2"}>Centers</span>
        </div>

        <div className={"text-center"}>
          <h5 className={"font-medium text-xl md:c-h7 text-center"}>500+</h5>

          <span className={"text-sm font-semibold my-2"}>Lecturers</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
