import { StatisticsSvg } from "@/assets/icons";
import { useQuery } from "@tanstack/react-query";

import SectionedCard from "@/components/e-learning/SectionedCard";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import unitServices from "@/services/lecturer/UnitServices";

const AttendanceStatistics = () => {
  /**
   * Query to fetch attendance statistics for the semester
   */
  const { data, isPending } = useQuery({
    queryKey: ["attendance"],
    queryFn: () => unitServices.getAllUnitsAttendance(),
  });

  const percentageAttendance = Math.ceil(
    data?.total_attendance / data?.total_classes
  );

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

          <h6 className={"text-base"}>
            {percentageAttendance || 0}% Lectures attended
          </h6>
        </div>
      </div>

      <SkeletonWrapper isLoading={isPending}>
        <SectionedCard
          card1Title={"Classes Attended"}
          card1Desc={`${data?.total_attendance ?? 0} Lecture(s)`}
          card2Title={"Classes Missed"}
          card2Desc={`${
            (data?.total_classes || 0) - (data?.total_attendance || 0) ?? 0
          } Lecture(s)`}
          cardsClassName={"h-24"}
        />
      </SkeletonWrapper>
    </div>
  );
};

export default AttendanceStatistics;
