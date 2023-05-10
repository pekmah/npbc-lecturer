import React from 'react'
import Floater from './Floater'

const HowToApply = () => {
  return (
    <section id={"how-to-apply"} className="bg-white py-10 md:p-10 relative">
      {/*Floater */}
      <Floater />

      <div className="h-14" />

      {/*Title */}
      <h5
        className="c-h6 md:c-h6 text-2xl md:text-3xl text-c-blue text-center"
        data-aos="fade-up"
      >
        How to Apply
      </h5>

      {/*paragraph */}
      <p
        className="w-full md:w-10/12 px-3 md:px-0 mx-auto text-[#092A59A8] c-normal leading-6 my-4 text-center font-medium"
        data-aos="fade-up"
      >
        We offer two modes of application, online application and physical
        application. We simplified our application process to only have what is
        absolutely necessary for the application and at the time of application.
      </p>
    </section>
  );
}

export default HowToApply
