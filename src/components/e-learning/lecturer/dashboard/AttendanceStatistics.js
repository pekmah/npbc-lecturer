import React from "react";
import { StatisticsSvg } from "@/assets/icons";
import SectionedCard from "@/components/e-learning/SectionedCard";

const AttendanceStatistics = () => {
  return (
    <div
      className={
        "col-span-1 my-4 border border-gray-200 rounded-xl items-center"
      }
    >
      <div className={"px-5 py-3"}>
        <div className={"flex_row justify-between"}>
          <div className={"text-gray-700 "}>
            <div
              className={
                "bg-gray-100 rounded-full flex_row-center h-16 w-16 mb-3"
              }
            >
              <StatisticsSvg />
            </div>
            <h6 className={"font-medium text-15 mb-3 text-c-red"}>
              Class Attendance Statistics
            </h6>

            <p className={"text-13"}>92% Lectures attended</p>

            <SectionedCard
              card1Title={"Complete Classes"}
              card1Desc={"44 Lectures"}
              card2Title={"Classes Attended"}
              card2Desc={"40 Lectures"}
              cardsClassName={"h-28"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStatistics;
