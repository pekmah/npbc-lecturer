import React from "react";
import {
  AcademicAttendance,
  AcademicMarkAttendance,
  AcademicStatsCards,
  AcademicTimetable,
  Button,
  StudentPortalLayout,
} from "@/components";
import { CTable } from "@/components/general/Table";
import { ArrowUpDown } from "lucide-react";

const Academics = () => {
  return (
    <StudentPortalLayout className={" inter"}>
      {/*  stats cards  */}
      <AcademicStatsCards />

      <div className={"grid grid-cols-3 gap-5"}>
        <AcademicTimetable />
        <AcademicMarkAttendance />
      </div>

      {/* <AcademicAttendance /> */}
      <div />
      <div />
      <div />
    </StudentPortalLayout>
  );
};

export default Academics;
