import React from "react";
import Navbar from "./nav";
import SideNav from "./sidenav";

const StudentPortalLayout = ({ children }) => {
  return (
    <div>
      {/*navbar */}
      <Navbar />

      <div className={"flex"}>
        {/*side nav */}
        <SideNav />

        <div className={"w-full h-full p-5"}>{children}</div>
      </div>
    </div>
  );
};

export default StudentPortalLayout;
