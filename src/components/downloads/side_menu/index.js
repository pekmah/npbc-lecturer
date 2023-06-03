import React from "react";
import MenuItem from "@/components/downloads/side_menu/MenuItem";

function SideMenu() {
  return (
    <div
      className={
        "absolute top-0 bottom-0 left-0 right-0 md:w-1/4 bg-none hidden md:flex flex-col items-center"
      }
    >
      <div className={"h-32"} />

      <ul>
        {/*Menu items*/}
        <MenuItem key={1} isCurrent name={"Program Pamphlets"} />
        <MenuItem key={2} name={"Admission Forms"} />
        <MenuItem key={3} name={"Fee Structures"} />
        <MenuItem key={4} name={"Other Materials"} />
      </ul>
    </div>
  );
}

export default SideMenu;
