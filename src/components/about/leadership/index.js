import React from "react";
import LeadershipItem from "@/components/about/leadership/LeadershipItem";
import Intake from "@/components/about/leadership/Intake";

const Leadership = () => {
  return (
    <section
      id={"leadership"}
      className={"p-3 md:p-8 flex bg-gray-50 text-c-blue"}
    >
      {/*Side Menu*/}
      <div className={"hidden md:flex w-1/4"} />

      {/*    Main Body    */}
      <div className={" py-2 md:w-3/4"}>
        <h3 className={"c-h7 font-bold"}>College Management</h3>

        <div
          className={
            "my-4 md:my-12 flex flex-col md:flex-row flex-wrap gap-5 md:gap-10"
          }
        >
          {/*Leadership item*/}
          <LeadershipItem
            title={"Rev. Andrew Manyeki"}
            role={" coordinator, Online, Distance and Extension Learning"}
          />
          <LeadershipItem
            image={"/images/about/leadership-billy-4.webp"}
            title={"Prof. Billy"}
            role={" __"}
          />
          <LeadershipItem
            image={"/images/about/leadership-marete-3.webp"}
            title={"Dr. Dedan Marete"}
            role={" __"}
          />
          <LeadershipItem
            image={"/images/about/leadership-kimani-2.webp"}
            title={"Prof. Benard Kimani"}
            role={" __"}
          />
        </div>
        {/*    Intake  */}
        <Intake />
      </div>
    </section>
  );
};

export default Leadership;
