import React from "react";

/**
 *
 * @param {string} title
 * @param {string} date
 * @param {string} desc
 * @return {JSX.Element}
 * @constructor
 */
const RightBranchItem = ({ title, date, desc }) => {
  return (
    <div className="flex gap-4 h-28">
      {/**Line */}
      <div className="hidden md:flex items-center">
        <div className="h-[1.5px] w-5 bg-white" />
        <div className="rounded-full h-[6px] w-[6px] bg-white"></div>
      </div>

      <div className="flex flex-col gap-1" data-aos="fade-left">
        <div className={"flex gap-3 items-center"}>
          <h6 className={"c-medium font-semibold"}>{title}</h6>
          <h6 className={"font-semibold text-base text-gray-500"}>{date}</h6>
        </div>
        <p className="text-[13px] font-light">{desc}</p>
      </div>
    </div>
  );
};

export default RightBranchItem;
