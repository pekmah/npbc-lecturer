/* eslint-disable @next/next/no-img-element */
import React from "react";

const LeadershipItem = ({ title, role, course, image }) => {
  return (
    <div
      className={
        "w-full md:w-[47%] px-2 flex flex-col md:flex-row gap-4 items-center"
      }
      data-aos="fade-up"
    >
      {/*Image*/}
      <div className={"w-32 h-28 flex-shrink-0"}>
        <img
          className={" w-full h-full object-cover object-top"}
          src={image || "/images/about/leadership-empty-1.webp"}
          alt="about-1"
        />
      </div>
      {/*    Details      */}
      <div className={""}>
        {/*title*/}
        <h6 className={"c-large"}>{title}</h6>

        {/*    role     */}
        <h6 className={"text-sm font-medium leading-3 "}>{role}</h6>
        {/*    course     */}
        <span className={"font-medium text-xs leading-3 text-[#092A59A8]"}>
          {course}
        </span>

        {/*    desc     */}
        {/*<p className={"font-medium text-sm"}>*/}
        {/*  Dr. Grace is a graduate of NPBC and has been a lecturer for 15 years*/}
        {/*  training Bible scholars in matters of theology.*/}
        {/*</p>*/}
        {/*    Icons    */}
        {/*<div*/}
        {/*  className={"flex w-full gap-4 text-c-blue my-3 mx-auto md:mx-0"}*/}
        {/*  data-aos="fade-left"*/}
        {/*>*/}
        {/*  /!*    Linked In    *!/*/}
        {/*  <GrLinkedin className={"text-xl"} />*/}
        {/*  /!*    Twitter    *!/*/}
        {/*  <FaTwitter className={"text-xl"} />*/}
        {/*  /!*    Facebook    *!/*/}
        {/*  <MdOutlineFacebook className={"text-xl"} />*/}
        {/*  /!*    Instagram    *!/*/}
        {/*  <FaInstagram className={"text-xl"} />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default LeadershipItem;
