import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";
import { ImFilesEmpty } from "react-icons/im";

import SkeletonWrapper from "@/components/general/SkeletonWrapper";
import useSemesterDetails from "@/hooks/useSemesterDetails";
import { generateCourseName, groupUnitsByDay } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getSemesterTimetable } from "@/services/TimetableServices";

const Timetable = () => {
  const { data: semester, isPending } = useSemesterDetails();

  /**
   * Query to fetch timetable for the semester
   */
  const { data, isFetching } = useQuery({
    queryKey: ["semester_timetable", semester?.id],
    queryFn: () => getSemesterTimetable(semester?.id),
    enabled: !!semester?.id,
  });
  // const groupedUnits =
  const groupedUnits = groupUnitsByDay(data || []);

  return (
    <div className={"col-span-2"}>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Semester Timetable
      </h5>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <SkeletonWrapper fullWidth={false} isLoading={isPending}>
              <div className={"text-gray-700 "}>
                <h6 className={"font-medium text-15 mb-3"}>
                  {generateCourseName(
                    semester?.course?.name,
                    semester?.course?.type?.name
                  )}
                </h6>
                <h6 className={"text-sm"}>
                  Results for Year {semester?.year} Semester {semester?.number}
                </h6>
              </div>
            </SkeletonWrapper>

            <Button
              className={
                "text-13 text-c-blue border border-c-blue font-light gap-2"
              }
              variant={"outline"}
            >
              Download Results
              <LiaDownloadSolid className={"text-lg"} />
            </Button>
          </div>
        </div>

        <Table className={"flex-1 h-full"}>
          {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
          <TableHeader className={"bg-gray-50"}>
            <TableRow className={"text-red-500"}>
              {titles?.map(({ className, name }, key) => (
                <TableHead
                  key={key}
                  className={`text-black py-5 text-center ${className}`}
                >
                  {name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="relative ">
            {!groupedUnits?.length ? (
              <EmptyTableRow isLoading={isFetching} results={results} />
            ) : (
              groupedUnits?.map((res, ind) => (
                <TableRow key={ind} className={"border-b border-gray-100"}>
                  {Object.keys(res)?.map((cKey, index) => (
                    <TableCell
                      key={index}
                      className=" text-[13px] text-gray-600 py-5 text-center border-r border-gray-100"
                    >
                      <span
                        className={
                          "text-gray-800 text-sm font-medium md:text-sm "
                        }
                      >
                        {res[cKey]?.time}
                      </span>
                      <br />
                      <span className={"text-gray-800 font-medium text-sm"}>
                        {res[cKey]?.unit}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Timetable;

const titles = [
  // {
  //   name: "Time",
  //   className: "w-[150px]",
  // },
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
    mon: "SIT 101 Room 3A",
    tue: "SIT 101 Room 3A",
    wed: "SIT 101 Room 3A",
    thur: "SIT 101 Room 3A",
    fri: "SIT 101 Room 3A",
  },
];

export const EmptyTableRow = ({ results = [], isLoading }) => (
  <>
    <div className={"absolute inset-0 rounded-2xl border-b bg-white  z-20"}>
      <SkeletonWrapper isLoading={isLoading}>
        <div className={"p-10 flex flex-col items-center justify-center"}>
          <div className="mb-3">
            <ImFilesEmpty className="text-3xl text-gray-400" />
          </div>
          <p className="italic text-slate-400">No records to display</p>
        </div>
      </SkeletonWrapper>
    </div>
    <TableRow className={"border-b relative border-gray-100 "}>
      {Object.keys(results?.at(0))?.map((cKey, index) => (
        <TableCell key={index} className=" text-[13px] text-gray-600 py-12">
          {results?.at(0)[cKey]}
        </TableCell>
      ))}
    </TableRow>
  </>
);
