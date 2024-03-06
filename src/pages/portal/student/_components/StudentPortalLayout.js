import React from "react";
import Navbar from "./nav";

const StudentPortalLayout = ({ children }) => {
  return (
    <div>
      {/*navbar */}
      <Navbar />
      {children}
    </div>
  );
};

export default StudentPortalLayout;
