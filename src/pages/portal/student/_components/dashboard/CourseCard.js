import React from "react";

import { CertAwardSvg } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";

const CourseCard = () => {
  return (
    <div className={"col-span-1 dashboard_card"}>
      <div className={"flex"}>
        <div className={"bg-gray-100 rounded-full p-3 "}>
          <CertAwardSvg />
        </div>
      </div>

      <div className={"mt-3"}>
        <h5 className={"text-c-red text-base font-semibold"}>
          Diploma in Theology Studies
        </h5>

        <div className={"flex_row items-center gap-2 text-13 mt-1"}>
          <span>Year 2 </span>
          <div className={"h-1 w-1 rounded-full bg-gray-500"} />
          <span>Semester 1</span>

          <Badge className={"bg-green-100 text-11 text-green-600 ml-2"}>
            In Session
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
