import { BooksSvg, CalendarSvg, TrainingSvg } from "@/assets/icons";
import useSemesterDetails from "@/hooks/useSemesterDetails";
import { useQuery } from "@tanstack/react-query";
import { getSemesterUnits } from "@/services/AttendanceServices";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";

const StatsCards = () => {
  const { data: semester } = useSemesterDetails();

  /**
   * Query to fetch student's semester units
   */
  const { data, isPending: isFetching } = useQuery({
    queryKey: ["units", semester?.id],
    queryFn: () => getSemesterUnits(semester?.id),
    enabled: !!semester?.id,
  });

  const statsData = {
    units: data?.data?.length || 0,
    duration: semester?.weeks || 0,
    semester: semester?.number,
  };

  return (
    <div className={"flex_row w-full gap-5"}>
      {stats?.map(({ icon, title, desc, key }, ind) => (
        <Card
          key={ind}
          icon={icon}
          desc={desc}
          title={statsData[key]}
          isLoading={isFetching}
        />
      ))}
    </div>
  );
};

export default StatsCards;

export const Card = ({ icon, title, desc, isLoading }) => (
  <SkeletonWrapper isLoading={isLoading}>
    <div
      className={
        "p-4 py-6 rounded-2xl border border-gray-200 flex-1 flex_row gap-3 items-center"
      }
    >
      <div className={"bg-gray-100 rounded-full p-4"}>{icon}</div>
      <div>
        <h5 className={"text-c-red text-base font-semibold mb-1"}>{title}</h5>
        <span>{desc} </span>
      </div>
    </div>
  </SkeletonWrapper>
);

const stats = [
  {
    title: "6",
    desc: "Current Semester units",
    icon: <BooksSvg />,
    key: "units",
  },
  {
    title: "3 Months",
    desc: "Semester Length in weeks",
    icon: <CalendarSvg />,
    key: "duration",
  },
  {
    title: "18",
    desc: "Semester",
    icon: <TrainingSvg />,
    key: "semester",
  },
];
