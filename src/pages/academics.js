import {
  AcademicMarkAttendance,
  AcademicStatsCards,
  AcademicTimetable,
  StudentPortalLayout,
} from "@/components";

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
