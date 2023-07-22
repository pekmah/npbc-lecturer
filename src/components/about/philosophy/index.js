import React from "react";
import PhilosophyIcon from "@/components/about/philosophy/icons/philosophy";
import Values from "@/components/about/philosophy/icons/values";

const Philosophy = ({ data }) => {
  return (
    <section
      id={"philosophy"}
      className={" p-5 md:p-12 flex bg-c-red text-white"}
    >
      {/*Side Menu*/}
      <div className={"hidden md:flex w-1/4"} />

      {/*    Main Body    */}
      <div className={" py-2 w-full md:w-3/4"}>
        <h3
          className={"c-h7 font-bold text-center md:text-left"}
          data-aos="fade-up"
        >
          Philosophy & Core Values
        </h3>

        {/*    HStack     */}
        <div
          className={
            "flex flex-col md:flex-row justify-between gap-10 my-6 md:my-20"
          }
        >
          {/*    Mission      */}
          <div
            className={"flex-1 flex flex-col gap-5 items-center"}
            data-aos="fade-up"
          >
            {/*Icon*/}
            <PhilosophyIcon />

            <h6 className={"c-xl font-semibold"}>Our Philosophy</h6>

            <p className={"c-normal leading-6 text-center text-white"}>
              {
                data?.filter(
                  (item) => item?.title?.toLowerCase() === "our philosophy"
                )[0]?.body
              }
            </p>
          </div>
          {/*    Vision   */}
          <div
            className={"flex-1 flex flex-col items-center gap-5"}
            data-aos="fade-up"
          >
            {/*Icon*/}
            <Values />

            <h6 className={"c-xl font-semibold"}>Our Core values</h6>

            <p className={"c-normal  text-center text-white leading-6"}>
              {
                data?.filter(
                  (item) => item?.title?.toLowerCase() === "our core values"
                )[0]?.body
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
