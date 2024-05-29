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
import { toast } from "sonner";

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
    onSuccess: (_, unit_id) => {
      toast.success("Unit marked as attended.", {
        id: `mark-unit_${unit_id}`,
      });
    },
    onError: (_, unit_id) => {
      toast.error("Unit update error.", {
        id: `mark-unit_${unit_id}`,
      });
    },
  });

  const handleMarkUnitAsAttended = async (unit_id) => {
    toast.loading("Marking unit as attended...", {
      id: `mark-unit_${unit_id}`,
    });
    markUnitAsAttendedMutation.mutate(unit_id);
  };

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
                      item?.marked || markUnitAsAttendedMutation.isPending
                    }
                    onClick={() => handleMarkUnitAsAttended(item?.unit?.id)}
                    isLoading={markUnitAsAttendedMutation.isPending}
                    isSuccess={item?.marked}
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

export const MarkAttendanceActions = ({
  isLoading,
  disabled,
  isSuccess,
  isError,
  className,
  text,
  ...rest
}) => (
  <div className={"flex_row gap-2"}>
    <Button
      className={`text-xs text-c-blue border border-c-blue font-light p-2 h-8 px-5 z-10 ${
        disabled ? "cursor-not-allowed" : ""
      } 
      ${isSuccess ? "bg-emerald-500 border-none text-white" : ""} 
      
      ${isError ? "bg-red-500 border-none text-white" : ""} 
      
      ${className}`}
      variant={"outline"}
      {...rest}
      disabled={disabled}
    >
      {text ? text : isLoading ? "updating..." : isSuccess ? "Marked" : "Mark"}
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
