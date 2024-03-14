import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MarkAttendance = () => {
  return (
    <div
      className={
        "col-span-1 my-4 border border-gray-200 rounded-xl items-center"
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
          {results?.map((res, ind) => (
            <TableRow key={ind} className={"border-b border-gray-100"}>
              {Object.keys(res)?.map((cKey, index) => (
                <TableCell
                  key={index}
                  className=" text-[13px] text-gray-600 py-5"
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

const results = [
  {
    unit: "Church History UCU 202",
    actions: (
      <div className={"flex_row gap-2"}>
        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light p-1 h-8 px-3"
          }
          variant={"outline"}
        >
          Present
        </Button>

        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light py-0 px-1 h-8 px-3"
          }
          variant={"outline"}
        >
          Absent
        </Button>
      </div>
    ),
  },
  {
    unit: "Church History UCU 202",
    actions: (
      <div className={"flex_row gap-2"}>
        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light p-1 h-8 px-3"
          }
          variant={"outline"}
        >
          Present
        </Button>

        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light py-0 px-1 h-8 px-3"
          }
          variant={"outline"}
        >
          Absent
        </Button>
      </div>
    ),
  },
  {
    unit: "Church History UCU 202",
    actions: (
      <div className={"flex_row gap-2"}>
        <Button
          disabled
          className={
            "text-xs text-c-blue border border-c-blue font-light p-1 h-8 px-3"
          }
          variant={"outline"}
        >
          Present
        </Button>

        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light py-0 px-1 h-8 px-3"
          }
          variant={"outline"}
          disabled
        >
          Absent
        </Button>
      </div>
    ),
  },
  {
    unit: "Church History UCU 202",
    actions: (
      <div className={"flex_row gap-2"}>
        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light p-1 h-8 px-3"
          }
          variant={"outline"}
          disabled
        >
          Present
        </Button>

        <Button
          className={
            "text-xs text-c-blue border border-c-blue font-light py-0 px-1 h-8 px-3"
          }
          disabled
          variant={"outline"}
        >
          Absent
        </Button>
      </div>
    ),
  },
];
