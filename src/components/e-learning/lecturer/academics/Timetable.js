import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Timetable = () => {
  return (
    <div className={"flex-2"}>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Semester Timetable
      </h5>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>
                Diploma in Theology Studies
              </h6>
              <h6 className={"text-sm"}>Results for Year 2 Semester 2</h6>
            </div>

            <Button
              className={
                "text-xs text-white bg-c-blue border border-c-blue font-light gap-2"
              }
              variant={"filled"}
            >
              Download Results
              <LiaDownloadSolid className={"text-lg"} />
            </Button>
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
                    className=" text-[13px] text-gray-600 py-5 border-r border-gray-100"
                  >
                    {res[cKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Timetable;

const titles = [
  {
    name: "Time",
    className: "",
  },
  {
    name: "Monday",
    className: "",
  },
  {
    name: "Tuesday",
    className: "",
  },
  {
    name: "Wednesday",
    className: "",
  },
  {
    name: "Thursday",
    className: "",
  },
  {
    name: "Friday",
    className: "",
  },
];

const results = [
  {
    code: "8:00AM - 10:00AM",
    mon: "",
    tue: "SIT 101 Room 3A",
    wed: " ",
    thur: "SIT 101 Room 3A",
    fri: "",
  },
  {
    code: "10:00AM - 12:00PM",
    mon: "SIT 101 Room 3A",
    tue: "",
    wed: "SIT 101 Room 3A",
    thur: "",
    fri: "ECT 202 Room 3A",
  },
  {
    code: "02:00PM - 04:00PM",
    mon: "",
    tue: "SIT 101 Room 3A",
    wed: " ",
    thur: "SIT 101 Room 3A",
    fri: "",
  },
  {
    code: "04:00PM - 06:00PM",
    mon: "SIT 101 Room 3A",
    tue: "",
    wed: "SIT 101 Room 3A",
    thur: "",
    fri: "ECT 202 Room 3A",
  },
];
