/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";

const Lecturer = () => {
  return (
    <div className={"flex flex-col md:flex-row gap-4"}>
      <img
        className={"object-cover flex-[0.8]"}
        src="/images/courses/course/lecturer-1.jpg"
        alt="lecturer 1"
      />

      {/*    details*/}
      <div className={"text-c-blue flex-1 flex flex-col gap-1"}>
        <h6 className={"c-large"}>Dr.Grace Mwalimu</h6>
        <p className={"text-sm font-medium"}>Serving patron</p>
        <p className={"text-sm font-medium text-[#092A59A8]"}>
          B.A.Diplomacy & Foreign Affairs
        </p>
        <p className={"font-medium text-sm w-11/12"}>
          Dr. Grace is a graduate of NPBC and has been a lecturer for 15 years
          training Bible scholars in matters of theology.
        </p>

        {/*    Social Media     */}
        <div className={"flex w-full gap-4 text-c-blue my-3"}>
          {/*    Linked In    */}
          <GrLinkedin className={"text-2xl"} />
          {/*    Twitter    */}
          <FaTwitter className={"text-2xl"} />
          {/*    Facebook    */}
          <MdOutlineFacebook className={"text-2xl"} />
          {/*    Instagram    */}
          <FaInstagram className={"text-2xl"} />
        </div>
      </div>
    </div>
  );
};

export default Lecturer;
