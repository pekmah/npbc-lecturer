import React from "react";
import { HandMoneySvg, MoneyHandSvg, ReceiptMoneySvg } from "@/assets/icons";
import { Card } from "@/components/e-learning/academics/StatsCards";
import useFees from "@/hooks/useFees";
import { formatCurrency } from "@/lib/utils";

const StatsCards = () => {
  const { data, isPending } = useFees();
  const values = {
    current: data?.total,
    paid: data?.paid,
    pending: data?.unpaid,
  };

  return (
    <div className={"flex_row w-full gap-5"}>
      {stats?.map(({ icon, title, desc }, ind) => (
        <Card
          key={ind}
          isLoading={isPending}
          icon={icon}
          desc={desc}
          title={formatCurrency(values[title])}
        />
      ))}
    </div>
  );
};

export default StatsCards;

const stats = [
  {
    title: "current",
    // title: "ksh. 32,000",
    desc: "Current Semester Fee",
    icon: <ReceiptMoneySvg />,
  },
  {
    // title: "ksh. 20,000",
    title: "paid",
    desc: "Paid Amount",
    icon: <HandMoneySvg />,
  },
  {
    title: "pending",
    // title: "ksh. 12,000",
    desc: "Pending Balance",
    icon: <MoneyHandSvg />,
  },
];
