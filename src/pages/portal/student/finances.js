import React from "react";
import {
  FinanceBanner,
  FinanceStatsCards,
  StudentPortalLayout,
} from "@/components";

const Finances = () => {
  return (
    <StudentPortalLayout className={" inter"}>
      {/*  stats cards  */}
      <FinanceStatsCards />

      {/*  Banner  */}
      <FinanceBanner />

      {/*    Exam timetable  */}
    </StudentPortalLayout>
  );
};

export default Finances;
