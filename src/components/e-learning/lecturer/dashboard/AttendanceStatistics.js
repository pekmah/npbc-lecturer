import React from "react";
import { StatisticsSvg } from "@/assets/icons";
import SectionedCard from "@/components/e-learning/SectionedCard";
import unitServices from "@/services/lecturer/UnitServices";
import { useQuery } from "@tanstack/react-query";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";

const AttendanceStatistics = () => {
  /**
   * Query to fetch attendance statistics for the semester
   */
  const { data, isPending } = useQuery({
    queryKey: ["attendance"],
    queryFn: () => unitServices.getAllUnitsAttendance(),
  });
  console.log(data);
  const percentageAttendance = Math.ceil(
    data?.total_attendance / data?.total_classes
  );

  return (
    <div
      className={
        "col-span-1 my-4 border border-gray-200  rounded-xl items-center"
      }
    >
      <div className={"px-5 py-3 w-full"}>
        <div className={"flex_row justify-between"}>
          <div className={"text-gray-700  w-full"}>
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

            <p className={"text-13"}>
              {percentageAttendance || 0}% Lectures attended
            </p>

            {/* <SkeletonWrapper isLoading={isPending}> */}
            <SectionedCard
              card1Title={"Classes Attended"}
              card1Desc={`${data?.total_attendance ?? 0} Lecture(s)`}
              card2Title={"Classes Missed"}
              card2Desc={`${
                data?.total_classes - data?.total_attendance ?? 0
              } Lecture(s)`}
              cardsClassName={"h-24"}
            />
            {/* </SkeletonWrapper> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStatistics;
