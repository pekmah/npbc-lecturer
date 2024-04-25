import { useQuery } from "@tanstack/react-query";

import { getFees } from "@/services/FeeServices";

const useFees = () => {
  /**
   * Query to fetch user's fee balances
   */
  const query = useQuery({
    queryKey: ["fees"],
    queryFn: getFees,
  });

  return query;
};

export default useFees;
