import React from "react";
import { Button } from "../general";

const Footer = ({ showModal }) => {
  return (
    <div className="text-white ">
      {/* image */}
      <div
        className="text-center h-48 c-h7 md:c-h3 p-3 flex flex-col gap-5 items-center justify-center"
        style={{
          background:
            " linear-gradient(0deg, rgba(9, 42, 89, 0.66), rgba(9, 42, 89, 0.66)), url(/images/footer/npbc-footer.webp)",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      >
        <p className="leading-8 md:leading-10 text-white" data-aos="fade-up">
          Become a student at <br /> NPBC
        </p>

        <Button
          onClick={showModal}
          className={"bg-white text-c-blue c-normal w-44 h-10 font-semibold"}
          data-aos="fade-left"
        >
          Apply Today
        </Button>
      </div>
      {/* links */}
      <div className="flex flex-col gap-y-5 md:flex-row bg-c-blue text-sm justify-evenly py-14 text-white">
        <div className={"flex flex-1  justify-around md:justify-around"}>
          <NPBC />

          <Explore />
        </div>

        <div className={"flex flex-1  justify-around md:justify-around"}>
          <QuickLinks />

          <Research />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const NPBC = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">NPBC</h6>
    {/* Location */}
    <div className="block leading-6">
      <p className="font-semibold">Location:</p>
      <p>Garden Estate Off Thika Road Office</p>
    </div>

    {/* Hours */}
    <div className="block leading-6">
      <p className="font-semibold">Hours:</p>
      <p>8.00am - 5:00pm</p>
    </div>

    {/* Telephone */}
    <div className="block leading-6">
      <p className="font-semibold">Telephone:</p>
      <p>0754 569 687</p>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <p className="font-semibold">Email:</p>
      <p>admin@npbc.co.ke</p>
    </div>
  </div>
);

const Explore = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">Explore</h6>
    {/* Location */}
    <div className="block leading-6">
      <a href="">Community outreach</a>
    </div>

    {/* Hours */}
    <div className="block leading-6">
      <a href="">Staff and Faculty</a>
    </div>

    {/* Telephone */}
    <div className="block leading-6">
      <a href="">Downloads</a>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <a href="">Social Media</a>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <a href="">Employment</a>
    </div>
  </div>
);

const QuickLinks = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">QUICK LINKS</h6>
    {/* Location */}
    <div className="block leading-6">
      <a>Admissions</a>
    </div>

    {/* Hours */}
    <div className="block leading-6">
      <a>Student Life</a>
    </div>

    {/* Telephone */}
    <div className="block leading-6">
      <a>Staff Mail</a>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <a>NPBC Online</a>
    </div>
  </div>
);

const Research = () => (
  <div className={"flex-1 md:flex-[0.5] pl-5 "} data-aos="fade-up">
    <h6 className="c-large mb-4">RESEARCH</h6>
    {/* Location */}
    <div className="block leading-6">
      <a>NPBC Online</a>
    </div>

    {/* Hours */}
    <div className="block leading-6">
      <a>Reflection Blog</a>
    </div>

    {/* Telephone */}
    <div className="block leading-6">
      <a>Community Engagement</a>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <a href={"/about/news"}>News and Events</a>
    </div>

    {/* Email */}
    <div className="block leading-6">
      <a>Research Projects</a>
    </div>
  </div>
);
