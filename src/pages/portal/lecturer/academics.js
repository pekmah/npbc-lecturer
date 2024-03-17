import React from "react";
import LecturerPortalLayout from "@/components/e-learning/lecturer/LecturerPortalLayout";
import {
  LecturerAcademicAttendanceHistory,
  LecturerAcademicAttendanceStatistics,
  LecturerAcademicMarkAttendance,
  LecturerAcademicStatCards,
  LecturerAcademicStudentsAttendance,
  LecturerAcademicTimetable,
} from "@/components/e-learning/lecturer/academics";

const Academics = () => {
  return (
    <LecturerPortalLayout>
      <LecturerAcademicStatCards />

      <div className={"block md:flex_row my-5 gap-5"}>
        <LecturerAcademicAttendanceStatistics />
        <LecturerAcademicStudentsAttendance />
      </div>

      <div className={"flex_row gap-5"}>
        <LecturerAcademicTimetable />
        <LecturerAcademicMarkAttendance />
      </div>

      <LecturerAcademicAttendanceHistory />
    </LecturerPortalLayout>
  );
};

export default Academics;
