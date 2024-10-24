import React from "react";
import { Button } from "../general";
import { FiPhone } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import Image from "next/image";

import logo from "@/assets/images/npbc-logo.png";

const Header = ({ showModal }) => {
  return (
    <div className="bg-white md:px-10 px-3 h-[75px] flex items-center text-black">
      <div className="flex flex-col md:flex-row gap-[0.5] md:gap-4 justify-center md:items-center ">
        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className=" h-12 md:h-[80px] w-[70px] object-contain"
          src={logo}
          alt="logo"
          height={80}
          width={70}
        />

        {/* title */}
        <h4 className="c-h7 text-xl font-bold text-c-blue hidden md:inline-flex">
          Nairobi Pentecostal Bible College
        </h4>
      </div>
    </div>
  );
};

export default Header;
