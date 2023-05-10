/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Floater from './Floater'

const Statistics = () => {
    return (
      <div className="bg-white p-10 px-4 md:px-10 relative">
        {/*Floater */}
        <Floater />

        <div className="h-24" />

        <div className="flex">
          <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="flex-[0.3] flex justify-center">
              <img
                src={"/images/courses/statistics-1.png"}
                alt={"statistics-1"}
                className={"h-40 flex-0.4"}
              />
            </div>

            <div className="flex-1">
              <h3 className="c-h7 text-[21px] md:text-3xl leading-8 md:leading-10 font-semibold text-c-blue">
                We offer{" "}
                <span className={"text-c-red"}>affordable, accessible </span>{" "}
                and <span className={"text-c-red"}> accredited </span> programs
                to undergraduate, diploma and certificate students
              </h3>
              {/*paragraph */}
              <p className=" mx-auto text-[#092A59A8] leading-8 md:my-4 font-medium">
                Our courses are designed to meet the spiritual, scholarly ,
                leadership and ministry needs of our students so as to transform
                them as agents of change in church and society.
              </p>
            </div>
          </div>
        </div>

        <div className="h-32" />
      </div>
    );
}

export default Statistics
