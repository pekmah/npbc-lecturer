import { useEffect, useMemo } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MarkAttendanceActions } from "../../academics/MarkAttendance";
import unitServices from "@/services/lecturer/UnitServices";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import { CTable } from "@/components/general/Table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ConfirmPopup } from "../../general";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import { extractErrorMessages } from "@/helpers/helpers";

const AttendanceView = ({ children, unitName, unitId }) => {
  /**
   * Query to fetch unit attendees
   */
  const {
    data,
    refetch,
    isFetching: isPending,
  } = useQuery({
    queryKey: ["unit", "attendees", unitId],
    queryFn: () => unitServices.fetchUnitAttendees(unitId),
    enabled: !!unitId,
  });

  const attendees = useMemo(
    () =>
      data?.map(({ id, student: { reg_no, name, profile_picture, year } }) => ({
        id,
        reg_no,
        name,
        profile_picture,
        year,
        unitId,
      })),
    [data, unitId]
  );

  return (
    <AlertDialog className={"relative"}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className={"max-w-5xl"}>
        <AlertDialogHeader>
          <AlertDialogTitle className={"text-2xl"}>
            View {unitName} Attendance
          </AlertDialogTitle>
          <AlertDialogDescription className={"py-5"}>
            <SkeletonWrapper isLoading={isPending}>
              <CTable
                columns={attendeesColumns}
                data={attendees || []}
                tableClassName={"border-0"}
                tableHeaderClassName={"bg-gray-50"}
              />
            </SkeletonWrapper>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel
          className={
            "absolute top-5 right-5 border border-gray-500 text-c-blue px-0 py-0 h-10 w-10 flex items-center justify-center rounded-full"
          }
        >
          <IoClose className="w-6 h-6" />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AttendanceView;

const attendeesColumns = [
  {
    accessorKey: "id",
    header: "#",
    cell: (props) => props.row.index + 1,
  },
  {
    accessorKey: "reg_no",
    header: "Reg No",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "Action",
    cell: (props) => <DeleteAttendance {...props} />,
  },
];

const DeleteAttendance = ({ row }) => {
  const queryClient = useQueryClient();

  const { isPending, isSuccess, isError, error, mutate } = useMutation({
    mutationKey: ["delete_attendance"],
    mutationFn: () => unitServices.deleteStudentUnitAttendance(row.original.id),
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success(`${row.original?.name}'s unit attendance deleted.`, {
        id: `open_attendance_${row.original.id}`,
      });
      queryClient.invalidateQueries(["unit", "attendees", row.original.unitId]);
    } else if (isError) {
      const message = extractErrorMessages(error?.response?.data);

      toast.error("Unit attendance deletion error. " + message, {
        id: `open_attendance_${row.original.id}`,
      });
    } else if (isPending) {
      toast.loading("Deleting attendance.", {
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
    row.original.unitId,
    row.original?.name,
  ]);

  return (
    <ConfirmPopup
      title={"Delete Attendance"}
      handleContinue={mutate}
      body={`Are you sure you want to open ${row?.original?.name} attendance?`}
    >
      <MarkAttendanceActions
        isLoading={isPending || isSuccess}
        disabled={isPending || isSuccess}
        isError
        text={isPending ? "Deleting..." : "Delete Attendance"}
      />
    </ConfirmPopup>
  );
};
