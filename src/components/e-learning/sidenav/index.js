import React from "react";

import SideNavListItem from "./SideNavListItem";
import { LogoutSvg } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const SideNav = ({ navList }) => {
  const currentPage = usePathname();

  const verifyIsCurrent = (nav) => {
    return currentPage === nav;
  };

  const logout = () => {
    signOut();
  };

  return (
    <div
      className={
        "min-w-[260px] bg-c-blue min-h-[calc(100vh-80px)] inter flex_col"
      }
    >
      <div className={"h-12 "} />

      {/*nav list*/}
      <ul className={"flex_col gap-3 h-3/4"}>
        {navList?.map(({ icon, name, path }, ind) => (
          <SideNavListItem
            key={ind}
            isCurrent={verifyIsCurrent(path)}
            icon={icon}
            name={name}
            path={path}
          />
        ))}
      </ul>

      <button onClick={logout}>
        <SideNavListItem icon={<LogoutSvg />} name={"Logout"} />
      </button>

      <div className={"h-12 "} />
    </div>
  );
};

export default SideNav;
