import React from "react";
import Navbar from "./nav";
import SideNav from "./sidenav";

const StudentPortalLayout = ({ children, className }) => {
  return (
    <div>
      {/*navbar */}
      <Navbar />

      <div className={"flex max-h-screen"}>
        {/*side nav */}
        <SideNav />

        <div className={`w-full h-full p-5 overflow-y-scroll ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentPortalLayout;
