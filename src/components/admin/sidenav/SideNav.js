import React from "react";
import SideNavItem from "./SideNavItem";
import Link from "next/link";

const SideNav = ({ current = "dashboard", isOpen = false }) => {
  return (
    <div className={` max-h-screen flex w-64 bg-gray-100 fixed duration-300`}>
      <div className="flex-[0.9] flex flex-col px-0.5 py-2 fixed w-64 top-0 bottom-0 bg-white">
        {/* logo */}
        <div className="flex justify-center py-8 font-bold text-xl underline">
          NPBC ADMIN
        </div>

        <ul className="flex flex-col gap-y-1 no-scrollbar w-full mr-4">
          {nav_list?.map((nav, i) => (
            <Link key={i} href={nav?.route}>
              <SideNavItem
                isCurrent={current === nav?.name?.toLowerCase()}
                name={nav?.name}
                icon={nav?.icon}
                isOpen={isOpen}
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

let nav_list = [
  {
    name: "Home",
    route: "/admin",
  },
  {
    name: "Admissions",
    route: "/admin/admissions",
  },
  {
    name: "Downloads",
    route: "/admin/downloads",
  },
  {
    name: "Courses",
    route: "/admin/courses",
  },
  {
    name: "About",
    route: "/admin/about",
  },
];
