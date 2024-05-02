import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getOpenAttendances,
  markUnitAsAttended,
} from "@/services/AttendanceServices";
import useSemesterDetails from "@/hooks/useSemesterDetails";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EmptyTableRow } from "./Timetable";

const MarkAttendance = () => {
  const { data: semester } = useSemesterDetails();
  /**
   * Query to fetch open attendances
   */
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["attendance", "open"],
    queryFn: () => getOpenAttendances(),
    enabled: !!semester?.id,
  });

  const markUnitAsAttendedMutation = useMutation({
    mutationKey: ["mark_attendance"],
    mutationFn: markUnitAsAttended,
    onSettled: refetch,
  });

  const handleMarkUnitAsAttended = async (unit_id) => {};

  return (
    <div
      className={
        "col-span-1 my-4 border border-gray-200 rounded-xl items-center mt-16"
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
          {!data?.length ? (
            <TableRow className={"border-b border-gray-100"}>
              <EmptyTableRow isLoading={isFetching} results={results} />
            </TableRow>
          ) : (
            data?.map((item, ind) => (
              <TableRow key={ind} className={"border-b border-gray-100"}>
                <TableCell className="flex-1 py-4 text-sm text-gray-600 ">
                  {item?.unit?.name}
                </TableCell>

                <TableCell className="flex-1 py-4 text-sm text-gray-600">
                  <MarkAttendanceActions
                    disabled={
                      item?.marked || markUnitAsAttendedMutation.isLoading
                    }
                    onClick={handleMarkUnitAsAttended}
                    isLoading={markUnitAsAttendedMutation.isLoading}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MarkAttendance;

export const MarkAttendanceActions = ({ isLoading, ...rest }) => (
  <div className={"flex_row gap-2"}>
    <Button
      className={
        "text-[11px] text-c-blue border border-c-blue font-light p-2 h-8 px-5"
      }
      variant={"outline"}
      {...rest}
    >
      {isLoading ? "updating..." : "Mark"}
    </Button>
  </div>
);

const titles = [
  {
    name: "Unit",
  },
  {
    name: "Mark as Attended",
    className: "",
  },
];

const results = [
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
