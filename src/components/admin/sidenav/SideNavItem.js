import React from "react";

const SideNavItem = ({ isCurrent, icon, name, isOpen }) => {
  return (
    // <Tooltip label={name} aria-label="A tooltip">
    <li
      className={`flex my-1 mx-2 cursor-pointer gap-2  capitalize text-sm p-2 hover:bg-[#2A359820] hover:text-dark_green items-center ${
        isCurrent
          ? "font-[600] text-dark_green bg-[#2A359820] "
          : "font-[400] text-not_focused_nav_text"
      } ${!isOpen && "justify-center h-10 w-10 mx-auto"}`}
    >
      <div className={`${isOpen ? "text-sm" : "text-lg"}`}>{icon} </div>

      <span className={`truncate duration-300 ${!isOpen && " hidden -z-2"}`}>
        {name}
      </span>
    </li>
    // </Tooltip>
  );
};

export default SideNavItem;
