import React from "react";
import {
  FinanceBanner,
  FinanceFeeStructure,
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

      {/* Fee Structure */}
      <FinanceFeeStructure />
    </StudentPortalLayout>
  );
};

export default Finances;
