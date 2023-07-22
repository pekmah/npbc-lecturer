import React, { useContext, useEffect, useState } from "react";
import SideNav from "@/components/admin/sidenav/SideNav";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";

const AdminLayout = ({ b_icon, b_title, currentNav, children }) => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    window.location.href = "https://npbc-admin.netlify.app";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"min-h-screen flex flex-row admin"}>Loading . . .</div>
  );
};

export default AdminLayout;
