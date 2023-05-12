/* eslint-disable @next/next/no-img-element */
import React from "react";
import Floater from "./Floater";
import SideNav from "./SideNav";
import { Button } from "@/components/general";
import QualityItem from "./QualityItem";
import Exegesis from "./icons/exegesis";
import Tutors from "./icons/tutors";
import Basics from "./icons/basics";
import Affordable from "./icons/affordable";

const Statistics = () => {
  return (
    <div className="bg-white p-4 md:p-10 relative">
      {/*Floater */}
      <Floater />

      <div className="h-28" />

      <div className="flex">
        <SideNav />

        <div className=" py-2 md:w-3/4 text-primary">
          {/* Course title */}
          <div className=" mx-auto flex flex-col md:flex-row text-center md:text-left gap-6 mb-4">
            {/* Image */}
            <div className="md:flex-[0.3] flex justify-center ">
              <div
                className={
                  "h-40 w-40 rounded-full flex-0.4 relative overflow-hidden"
                }
              >
                <img
                  src={"/images/home/course-1.jpg"}
                  alt={"statistics-1"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#A225317A]" />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl md:c-h6  leading-8 md:leading-10 font-semibold text-c-blue">
                Bachelor of Art in Bible and Theology
              </h3>
              {/*subtext */}
              <div className="flex justify-between md:justify-start gap-12 mt-3">
                <h3 className="c-large leading-10 font-semibold text-c-blue">
                  BBL 777
                </h3>

                <Button
                  className={
                    "flex justify-center text-c-blue items-center gap-1 text-sm bg-bg-blue font-semibold"
                  }
                >
                  <span>Intake ongoing</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Course Brief */}
          <div className="mt-4 px-0 md:px-5">
            {/* title */}
            <h3 className="c-h6 text-xl md:text-2xl leading-8 md:leading-10 font-semibold text-c-blue mb-2 md:mb-4">
              Course Brief
            </h3>

            {/* description */}
            <div className="text-c-blue">
              <p>
                {" "}
                The Bachelor of Arts in Bible and Theology program at NPBC is
                designed for church ministers and administrators who want to
                deepen their knowledge of the Bible, theology, and ministry.
                This program has been offered since 1996 and is currently
                offered both virtually and in person, providing students with
                the flexibility to study in a way that fits their lifestyle.
              </p>

              <p className="font-medium my-4">
                What you will love about this course
              </p>

              <p>
                The course lasts for 4 years if the student does not have a
                diploma in theology related course or 2 years when the student
                has studied such a course before. The course includes 120 credit
                hours. This applies to all undergraduate courses.
              </p>
            </div>

            {/* What you'll love */}
            <div className="text-c-blue">
              <p className="font-medium my-6">
                What you will love about this course
              </p>

              {/* flex */}
              <div className="flex justify-between md:w-10/12">
                {/* Quality items */}
                <QualityItem title={"Indepth exegesis"} icon={<Exegesis />} />
                <QualityItem title={"Accessible tutors"} icon={<Tutors />} />
                <QualityItem title={"Emphasis on basics"} icon={<Basics />} />
                <QualityItem title={"Affordable"} icon={<Affordable />} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-6" />
    </div>
  );
};

export default Statistics;
