import unitServices from "@/services/lecturer/UnitServices";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React from "react";

const useUnit = () => {
  const session = useSession();
  /**
   * Query to fetch user's units
   */
  const query = useQuery({
    queryKey: ["units"],
    queryFn: () => unitServices.getUnits(session?.data?.user?.id),
    enabled: !!session?.data?.user?.id,
  });

  return query;
};

export default useUnit;
