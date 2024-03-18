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

const ExamResults = () => {
  return (
    <div className={"my-3"}>
      <h5 className={" text-c-red mb-1 text-base font-semibold mt-7"}>
        Exam Results
      </h5>
      <p className={"text-sm text-gray-600"}>
        Find exam results for all units you have covered.
      </p>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>All Previous Units</h6>
            </div>

            <Button
              className={
                "text-xs text-c-blue border border-c-blue font-light gap-2"
              }
              variant={"outline"}
            >
              Download Statements
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
  );
};

export default ExamResults;

const titles = [
  {
    name: "Unit Code",
    className: "",
  },
  {
    name: "Unit Name",
    className: "",
  },
  {
    name: "Lecturer",
    className: "",
  },
  {
    name: "Exam Type",
    className: "",
  },
  {
    name: "Year Studied",
    className: "",
  },
  {
    name: "Semester",
    className: "",
  },
  {
    name: "Marks%",
    className: "",
  },
  {
    name: "Grade",
    className: "",
  },
];

const statements = [
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
  {
    code: "SIT 024",
    name: "Church History",
    lec: "Dr. Makau",
    examType: "CAT",
    year: 2020,
    semester: "Semester 1",
    marks: 70,
    Grade: "B",
  },
];
