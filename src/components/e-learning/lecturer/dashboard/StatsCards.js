import React from "react";
import { Card } from "@/components/e-learning/academics/StatsCards";
import { BooksSvg, BuildingMarkSvg, TrainingClassSvg } from "@/assets/icons";

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
    desc: "Total Units Assigned",
    icon: <BooksSvg />,
  },
  {
    title: "1",
    desc: "Learning Centres",
    icon: <BuildingMarkSvg />,
  },
  {
    title: "ksh. 12,000",
    desc: "Pending Balance",
    icon: <TrainingClassSvg />,
  },
];
