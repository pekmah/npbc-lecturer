import React from "react";
import { HandMoneySvg, MoneyHandSvg, ReceiptMoneySvg } from "@/assets/icons";
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
    title: "ksh. 32,000",
    desc: "Current Semester Fee",
    icon: <ReceiptMoneySvg />,
  },
  {
    title: "ksh. 20,000",
    desc: "Paid Amount",
    icon: <HandMoneySvg />,
  },
  {
    title: "ksh. 12,000",
    desc: "Pending Balance",
    icon: <MoneyHandSvg />,
  },
];
