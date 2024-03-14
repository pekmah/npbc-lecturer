import React from "react";
import {
  AcademicAttendance,
  AcademicStatsCards,
  AcademicTimetable,
  StudentPortalLayout,
} from "@/components";

const Academics = () => {
  return (
    <StudentPortalLayout className={" inter"}>
      {/*  stats cards  */}
      <AcademicStatsCards />

      <AcademicTimetable />

      <AcademicAttendance />
      <div />
      <div />
      <div />
    </StudentPortalLayout>
  );
};

export default Academics;
