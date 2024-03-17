import React from "react";
import { BooksSvg, CalendarSvg, TrainingSvg } from "@/assets/icons";

const StatsCards = () => {
  return (
    <div className={"flex_row w-full gap-5"}>
      {stats?.map(({ icon, title, desc }, ind) => (
        <Card key={ind} icon={icon} desc={desc} title={title} />
      ))}
    </div>
  );
};

export default StatsCards;

export const Card = ({ icon, title, desc }) => (
  <div
    className={
      "p-4 py-6 rounded-2xl border border-gray-200 flex-1 flex_row gap-3 items-center"
    }
  >
    <div className={"bg-gray-100 rounded-full p-4"}>{icon}</div>
    <div>
      <h5 className={"text-c-red text-base font-semibold mb-1"}>{title}</h5>
      <span>{desc} </span>
    </div>
  </div>
);

const stats = [
  {
    title: "6",
    desc: "Current Semester units",
    icon: <BooksSvg />,
  },
  {
    title: "3 Months",
    desc: "Semester Length",
    icon: <CalendarSvg />,
  },
  {
    title: "18",
    desc: "Lectures Per Week",
    icon: <TrainingSvg />,
  },
];
