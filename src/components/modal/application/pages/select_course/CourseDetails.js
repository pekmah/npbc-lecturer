import React from "react";
import { Button } from "@/components";
import { AiOutlineDownload } from "react-icons/ai";

const CourseDetails = () => {
  return (
    <div className={"flex-1 hidden md:flex flex-col"}>
      <h6 className={"c-medium font-bold text-c-blue px-3"}>Course Details</h6>

      <div className={"px-3 border-l border-l-gray-400 my-4 flex-1"}>
        <ul className={"py-3 flex flex-col "}>
          <li className={"py-2 focus:outline-none text-sm flex gap-4 "}>
            <p className={"text-sm font-semibold flex-[0.3]"}>Course:</p>
            <p className={"text-sm flex-1"}>Diploma in Bible and Theology</p>
          </li>

          <li className={"py-2 focus:outline-none text-sm flex gap-4 "}>
            <p className={"text-sm font-semibold flex-[0.3]"}>Duration:</p>
            <p className={"text-sm flex-1"}>2 years</p>
          </li>

          <li className={"py-2 focus:outline-none text-sm flex gap-4 "}>
            <p className={"text-sm font-semibold flex-[0.3]"}>Frequency</p>
            <p className={"text-sm flex-1"}>5 lessons per week:</p>
          </li>

          <li className={"py-2 focus:outline-none text-sm flex gap-4 "}>
            <p className={"text-sm font-semibold flex-[0.3]"}>Length</p>
            <p className={"text-sm flex-1"}>2.5 hours</p>
          </li>
        </ul>

        <Button
          className={
            "flex justify-between border-b border-gray-300 rounded-none py-2 w-full items-center"
          }
        >
          <span className={"font-semibold "}>Course Outline</span>

          <AiOutlineDownload className={"text-c-red text-lg"} />
        </Button>

        <Button
          className={
            "flex justify-between border-b border-gray-300 rounded-none py-2 w-full items-center mt-2"
          }
        >
          <span className={"font-semibold "}>Fees Details</span>

          <AiOutlineDownload className={"text-c-red text-lg"} />
        </Button>
      </div>
    </div>
  );
};

export default CourseDetails;
