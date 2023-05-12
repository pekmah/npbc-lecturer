import React from "react";
import TestimonialItem from "@/components/courses/course/testimonials/TestimonialItem";
import Lecturer from "@/components/courses/course/testimonials/Lecturer";

const CourseTestimonials = () => {
  return (
    <div className={"text-c-blue bg-white flex py-6 px-6 md:px-0 md:py-14"}>
      <div className={"w-1/4 hidden md:flex"} />

      <div className={"md:w-3/4"}>
        {/*Testimonials*/}
        <div>
          <h5 className={"text-2xl font-bold md:c-h7"}>
            {" "}
            Hear what <span className={"text-c-red"}>alumni students</span> had
            to say about the course
          </h5>

          <div className={"flex flex-col md:flex-row gap-8 py-6"}>
            {/*    Testimonial items    */}
            <TestimonialItem />
            <TestimonialItem />
          </div>

          <div className={"hidden md:flex gap-8 justify-center "}>
            <div className={"h-3 w-3 rounded-full bg-gray-300"} />
            <div className={"h-3 w-3 rounded-full bg-c-red"} />
            <div className={"h-3 w-3 rounded-full bg-gray-300"} />
          </div>
        </div>

        <div className={"h-10 md:h-24"} />

        {/*    Lecturers    */}
        <div>
          <h5 className={"text-2xl font-bold md:c-h7"}>
            {" "}
            We have a first-class{" "}
            <span className={"text-c-red"}>Lecturers team </span> to handle your
            course
          </h5>

          <div className={"flex flex-col md:flex-row py-5"}>
            <Lecturer />
            <Lecturer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTestimonials;
