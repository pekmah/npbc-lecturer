import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AssignedUnits = () => {
  return (
    <div className={"my-3"}>
      <h5 className={" text-c-red mb-1 text-base font-semibold mt-7"}>
        Assigned Units
      </h5>
      <p className={"text-sm text-gray-600"}>
        You can only mark attendance for units in the day they are taught,
        during or after the lesson.
      </p>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <Table className={""}>
            {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
            <TableHeader className={"bg-gray-50"}>
              <TableRow className={"text-red-500"}>
                {titles?.map(({ className, name }, key) => (
                  <TableHead
                    key={key}
                    className={`text-black py-5 ${className}`}
                  >
                    {name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {statements?.map((res, ind) => (
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
      </div>
    </div>
  );
};

export default AssignedUnits;

const titles = [
  {
    name: "Unit Code",
    className: "",
  },
  {
    name: "Unit",
    className: "",
  },
  {
    name: "Learning Center",
    className: "",
  },
  {
    name: "Students' year",
    className: "",
  },
  {
    name: "Semester",
    className: "",
  },
];

const statements = [
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
  {
    unit: "SIT 101",
    name: "Contextual Egensis",
    center: "Ruiru",
    year: "1st",
    semester: "2nd",
  },
];
