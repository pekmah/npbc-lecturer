import React from "react";

/**
 *
 * @param {string} title
 * @param {string} date
 * @param {string} desc
 * @return {JSX.Element}
 * @constructor
 */
const LeftBranchItem = ({ title, date, desc }) => {
  return (
    <div className="flex gap-4 h-28">
      <div className="flex flex-col gap-1" data-aos="fade-right">
        <div className={"flex gap-3 items-center justify-end"}>
          <h6 className={"font-semibold text-base text-gray-500"}>{date}</h6>
          <h6 className={"c-medium font-semibold"}>{title}</h6>
        </div>
        <p className="text-[13px] font-light text-right">{desc}</p>
      </div>

      {/**Line */}
      <div className="hidden md:flex items-center">
        <div className="rounded-full h-[6px] w-[6px] bg-white"></div>
        <div className="h-[1.5px] w-5 bg-white" />
      </div>
    </div>
  );
};

export default LeftBranchItem;
