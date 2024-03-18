import React from "react";

import ResourceCard from "../../ResourceCard";
import { GantChartSvg } from "@/assets/icons";

const ExamTimetable = () => {
  return (
    <div className={"col-span-2"}>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Exam Timetable
      </h5>

      <div
        className={"my-4 border border-gray-200 rounded-xl items-center p-5"}
      >
        <div className={"text-gray-700 mb-3"}>
          <h6 className={"font-medium text-15 mb-3"}>All Programs Timetable</h6>
          <h6 className={"text-sm"}>Exam timetable for Year 2 Semester 2</h6>
        </div>

        <ResourceCard
          icon={<GantChartSvg />}
          cardTitle={"Comprehensive Exams Schedule Sep - Dec 2024"}
          fileName={"Final_Exams_2024_Semester1_exams_timetable.xls"}
          actionTitle={"Download Timetable"}
        />
      </div>
    </div>
  );
};

export default ExamTimetable;
