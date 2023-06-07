/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CouseItem from "@/components/modal/application/pages/select_course/CouseItem";
import { FiChevronDown } from "react-icons/fi";

const AvailableCourses = ({
  current,
  setCurrent,
  chosenCourse,
  setChosenCourse,
}) => {
  // handles toggle's collapse visibility
  const [isOpen, setIsOpen] = useState(false);

  /**
   * @desc renders courses on small screen
   * @returns {JSX.Element}
   */
  const renderSmallScreen = () => {
    return (
      <ul className={"py-2 flex flex-col gap-2 md:gap-4"}>
        {Object.keys(courses).map((item, index) => (
          <li
            key={index}
            className={"cursor-pointer"}
            onClick={() => setCurrent(item)}
          >
            {/*collapsible courses toggle*/}
            <div
              className={`py-2 focus:outline-none text-md font-semibold flex justify-between ${
                current.toLowerCase() === item?.toLowerCase()
                  ? "text-c-blue"
                  : "text-gray-500"
              }`}
            >
              <span className={"capitalize "}>{item}</span>
              {/*    icon*/}
              <FiChevronDown
                className={`text-c-red text-2xl ${
                  current.toLowerCase() === item?.toLowerCase()
                    ? "-rotate-180"
                    : "rotate-0"
                }`}
              />
            </div>

            {/*  courses wrapper*/}

            <div
              className={` bg-gray-100 flex flex-col gap-2 overflow-hidden  duration-500 ${
                current.toLowerCase() === item?.toLowerCase()
                  ? "h-auto p-2"
                  : "h-[0px]"
              }`}
            >
              {courses[item]?.map((course, cKey) => (
                <CouseItem
                  key={cKey}
                  className={`duration-500 ${
                    current.toLowerCase() === item?.toLowerCase()
                      ? "scale-100"
                      : "scale-0"
                  }`}
                  title={course?.title}
                  mode={course?.mode}
                  date={course?.date}
                  handleClick={() =>
                    setChosenCourse(course?.title?.toLowerCase())
                  }
                  isCurrent={chosenCourse === course?.title?.toLowerCase()}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className={"flex-1 flex flex-col"}>
      <h6 className={"c-medium font-bold text-c-blue px-3"}>
        Program of choice
      </h6>

      <div className={"md:px-3 md:border-l border-l-gray-400 my-4 flex-1"}>
        {renderSmallScreen()}
      </div>
    </div>
  );
};

export default AvailableCourses;

/**
 * @type Object
 * list of courses grouped by category
 */
const courses = {
  undergraduate: [
    {
      title: "Bachelor of Arts in Bible & Theology",
      mode: "Regular",
      date: "1st Feb 2024",
    },
    {
      title: "Bachelor of Arts in Christian Education",
      mode: "Regular",
      date: "1st Feb 2024",
    },
    {
      title: "Bachelor of Arts in Intercultural Studies",
      mode: "Regular",
      date: "1st Feb 2024",
    },
  ],
  diploma: [
    {
      title: "Diploma in Christian Ministry",
      mode: "Regular",
      date: "1st Feb 2024",
    },
    {
      title: "Diploma in Bible and Theology",
      mode: "Regular",
      date: "1st Feb 2024",
    },
    {
      title: "Diploma in Counseling Psychology",
      mode: "Regular",
      date: "1st Feb 2024",
    },
  ],
  certificate: [
    {
      title: "Certificate in Christian Ministry",
      mode: "Regular",
      date: "1st Feb 2024",
    },
    {
      title: "Certificate in Youth Minstry",
      mode: "Regular",
      date: "1st Feb 2024",
    },
    {
      title: "Certificate in Women Ministry",
      mode: "Regular",
      date: "1st Feb 2024",
    },
  ],
};
