import React from "react";
import RightBranchItem from "@/components/about/history/RightBranchItem";
import LeftBranchItem from "@/components/about/history/LeftBranchItem";

const MileStones = () => {
  return (
    <div>
      <h6 className={"c-large font-semibold text-center mb-2"}>
        Our Milestones
      </h6>

      {/*    Milestone Tree     */}
      <div className={"hidden md:flex "}>
        {/*    Left Branches    */}
        <div className={"flex flex-col flex-1"}>
          {/*Empty */}
          <div className={"h-28"} />

          <LeftBranchItem
            title={"Association with Global University"}
            date={"2005"}
            desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
          />

          <div className={"h-28"} />

          <LeftBranchItem
            title={"Accreditation with TVETA"}
            date={"2018"}
            desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
          />
        </div>
        {/*    Line     */}
        <div className={"w-1 bg-white h-auto"} />
        {/*    Right Branches   */}
        <div className={"flex flex-col flex-1"}>
          <RightBranchItem
            title={"Founded"}
            date={"1967"}
            desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
          />

          <div className={"h-28"} />

          <RightBranchItem
            title={"50TH Anniversary"}
            date={"2017"}
            desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
          />

          <div className={"h-28"} />

          <RightBranchItem
            title={"Quality Assuarance with Tveta"}
            date={"2023"}
            desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
          />
        </div>
      </div>

      <div className={"flex md:hidden flex-col gap-y-8"}>
        <RightBranchItem
          title={"Founded"}
          date={"1967"}
          desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
        />
        <LeftBranchItem
          title={"Association with Global University"}
          date={"2005"}
          desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
        />

        <RightBranchItem
          title={"50TH Anniversary"}
          date={"2017"}
          desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
        />

        <LeftBranchItem
          title={"Accreditation with TVETA"}
          date={"2018"}
          desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
        />

        <RightBranchItem
          title={"Quality Assuarance with Tveta"}
          date={"2023"}
          desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
        />
      </div>
    </div>
  );
};

export default MileStones;
