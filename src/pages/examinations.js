import {
  AcademicStatsCards,
  StudentPortalExamResults,
  StudentPortalLayout,
} from "@/components";

const Examination = () => {
  return (
    <StudentPortalLayout>
      {/*  stats cards  */}
      <AcademicStatsCards />
      {/* <LecturerExamTimetable /> */}
      <StudentPortalExamResults />
    </StudentPortalLayout>
  );
};

export default Examination;
