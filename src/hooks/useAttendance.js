import { getAttendance, getSemesterUnits } from "@/services/AttendanceServices";
import { useQuery } from "@tanstack/react-query";
import useSemesterDetails from "./useSemesterDetails";
import { useSession } from "next-auth/react";

const useAttendance = () => {
  const { data: semester } = useSemesterDetails();
  const session = useSession();

  /**
   * Query to fetch user's fee balances
   */
  const query = useQuery({
    queryKey: ["attendance"],
    queryFn: () => getAttendance(session.data?.user?.id, semester?.id),
    enabled: !!(semester?.id && session.data?.user?.id),
  });

  const allUnitsQuery = useQuery({
    queryKey: ["all_units"],
    queryFn: () => getSemesterUnits(semester?.id),
    enabled: !!semester?.id,
  });

  const getTotalClasses = () => {
    if (allUnitsQuery.data?.data) {
      let total = 0;
      const units = allUnitsQuery.data?.data;

      //get semester for that user for that unit.
      const sem = semester;

      for (let i = 0; i < units.length; i++)
        total += units[i].total_classes[`sem:${sem?.id}`];

      return total;
    }
    return 0;
  };

  return { query, allUnitsQuery, getTotalClasses };
};

export default useAttendance;
