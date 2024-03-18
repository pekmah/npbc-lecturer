import React from "react";
import LecturerPortalLayout from "@/components/e-learning/lecturer/LecturerPortalLayout";
import { LecturerExamsStatCards, LecturerExamTimetable } from "@/components";

const Examinations = () => {
  return (
    <LecturerPortalLayout>
      <LecturerExamsStatCards />

      <LecturerExamTimetable />
    </LecturerPortalLayout>
  );
};

export default Examinations;
