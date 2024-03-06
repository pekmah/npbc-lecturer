import React from "react";

import SideNavListItem from "./SideNavListItem";
import {
  BookSvg,
  DashboardSvg,
  ProfileSvg,
  ReceiptSvg,
  WalletSvg,
} from "@/assets/icons";

const SideNav = () => {
  return (
    <div className={"min-w-[260px] bg-c-blue min-h-screen inter"}>
      <div className={"h-12 "} />

      {/*nav list*/}
      <ul className={"flex_col gap-3"}>
        {navList?.map(({ icon, name }, ind) => (
          <SideNavListItem
            key={ind}
            isCurrent={ind === 0}
            icon={icon}
            name={name}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideNav;

const navList = [
  {
    icon: <DashboardSvg />,
    name: "Dashboard",
    path: "",
  },
  {
    icon: <BookSvg />,
    name: "Academics",
    path: "/academics",
  },
  {
    icon: <WalletSvg />,
    name: "Finances",
    path: "/finances",
  },
  {
    icon: <ReceiptSvg />,
    name: "Examinations",
    path: "",
  },
  {
    icon: <ProfileSvg />,
    name: "My Profile",
    path: "profile",
  },
];
