import { getExamResults, getExamTypes } from "@/services/ExamResultServices";
import { useSession } from "next-auth/react";
import useSemesterDetails from "./useSemesterDetails";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";

const useExamResults = () => {
  const session = useSession();
  const { data: semester } = useSemesterDetails();

  /**
   * Query to fetch exam types
   */
  const examTypesQuery = useQuery({
    queryKey: ["exam_types"],
    queryFn: getExamTypes,
  });

  /**
   * Query to fetch exam results
   */
  const examResultsQuery = useQuery({
    queryKey: ["exam_results", session?.data?.user?.id, semester?.id],
    queryFn: () => getExamResults(session?.data?.user?.id, semester?.id),
    enabled: !!(session?.data?.user?.id && semester?.id),
  });

  const getResults = () => {
    const examTypes = examTypesQuery.data;

    if (examTypes?.length) {
      const examResults = examResultsQuery?.data?.data || [];

      return examResults?.map((result) => {
        const examType = examTypes?.find((type) => type.id === result?.type);
        return {
          unitCode: result?.unit?.id,
          unitName: result?.unit?.name,
          examDate: moment(result?.created_at).format("DD/MM/YYYY HH:mm"),
          type: examType?.name,
          marks: result?.total,
          grade: result?.grade,
        };
      });
    }

    return [];
  };

  return { examTypesQuery, examResultsQuery, getExamResults: getResults };
};

export default useExamResults;
