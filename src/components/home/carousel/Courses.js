import React from "react";
import CourseItem from "./CourseItem";
import Line from "./Line";
import Link from "next/link";

const Courses = () => {
  return (
    <div className="hidden md:flex">
      {/* courses */}
      <CourseItem
        style={{
          background:
            " linear-gradient(0deg, rgba(162, 37, 49,1), rgba(162, 37, 49,1)), url(/images/home/course-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        to={"/courses#undergraduate"}
        line={<Line />}
      >
        <Link href={"/courses#undergraduate"}>Postgraduate Programs</Link>
      </CourseItem>

      <CourseItem
        style={{
          background:
            " linear-gradient(0deg, rgba(162, 37, 49,1), rgba(162, 37, 49,1)), url(/images/home/course-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        to={"/courses#undergraduate"}
        line={<Line />}
      >
        <Link href={"/courses#undergraduate"}>Undergraduate Programs</Link>
      </CourseItem>

      <CourseItem
        style={{
          background:
            " linear-gradient(0deg, rgba(162, 37, 49,1), rgba(162, 37, 49,1)), url(/images/home/course-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        to={"/courses#diploma"}
        line={<Line />}
      >
        <Link href={"/courses#diploma"}>Diploma Programs</Link>
      </CourseItem>

      <CourseItem
        style={{
          background:
            " linear-gradient(0deg, rgba(162, 37, 49,1), rgba(162, 37, 49,1)), url(/images/home/course-4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        to={"/courses#certificate"}
      >
        <Link href={"/courses#certificate"}>Certificate Programs</Link>
      </CourseItem>
    </div>
  );
};

export default Courses;
