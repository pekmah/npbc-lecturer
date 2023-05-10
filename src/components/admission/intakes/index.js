import {Button} from '@/components/general'
import React from 'react'
import {useRouter} from "next/router";

const Intakes = () => {
    const router = useRouter();
    
    return (
      <section id={"intakes"} className="flex flex-col md:flex-row bg-[#fff]">
        <div className="flex-1 h-[550px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-full object-cover"
            src="/images/admission/intakes-1.webp"
            alt="intakes-1"
          />
        </div>

        <div className="flex-1 text-black flex bg-white py-6 md:py-16">
          <div className="w-11/12 md:w-[80%] mx-auto text-c-blue ">
            <h3 className="c-h7 font-semibold mb-4" data-aos="fade-up-left">
              Our Intakes
            </h3>

            <span className="text-sm" data-aos="fade-up-left">
              The February intake is now open
            </span>
            <br />

            <p className="text-sm mt-3" data-aos="fade-up-left">
              We conduct intakes twice an year in the months of February and
              September for all our courses
            </p>

            <div className="my-8" data-aos="fade-up-left">
              <h5 className="c-medium font-bold">Intake closes in</h5>

              <div className="flex gap-5 text-center">
                <div className="flex flex-col gap-1 my-3">
                  <span className="text-sm text-c-blue">Days</span>
                  <h3 className="c-h6 text-c-red">10</h3>
                </div>

                <div className="flex flex-col gap-1 my-3">
                  <span className="text-sm text-c-blue">Hours</span>
                  <h3 className="c-h6 text-c-red">12</h3>
                </div>

                <div className="flex flex-col gap-1 my-3">
                  <span className="text-sm text-c-blue">Minutes</span>
                  <h3 className="c-h6 text-c-red">50</h3>
                </div>

                <div className="flex flex-col gap-1 my-3">
                  <span className="text-sm text-c-blue">Seconds</span>
                  <h3 className="c-h6 text-c-red">22</h3>
                </div>
              </div>
            </div>

            <p className="text-sm" data-aos="fade-up-left">
              Our application process is clear and simple so you can apply from
              anywhere.
            </p>

            <div className="flex gap-4 mt-8" data-aos="fade-up">
              <Button
                onClick={() => router.push("?apply=true")}
                className={"bg-c-red text-white font-semibold text-xs w-32"}
              >
                Apply Now
              </Button>

              <Button
                className={
                  "bg-none h-8 text-xs text-[#909090] flex items-center gap-2 font-semibold px-5  justify-center"
                }
              >
                View Courses first
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Intakes
