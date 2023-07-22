import { Button } from "@/components/general";
import React from "react";
import { useRouter } from "next/router";

const Intakes = ({ data }) => {
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

          <p className="text-sm mt-3" data-aos="fade-up-left">
            {data?.body}
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
};

export default Intakes;
