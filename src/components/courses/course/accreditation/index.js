import React from "react";

const CourseAccreditation = () => {
  return (
    <div className={"bg-c-blue py-10 flex"}>
      <div className={"w-1/4 hidden md:flex"} />

      <div className={"md:w-3/4 text-white"}>
        {/*    title    */}
        <h5 className={"c-h7 mb-4 px-4 md:px-0"}>Course Accreditation</h5>

        {/*    img & description*/}
        <div className={"flex flex-col md:flex-row px-4 md:px-0 gap-4 my-2"}>
          {/*    Image 1   */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/courses/course/accreditation-1.png"
            alt="accreditation"
            className={"object-contain h-auto"}
          />
          {/*    Description      */}
          <p>
            NPBC is an approved institution to offer undergraduate programs by
            the Commission for University Education. Accreditation happened when
            it was chartered but other courses added later are accredited
            individually.
            <br />
            <br />
            <br />
            In 2017, the Nairobi Pentecostal Bible College was officially
            recognized by the commission as a credible institution to train
            graduate students with a Bachelor of Arts in Bible and Theology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseAccreditation;
