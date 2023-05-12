import React from "react";
import Intake from "@/components/about/leadership/Intake";

const CourseIntake = () => {
  return (
    <div className={"md:py-6 bg-gray-100 text-white flex"}>
      <div className={"w-1/4 hidden md:flex"} />
      <div className={"md:w-3/4"}>
        {/*    Intake  */}
        <Intake />
      </div>
    </div>
  );
};

export default CourseIntake;
