import React from "react";
import Navbar from "./nav";
import SideNav from "./sidenav";

const StudentPortalLayout = ({ children, className }) => {
  return (
    <div className={"max-h-screen overflow-y-hidden"}>
      {/*navbar */}
      <Navbar />

      <div className={"flex max-h-screen"}>
        {/*side nav */}
        <SideNav />

        <div
          className={`w-full min-h-[calc(100vh-80px)] p-5 overflow-y-scroll pb-28 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentPortalLayout;
