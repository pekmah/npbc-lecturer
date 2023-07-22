import React from "react";
import Mission from "@/components/about/mission/icons/Mission";
import Vision from "@/components/about/mission/icons/Vision";

const Index = ({ data }) => {
  return (
    <section id={"mission"} className={" p-12 flex bg-white text-c-blue"}>
      {/*Side Menu*/}
      <div className={"hidden md:flex w-1/4"} />

      {/*    Main Body    */}
      <div className={" py-2 w-full md:w-3/4"} data-aos="fade-up">
        <h3 className={"c-h7 font-bold text-center md:text-left "}>
          Mission & Vision
        </h3>

        {/*    HStack     */}
        <div
          className={"flex flex-col md:flex-row justify-between gap-10 my-20"}
        >
          {/*    Mission      */}
          <div
            className={"flex flex-col gap-5 items-center"}
            data-aos="fade-up"
          >
            {/*Icon*/}
            <Mission />

            <h6 className={"c-xl font-semibold"}>Our Mission</h6>

            <p className={"c-normal font-medium text-center text-c-blue"}>
              {
                data?.filter(
                  (item) => item?.title?.toLowerCase() === "our mission"
                )[0]?.body
              }
            </p>
          </div>
          {/*    Vision   */}
          <div
            className={"flex flex-col items-center gap-5"}
            data-aos="fade-up"
          >
            {/*Icon*/}
            <Vision />

            <h6 className={"c-xl font-semibold"}>Our Vision</h6>

            <p className={"c-normal font-medium text-center text-c-blue "}>
              {
                data?.filter(
                  (item) => item?.title?.toLowerCase() === "our vision"
                )[0]?.body
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
