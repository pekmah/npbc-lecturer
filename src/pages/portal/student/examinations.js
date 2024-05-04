import {
  AcademicStatsCards,
  LecturerExamTimetable,
  LecturerExamUploadedResults,
  StudentPortalExamResults,
  StudentPortalLayout,
} from "@/components";

const Examination = () => {
  return (
    <StudentPortalLayout>
      {/*  stats cards  */}
      <AcademicStatsCards />

      <LecturerExamTimetable />

      <LecturerExamUploadedResults hideUpload={true} />

      <StudentPortalExamResults />
    </StudentPortalLayout>
  );
};

export default Examination;
