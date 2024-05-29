import { useMemo } from "react";
import { Table } from "@/components/ui/table";
import { MarkAttendanceActions } from "@/components/e-learning/academics/MarkAttendance";
import { useQuery } from "@tanstack/react-query";
import unitServices from "@/services/lecturer/UnitServices";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import { CTable } from "@/components/general/Table";
import { ConfirmPopup } from "../../general";
import { useSession } from "next-auth/react";
import useMarkAttendance from "@/hooks/lecturer/useMarkAttendance";
import AttendanceView from "./AttendanceView";

const MarkAttendance = () => {
  const session = useSession();

  /**
   * Query to fetch units to current lecturer
   */
  const { data: lecUnits, isPending } = useQuery({
    queryKey: ["units", session?.data?.user?.id],
    queryFn: () => unitServices.getUnits(session?.data?.user?.id),
    enabled: !!session?.data?.user?.id,
  });

  const units = useMemo(
    () => lecUnits?.data?.map((unit) => ({ id: unit?.id, unit: unit?.name })),
    [lecUnits?.data]
  );

  return (
    <div
      className={
        "flex-1 my-4 border border-gray-200 rounded-xl items-center mt-16 col-span-2"
      }
    >
      <div className={"px-5 py-3"}>
        <div className={"flex_row justify-between"}>
          <div className={"text-gray-700 "}>
            <h6 className={"font-medium text-15 mb-3 text-c-red"}>
              Open Attendance
            </h6>
            <p className={"text-xs"}>
              Open attendance for the following units, for students to mark
              their attendance.
            </p>
          </div>
        </div>
      </div>

      <SkeletonWrapper isLoading={isPending}>
        <CTable
          columns={markUnitsColumns}
          data={units || []}
          tableClassName={"border-0"}
          tableHeaderClassName={"bg-gray-50"}
        />
      </SkeletonWrapper>
    </div>
  );
};

export default MarkAttendance;

const markUnitsColumns = [
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "openAttendance",
    header: "Open Attendance",
    cell: (props) => <OpenAttendanceAction {...props} />,
  },
];

const OpenAttendanceAction = ({ row }) => {
  const { isUnitOpen, mutate, isFetching } = useMarkAttendance(row);

  return (
    <div className="flex space-x-5">
      <ConfirmPopup
        title={isUnitOpen ? "Close Attendance" : "Open Attendance"}
        handleContinue={mutate}
        body={
          isUnitOpen
            ? `Are you sure you want to close ${row?.original?.unit} attendance?`
            : `Are you sure you want to open ${row?.original?.unit} attendance?`
        }
      >
        <MarkAttendanceActions
          isError={isUnitOpen}
          text={isUnitOpen ? "Close" : "Open"}
          disabled={isFetching}
        />
      </ConfirmPopup>

      <AttendanceView unitId={row?.original?.id} unitName={row?.original?.unit}>
        <MarkAttendanceActions
          className={"bg-c-blue text-white"}
          text={"View"}
          disabled={isFetching}
        />
      </AttendanceView>
    </div>
  );
};

const titles = [
  {
    name: "Monday",
  },
  {
    name: "Mark as",
    className: "",
  },
];

const data = [
  {
    unit: "Church History UCU 202",
    actions: <MarkAttendanceActions />,
  },
  {
    unit: "Church History UCU 202",
    actions: <MarkAttendanceActions />,
  },
  {
    unit: "Church History UCU 202",
    actions: <MarkAttendanceActions />,
  },
  {
    unit: "Church History UCU 202",
    actions: <MarkAttendanceActions />,
  },
];
