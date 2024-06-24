import React from "react";
import LecturerPortalLayout from "@/components/e-learning/lecturer/LecturerPortalLayout";
import {
  DashboardStatsCards,
  LecturerDashboardAssignedUnits,
  LecturerDashboardAttendanceStatistics,
  LecturerDashboardTimetable,
} from "@/components";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";

const Dashboard = () => {
  const session = useSession();

  return (
    <LecturerPortalLayout>
      {/*  cards    */}
      <DashboardStatsCards />

      <div className={"grid grid-cols-3 gap-5"}>
        <LecturerDashboardTimetable />
        <LecturerDashboardAttendanceStatistics />
      </div>

      {/* <LecturerDashboardAssignedUnits /> */}
    </LecturerPortalLayout>
  );
};

export default Dashboard;
