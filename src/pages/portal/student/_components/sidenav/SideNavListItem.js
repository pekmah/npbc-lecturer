import React from "react";

const SideNavListItem = ({ icon, name, isCurrent }) => {
  return (
    <li
      className={`py-1.5 cursor-pointer group hover:bg-c-red flex_row-center-y text-white gap-2 mr-5 rounded-r-lg duration-500 fade-in ${
        isCurrent && "bg-c-red"
      }`}
    >
      {/*  indicator */}
      <div
        className={`h-9 duration-500 fade-in w-1 rounded-r-full mr-5 group-hover:bg-white ${
          isCurrent ? "bg-white" : "bg-none"
        }`}
      />

      <div className={"flex gap-4"}>
        {icon}

        <span className={`text-base text-white ${isCurrent && "font-medium"}`}>
          {name}
        </span>
      </div>
    </li>
  );
};

export default SideNavListItem;
