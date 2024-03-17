import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AttendanceHistory = () => {
  return (
    <>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Attendance History
      </h5>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3 pt-5"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>All Previous Units</h6>
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
                    className=" text-[13px] text-gray-600 py-6"
                  >
                    {res[cKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

const titles = [
  {
    name: "Unit Code",
    className: "w-[150px]",
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
    name: "Year Studied",
    className: "",
  },

  {
    name: "Semester",
    className: "",
  },
  {
    name: "Total Unit Lectures",
    className: "",
  },
  {
    name: "Lectures Attended",
    className: "",
  },
];

const results = [
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
  {
    unit: "SIT 204",
    unitName: "Church History",
    lecturer: "Dr. Kennedy Makau",
    year: "2020",
    semester: "Semester 1",
    totalLectures: "32",
    lecturesAttended: "24",
  },
];

export default AttendanceHistory;
