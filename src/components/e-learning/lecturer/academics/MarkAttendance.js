import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MarkAttendanceActions } from "@/components/e-learning/academics/MarkAttendance";

const MarkAttendance = () => {
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
              Mark Attendance
            </h6>
            <p className={"text-xs"}>
              You can only mark attendance for units in the day they are taught,
              during or after the lesson
            </p>
          </div>
        </div>
      </div>

      <Table className={""}>
        {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
        <TableHeader className={"bg-gray-50"}>
          <TableRow className={"text-red-500"}>
            {titles?.map(({ className, name }, key) => (
              <TableHead key={key} className={`text-black py-5 ${className}`}>
                {name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((res, ind) => (
            <TableRow key={ind} className={"border-b border-gray-100"}>
              {Object.keys(res)?.map((cKey, index) => (
                <TableCell
                  key={index}
                  className=" text-[13px] text-gray-600 py-4"
                >
                  {res[cKey]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MarkAttendance;

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
