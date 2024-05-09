/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import useSemesterDetails from "@/hooks/useSemesterDetails";
import { ChevronDown } from "lucide-react";
import { useFilteredExamResults } from "@/hooks/useExamResults";
import { GET_REQUEST } from "@/configs/Globals";
import { makeRequest } from "@/services/AxiosServices";
import endpoints from "@/services/endpoints";
import { useQuery } from "@tanstack/react-query";
import { extractExamResultFields } from "@/helpers/helpers";
import { CTable } from "@/components/general/Table";
import { usePDF } from "react-to-pdf";

const ExamResults = () => {
  const semester = useSemesterDetails();
  const session = useSession();
  const { targetRef, toPDF } = usePDF();
  const [filters, setFilters] = useState({
    year: null,
    semester: null,
    type: null,
  });

  const generatePDF = () => {
    toPDF();
  };
  /**
   * Query to fetch student's Exam Results
   */
  const {
    data,
    isLoading: isFetching,
    is,
  } = useQuery({
    queryKey: [
      "exam_results",
      filters?.semester?.value,
      session?.data?.user?.id,
      filters?.type?.id,
    ],
    queryFn: async () => {
      const data = await makeRequest(
        GET_REQUEST,
        `${endpoints.exam_results}?semester=${filters?.semester?.value}&user=${session?.data?.user?.id}&type=${filters?.type?.id}`
      );

      return extractExamResultFields(
        data?.data?.data,
        filters?.semester?.cKey,
        filters?.type?.name
      );
    },
    enabled: !!(
      filters?.semester?.value &&
      session?.data?.user?.id &&
      filters?.type?.id
    ),
  });

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
              onClick={generatePDF}
            >
              Download Results
              <LiaDownloadSolid className={"text-lg"} />
            </Button>
          </div>
        </div>

        {/* filters */}
        <div className="flex items-center gap-5 px-5 pb-5">
          <span className="text-[15px]">Filter By</span>

          <YearFilter
            handleChange={(val) =>
              setFilters((prev) => ({ ...prev, year: val }))
            }
            value={filters?.year}
            semester={semester?.data}
          />

          <SemesterFilter
            handleChange={(val) =>
              setFilters((prev) => ({ ...prev, semester: val }))
            }
            value={filters?.semester}
            year={filters?.year}
          />

          <ExamTypeFilter
            handleChange={(val) =>
              setFilters((prev) => ({ ...prev, type: val }))
            }
            value={filters?.type}
            semester={filters?.semester}
          />
        </div>

        <div className="" ref={targetRef}>
          <CTable
            columns={examResultColumns}
            data={data || []}
            isLoading={isFetching}
            tableClassName={"border-0"}
            tableHeaderClassName={"bg-gray-50"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExamResults;

const examResultColumns = [
  {
    accessorKey: "unitId",
    header: "Unit Code",
  },
  {
    accessorKey: "unitName",
    header: "Unit Name",
  },
  {
    accessorKey: "unitName",
    header: "Unit Name",
  },
  {
    accessorKey: "examType",
    header: "Exam Type",
  },
  {
    accessorKey: "yearOfStudy",
    header: "Year Studied",
  },
  {
    accessorKey: "marks",
    header: "Marks%",
  },
  {
    accessorKey: "semester",
    header: "Semester",
    cell: ({ row, column }) => (
      <span>Semester {row?.getValue(column?.id)}</span>
    ),
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
];

// Year filter Button
const YearFilter = ({ semester, value, handleChange }) => {
  const years = getYears(semester);
  console.log(years);

  useEffect(() => {
    if (years.length) handleChange(years[0]);
    console.log("ran");
  }, [years?.length]);

  return (
    <DropDownButton
      preText={"Year"}
      label={"Year " + (value ? value?.toString() : "")}
      title="Year"
      menuOptions={years}
      value={value}
      handleChange={handleChange}
    />
  );
};
const SemesterFilter = ({ year, value = "", handleChange }) => {
  const { semesterData } = useFilteredExamResults(year);

  useEffect(() => {
    if (semesterData.length) handleChange(semesterData[0]);
  }, [semesterData?.length]);

  return (
    <DropDownButton
      preText={"Semester"}
      label={"Semester " + (value ? value?.cKey?.toString() : "")}
      title="Semester"
      menuOptions={semesterData || []}
      value={value?.cKey}
      handleChange={(val) =>
        handleChange(semesterData?.find((sem) => sem.value === val))
      }
      disabled={!year}
    />
  );
};

const ExamTypeFilter = ({ semester, value = "", handleChange }) => {
  // fetch exam types
  const { data: examTypes, isPending } = useQuery({
    queryKey: ["exam_types", semester?.id],
    queryFn: () => makeRequest(GET_REQUEST, `${endpoints.exam_types}`),
  });

  useEffect(() => {
    if (examTypes?.data.length) handleChange(examTypes?.data[0]);
  }, [examTypes?.data]);

  return (
    <DropDownButton
      preText={""}
      label={"Type: " + (value ? value?.name?.toString() : "")}
      title="Exam Type"
      menuOptions={examTypes?.data || []}
      cKey={"name"}
      cValue={"id"}
      value={value?.id}
      handleChange={handleChange}
      disabled={!semester}
      isLoading={isPending}
    />
  );
};

// filter buttons
const DropDownButton = ({
  label,
  title,
  menuOptions = [],
  value,
  preText,
  handleChange,
  disabled,
  isLoading,
  cKey,
  cValue,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button
          className={
            "border border-gray-200 text-[13px] font-medium flex gap-2 px-5 text-gray-600"
          }
          variant="outline"
        >
          {label}
          <span role="img" aria-label="down-arrow">
            <ChevronDown className="h-5" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className={"text-center"}>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isLoading && (
          // spinner
          <div className={"flex justify-center items-center p-3"}>
            <span className={"text-gray-400 text-xs"}>Loading...</span>
          </div>
        )}
        {menuOptions?.map((item, ind) => (
          <DropdownMenuCheckboxItem
            key={ind}
            checked={
              value === (cValue ? item[cValue] || null : item?.value || item)
            }
            onCheckedChange={() => handleChange(item?.value || item)}
            className={"cursor-pointer"}
          >
            {preText} {cKey ? item[cKey] || "" : item?.cKey || item}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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

// get years of study
const getYears = (semester) => {
  const months = semester?.course?.months;
  let years = [];
  if (months != null) {
    let duration = months / 12;

    for (let i = 0; i < duration; i++) years.push(i + 1);
  }
  return years;
};
