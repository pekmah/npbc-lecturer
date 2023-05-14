import React from "react";
import { Button } from "@/components";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import ProgramChoice from "@/components/modal/application/pages/select_course/ProgramChoice";
import AvailableCourses from "@/components/modal/application/pages/select_course/AvailableCourses";
import CourseDetails from "@/components/modal/application/pages/select_course/CourseDetails";

const Courses = ({ handleCloseModal, switchToPrevious, switchToNext }) => {
  return (
    <div className={"text-c-blue w-full"}>
      {/*    Details      */}
      <div className={"flex"}>
        <Button className={"p-3"} onClick={switchToPrevious}>
          <BsArrowLeft className={"text-2xl"} />
        </Button>
        <div className={"flex items-center flex-col flex-1 text-center"}>
          <h4 className={"text-2xl md:c-h5 font-bold md:w-2/3 mx-auto"}>
            Here is everything you need to complete your application
          </h4>

          <div
            className={
              "flex items-center gap-4 mt-8 h-10 border-b border-gray-400 md:w-1/3"
            }
          >
            <BsSearch className={"text-md text-gray-500"} />

            <input
              type="text"
              className={"flex-1 h-full bg-inherit "}
              placeholder={"Search"}
            />
          </div>
        </div>
        <Button className={"p-3"} onClick={switchToNext}>
          <BsArrowLeft className={"text-2xl rotate-180"} />
        </Button>
      </div>

      <div className={"flex gap-5 py-8 border-b border-gray-400"}>
        {/*    Program of choice  */}
        <ProgramChoice />

        {/*Available course*/}
        <AvailableCourses />

        {/*    course details   */}
        <CourseDetails />
      </div>

      {/*    buttons  */}
      <div className={"flex py-3"}>
        <Button className={"text-sm text-gray-500 font-bold"}>
          Need Help?
        </Button>
        <div className={"flex gap-4 justify-end flex-1"}>
          <Button
            onClick={handleCloseModal}
            className={
              "bg-c-red-pale text-c-red py-3 px-14 text-sm font-semibold"
            }
            text={"close"}
          />
          <Button
            className={
              "bg-c-red outline-none text-white py-3 px-12 text-sm font-semibold"
            }
            text={"Continue"}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
