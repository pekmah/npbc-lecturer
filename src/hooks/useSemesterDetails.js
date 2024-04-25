import { getSemesterDetails } from "@/services/AuthServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useError from "./useError";

const useSemesterDetails = () => {
  /**
   * Query to fetch user's semester details
   */
  const query = useQuery({
    queryKey: ["semester"],
    queryFn: getSemesterDetails,
  });

  return query;
};

export default useSemesterDetails;
