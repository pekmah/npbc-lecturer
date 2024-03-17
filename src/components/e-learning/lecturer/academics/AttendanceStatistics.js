import React from "react";
import { StatisticsSvg } from "@/assets/icons";
import SectionedCard from "@/components/e-learning/SectionedCard";

const AttendanceStatistics = () => {
  return (
    <div className={"flex-1 dashboard_card px-8 flex_col gap-5 py-8"}>
      <div className={"flex gap-3 items-center"}>
        <div className={"bg-gray-100 rounded-full p-5 "}>
          <StatisticsSvg />
        </div>

        <div className={"flex-1 flex_col justify-center"}>
          <h6 className={"text-c-red text-lg font-semibold mb-1"}>
            Your Attendance Statistics
          </h6>

          <h6 className={"text-base"}>92% Lectures attended</h6>
        </div>
      </div>

      <SectionedCard
        card1Title={"Complete Classes this Semester"}
        card1Desc={"44 Lectures"}
        card2Title={"Classes attended"}
        card2Desc={"42 Lectures"}
        cardsClassName={"h-24"}
        containerClassName={"mt-0"}
      />
    </div>
  );
};

export default AttendanceStatistics;
