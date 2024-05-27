import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MarkAttendanceActions } from "@/components/e-learning/academics/MarkAttendance";
import { useQuery } from "@tanstack/react-query";
import unitServices from "@/services/lecturer/UnitServices";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import { CTable } from "@/components/general/Table";

const MarkAttendance = () => {
  /**
   * Query to fetch units to open attendance for
   */
  const { data, isPending } = useQuery({
    queryKey: ["open_attendance"],
    queryFn: () => unitServices.getUnitsToOpenAttendanceFor(),
  });

  const units = useMemo(
    () => data?.map(({ id, unit }) => ({ id, unit: unit?.name })),
    [data]
  );
  console.log("OPEN ATTENDANCE: ", data);
  console.log(units);
  return (
    <div
      className={
        "flex-1 my-4 border border-gray-200 rounded-xl items-center mt-16"
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
          // isLoading={isFetching}
          tableClassName={"border-0"}
          tableHeaderClassName={"bg-gray-50"}
        />

        <Table className={""}>
          {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
        </Table>
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
    cell: ({ row, column }) => {
      console.log("ROW: ", row);
      return <MarkAttendanceActions text={"Open"} />;
    },
  },
];

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
