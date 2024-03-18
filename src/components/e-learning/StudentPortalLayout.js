import React from "react";
import Navbar from "./nav";
import SideNav from "./sidenav";
import {
  BookSvg,
  DashboardSvg,
  ProfileSvg,
  ReceiptSvg,
  WalletSvg,
} from "@/assets/icons";

const StudentPortalLayout = ({ children, className }) => {
  return (
    <div className={"max-h-screen overflow-y-hidden"}>
      {/*navbar */}
      <Navbar />

      <div className={"flex max-h-screen"}>
        {/*side nav */}
        <SideNav navList={navList} />

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

const navList = [
  {
    icon: <DashboardSvg />,
    name: "Dashboard",
    path: "/portal/student",
  },
  {
    icon: <BookSvg />,
    name: "Academics",
    path: "/portal/student/academics",
  },
  {
    icon: <WalletSvg />,
    name: "Finances",
    path: "/portal/student/finances",
  },
  {
    icon: <ReceiptSvg />,
    name: "Examinations",
    path: "/portal/student/examinations",
  },
  {
    icon: <ProfileSvg />,
    name: "My Profile",
    path: "profile",
  },
];
