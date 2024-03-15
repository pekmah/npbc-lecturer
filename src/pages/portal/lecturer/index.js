import React from "react";
import LecturerPortalLayout from "@/components/e-learning/lecturer/LecturerPortalLayout";
import {
  DashboardStatsCards,
  LecturerDashboardAssignedUnits,
  LecturerDashboardTimetable,
} from "@/components";
import { StatisticsSvg } from "@/assets/icons";

const Dashboard = () => {
  return (
    <LecturerPortalLayout>
      {/*  cards    */}
      <DashboardStatsCards />

      <div className={"grid grid-cols-3 gap-5"}>
        <LecturerDashboardTimetable />

        <div
          className={
            "col-span-1 my-4 border border-gray-200 rounded-xl items-center"
          }
        >
          <div className={"px-5 py-3"}>
            <div className={"flex_row justify-between"}>
              <div className={"text-gray-700 "}>
                <div
                  className={
                    "bg-gray-100 rounded-full flex_row-center h-16 w-16 mb-3"
                  }
                >
                  <StatisticsSvg />
                </div>
                <h6 className={"font-medium text-15 mb-3 text-c-red"}>
                  Class Attendance Statistics
                </h6>

                <p className={"text-13"}>92% Lectures attended</p>

                <div className={"rounded-xl flex_row overflow-hidden mt-8"}>
                  <div
                    className={
                      "bg-green-600 h-28 flex-1 flex_col gap-3 justify-center px-10 text-sm"
                    }
                  >
                    <h6 className={"text-white"}>Complete Classes </h6>
                    <h6 className={"text-white font-medium text-15"}>
                      44 Lectures
                    </h6>
                  </div>

                  <div
                    className={
                      "bg-red-600 h-28 flex-1 flex_col gap-3 justify-center px-10 text-sm"
                    }
                  >
                    <h6 className={"text-white"}>Classes Attended</h6>
                    <h6 className={"text-white text-15 font-medium"}>
                      40 Lectures
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LecturerDashboardAssignedUnits />
    </LecturerPortalLayout>
  );
};

export default Dashboard;
