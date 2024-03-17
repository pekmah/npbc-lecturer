import React from "react";
import { BooksSvg, CalendarSvg, TrainingSvg } from "@/assets/icons";
import { Card } from "@/components/e-learning/academics/StatsCards";

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
