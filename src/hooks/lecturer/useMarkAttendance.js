import { extractErrorMessages } from "@/helpers/helpers";
import unitServices from "@/services/lecturer/UnitServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";

const useMarkAttendance = (row) => {
  const session = useSession();
  const queryClient = useQueryClient();

  const { isPending, isSuccess, isError, error, mutate } = useMutation({
    mutationKey: ["open_attendance"],
    mutationFn: () =>
      unitServices.openUnitAttendance({ unit: row.original.id }),
  });

  /**
   * Query to fetch open attendances
   */
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["open_attendance", session?.data?.user?.id],
    queryFn: () => unitServices.getUnitsToOpenAttendanceFor(),
    enabled: !!session?.data?.user?.id,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Unit attendance form opened.", {
        id: `open_attendance_${row.original.id}`,
      });
      queryClient.invalidateQueries(["units", session?.data?.user?.id]);
      refetch();
    } else if (isError) {
      const message = extractErrorMessages(error?.response?.data);

      toast.error("Unit attendance opening error. " + message, {
        id: `open_attendance_${row.original.id}`,
      });
    } else if (isPending) {
      toast.loading("Opening attendance.", {
        id: `open_attendance_${row.original.id}`,
      });
    }
  }, [
    isSuccess,
    isError,
    isPending,
    error,
    row.original.id,
    queryClient,
    session?.data?.user?.id,
    refetch,
  ]);

  const openUnits = useMemo(
    () => data?.map(({ unit }) => ({ id: unit?.id, unit: unit?.name })),
    [data]
  );

  const isUnitOpen = useMemo(
    () => openUnits?.some((unit) => unit.id === row.original.id),
    [openUnits, row.original.id]
  );

  const {
    isPending: attendancePending,
    isSuccess: attendanceSuccess,
    isError: attendanceIsError,
    error: attendanceError,
    mutate: closeAttendanceMutation,
  } = useMutation({
    mutationKey: ["close_attendance"],
    mutationFn: () => unitServices.closeUnitAttendance(row.original.id),
  });

  useEffect(() => {
    if (attendanceSuccess) {
      toast.success("Unit attendance form closed.", {
        id: `close_attendance_${row.original.id}`,
      });
      queryClient.invalidateQueries(["units", session?.data?.user?.id]);
      refetch();
    } else if (attendanceIsError) {
      const message = extractErrorMessages(attendanceError?.response?.data);

      toast.error("Unit attendance close error. " + message, {
        id: `close_attendance_${row.original.id}`,
      });
    } else if (attendancePending) {
      toast.loading("Closing attendance.", {
        id: `close_attendance_${row.original.id}`,
      });
    }
  }, [
    attendanceError?.response?.data,
    attendanceIsError,
    attendancePending,
    attendanceSuccess,
    queryClient,
    refetch,
    row.original.id,
    session?.data?.user?.id,
  ]);

  return {
    openUnits,
    isUnitOpen,
    mutate: isUnitOpen ? closeAttendanceMutation : mutate,
    isFetching: isFetching || attendancePending || isPending,
  };
};

export default useMarkAttendance;
