import React from "react";
import MenuItem from "./MenuItem";

const SideNav = () => {
  return (
    <div
      className={"w-1/4 bg-none hidden md:flex flex-col"}
      data-aos="fade-right"
    >
      <ul className={"w-8/12 mx-auto"}>
        {/*Menu items*/}
        <MenuItem isCurrent name={"History"} />
        <MenuItem name={"Accredition"} />
        <MenuItem name={"Mission & Vision"} />
        <MenuItem name={"Philosophy & Core Values"} />
        <MenuItem name={"Our Goals"} />
        <MenuItem name={"Leadership"} />
        <MenuItem name={"Partners"} />
      </ul>
    </div>
  );
};

export default SideNav;
