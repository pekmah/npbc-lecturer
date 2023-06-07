import React from "react";

const CouseItem = ({
  title,
  mode,
  date,
  isCurrent,
  handleClick,
  className,
}) => {
  return (
    <li>
      <div
        className={`flex  ${
          isCurrent ? "border-2 border-blue-900" : "border border-gray-200"
        } bg-white ${className}`}
        onClick={handleClick}
      >
        <div
          className={"h-auto md:h-24 w-32 md:flex-0.4 relative overflow-hidden"}
        >
          <img
            src={"/images/home/course-1.jpg"}
            alt={"statistics-1"}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#A225317A]" />
        </div>

        <div className={"flex-1 p-2 flex flex-col gap-1"}>
          <h6 className={"font-bold text-sm md:text-md"}>{title}</h6>
          <div className={"flex gap-1 text-[13px] md:text-sm"}>
            <span className={"font-semibold"}>Study Mode:</span>
            <span className={""}>{mode}</span>
          </div>

          <div className={"flex gap-1 text-[13px] md:text-sm"}>
            <span className={"font-semibold"}>Start Date:</span>
            <span className={""}>{date}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CouseItem;
