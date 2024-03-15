import React from "react";
import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Timetable = () => {
  return (
    <div className={"col-span-2"}>
      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>
                Your Semester Time table
              </h6>
              <h6 className={"text-sm"}>Timetable for Sep - Dec 2024</h6>
            </div>

            <Button
              className={
                "text-13 border border-c-blue bg-c-blue text-white font-medium gap-2"
              }
              variant={"outline"}
            >
              Download Timetable
              <LiaDownloadSolid className={"text-lg text-white"} />
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
            {data?.map((res, ind) => (
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

const data = [
  {
    code: "8:00AM - 10:00AM",
    mon: "SIT 101 Room 3A",
    tue: " ",
    wed: "SIT 101 Room 3A",
    thur: "",
    fri: "SIT 101 Room 3A",
  },
  {
    code: "11:00AM - 01:00PM",
    mon: "",
    tue: " SIT 101 Room 3A",
    wed: "",
    thur: "SIT 101 Room 3A",
    fri: "",
  },
  {
    code: "2:00PM - 4:00PM",
    mon: "SIT 101 Room 3A",
    tue: " ",
    wed: "SIT 101 Room 3A",
    thur: "",
    fri: "SIT 101 Room 3A",
  },
  {
    code: "5:00PM - 07:00PM",
    mon: "",
    tue: " SIT 101 Room 3A",
    wed: "",
    thur: "SIT 101 Room 3A",
    fri: "",
  },
];
// order request card photo
// removing exact stock location
// notifications screen opening
// manage stock rename to sell
