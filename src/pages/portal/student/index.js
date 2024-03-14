import React from "react";

import {
  DashboardCourseCard,
  DashboardFeeBalanceCard,
  DashboardResultsTable,
  DashboardStatisticsCard,
  DashboardWelcomeCard,
} from "../../../components/e-learning/dashboard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { StudentPortalLayout } from "@/components";

const Index = () => {
  return (
    <StudentPortalLayout className={"grid md:grid-cols-4 gap-6 inter"}>
      {/*row 1*/}
      <DashboardWelcomeCard />

      <DashboardCourseCard />

      {/*row 2*/}
      <DashboardFeeBalanceCard />

      <DashboardStatisticsCard />

      {/*    row 3 results table */}
      <div className={"col-span-4 border rounded-xl border-gray-200"}>
        {/*    header   */}
        <div
          className={
            "p-4 border-b border-gray-200 flex_row items-center justify-between"
          }
        >
          <h6 className={" text-c-red text-base font-semibold"}>
            Most Recent Results
          </h6>

          <Button
            className={"text-sm text-c-blue font-light gap-2"}
            variant={"ghost"}
          >
            View other results
            <FaArrowRightLong />
          </Button>
        </div>

        {/*    body   */}
        <div className={"p-5 px-10"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>
                Diploma in Theology Studies
              </h6>
              <h6 className={"text-sm"}>Results for Year 2 Semester 2</h6>
            </div>

            <Button
              className={
                "text-13 text-c-blue border border-c-blue font-light gap-2"
              }
              variant={"outline"}
            >
              Download Results
              <LiaDownloadSolid className={"text-lg"} />
            </Button>
          </div>
        </div>

        <div
          className={
            "mx-10  border border-gray-200 rounded-xl mb-5 overflow-hidden"
          }
        >
          <DashboardResultsTable />
        </div>
      </div>
    </StudentPortalLayout>
  );
};

export default Index;
