import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NotificationBellSvg } from "@/assets/icons";
import { FaChevronDown } from "react-icons/all";

const Navbar = () => {
  return (
    <div
      className={
        "flex_row-center-y justify-between p-2 bg-white md:px-10 inter min-h-[80px]"
      }
    >
      {/*logo*/}
      <div className={"flex_row-center-y gap-2"}>
        <Image
          src={"/images/layout/logo-1.png"}
          className={"w-16 object-contain"}
          alt={"logo"}
          height={100}
          width={100}
        />
        <h3 className={"text-xl font-semibold"}>
          Nairobi Pentecostal Bible College
        </h3>
      </div>

      <div className={"flex_row gap-3"}>
        <Button variant={"ghost"} className={"py-0 p-2 rounded-full"}>
          <NotificationBellSvg />
        </Button>

        <Button variant={"ghost"} className={"flex gap-3 py-1.5"}>
          <Image
            height={100}
            width={100}
            className={"h-10 w-10 rounded-full"}
            src={"/images/e-learning/npbc-user.jpeg"}
            alt={"profile"}
          />

          <span className={"text-base font-normal"}>Peter Muhia</span>

          <FaChevronDown className={"text-primary text-md"} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
