import React from "react";
import {
  LecturerExamsStatCards,
  LecturerExamTimetable,
  LecturerExamUploadedResults,
  StudentPortalExamResults,
  StudentPortalLayout,
} from "@/components";

const Examination = () => {
  return (
    <StudentPortalLayout>
      <LecturerExamsStatCards />

      <LecturerExamTimetable />

      <LecturerExamUploadedResults hideUpload={true} />

      <StudentPortalExamResults />
    </StudentPortalLayout>
  );
};

export default Examination;
