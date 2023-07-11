import React, { useState } from "react";
import SideNav from "@/components/admin/sidenav/SideNav";

const AdminLayout = ({ b_icon, b_title, currentNav, children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className={"min-h-screen flex flex-row"}>
      <SideNav isOpen={showSideBar} current={currentNav} />

      <div className={"min-h-full w-full z-0 ml-[250px]"}>
        <div className={"flex-1 p-2 relative"}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
