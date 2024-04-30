import React from "react";

import { CertAwardSvg } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import useSemesterDetails from "@/hooks/useSemesterDetails";
import Spinner from "@/components/general/Spinner";
import { useSession } from "next-auth/react";
import { generateCourseName } from "@/lib/utils";

const CourseCard = () => {
  const { data: semester, isPending } = useSemesterDetails();
  const session = useSession();
  const hasYear = !!session?.data?.user?.year;

  return (
    <div className={"col-span-1 dashboard_card"}>
      <div className={"flex"}>
        <div className={"bg-gray-100 rounded-full p-3 "}>
          <CertAwardSvg />
        </div>
      </div>

      <div className={"mt-3"}>
        {isPending ? (
          <Spinner size="h-6 w-6 mr-auto" text="" />
        ) : (
          <h5 className={"text-c-red text-base font-semibold"}>
            {generateCourseName(
              semester?.course?.name,
              semester?.course?.type?.name
            )}
          </h5>
        )}
        <div className={"flex_row items-center gap-2 text-13 mt-1"}>
          <span>Year {semester?.year} </span>
          <div className={"h-1 w-1 rounded-full bg-gray-500"} />
          <span>Semester {semester?.number}</span>

          <Badge
            className={` ${hasYear ? "bg-green-100" : "bg-red-100"} text-11 ${
              hasYear ? "text-green-600" : "text-red-600"
            }  ml-2`}
          >
            {hasYear ? "In Session" : "Stopped"}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
