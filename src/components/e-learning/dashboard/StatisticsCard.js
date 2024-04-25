import { StatisticsSvg } from "@/assets/icons";
import useAttendance from "@/hooks/useAttendance";
import { calculatePercentage } from "@/lib/utils";

const StatisticsCard = () => {
  const {
    query: { data },
    getTotalClasses,
  } = useAttendance();

  return (
    <div className={"col-span-2 dashboard_card px-8 flex_col gap-5"}>
      <div className={"flex gap-3 items-center"}>
        <div className={"bg-gray-100 rounded-full p-5 "}>
          <StatisticsSvg />
        </div>

        <div className={"flex-1 flex_col justify-center"}>
          <h6 className={"text-c-red text-base font-semibold mb-1"}>
            Class Attendance Statistics
          </h6>

          <h6 className={"text-sm"}>
            {calculatePercentage(data?.data?.length || 0, getTotalClasses())}%
            lectures attended
          </h6>
        </div>
      </div>

      <div className={"rounded-xl flex_row overflow-hidden"}>
        <div
          className={
            "bg-green-600 h-20 flex-1 flex_col gap-3 justify-center px-10 text-sm"
          }
        >
          <h6 className={"text-white"}>Classes attended this Semester</h6>
          <h6 className={"text-white font-medium text-15"}>
            {data?.data?.length || 0} Lectures
          </h6>
        </div>

        <div
          className={
            "bg-red-600 h-20 flex-1 flex_col gap-3 justify-center px-10 text-sm"
          }
        >
          <h6 className={"text-white"}>Total Semester Lectures</h6>
          <h6 className={"text-white text-15 font-medium"}>
            {getTotalClasses()} Lectures
          </h6>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
