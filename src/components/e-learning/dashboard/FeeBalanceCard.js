import React from "react";

import { CertAwardSvg } from "@/assets/icons";
import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

const FeeBalanceCard = () => {
  return (
    <div className={"col-span-2 dashboard_card px-8 flex_col gap-5"}>
      <div className={"flex gap-3 items-center"}>
        <div className={"bg-gray-100 rounded-full p-5 "}>
          <CertAwardSvg />
        </div>

        <div className={"flex-1 flex_col justify-center"}>
          <h6 className={"text-c-red text-base font-semibold mb-1"}>
            Ksh 25,650
          </h6>

          <h6 className={"text-sm"}>Current Balance</h6>
        </div>

        <Button
          className={"text-sm text-c-blue border border-c-blue font-light"}
          variant={"outline"}
        >
          Pay Fees
          <HiArrowUpRight className={"ml-2"} />
        </Button>
      </div>

      <div className={"rounded-xl flex_row overflow-hidden"}>
        <div
          className={
            "bg-green-600 h-20 flex-1 flex_col gap-3 justify-center px-10 text-sm"
          }
        >
          <h6 className={"text-white"}>Paid Fee Amount</h6>
          <h6 className={"text-white font-medium text-15"}>Kes 15,300</h6>
        </div>

        <div
          className={
            "bg-red-600 h-20 flex-1 flex_col gap-3 justify-center px-10 text-sm"
          }
        >
          <h6 className={"text-white"}>Pending Balance</h6>
          <h6 className={"text-white text-15 font-medium"}>Kes 10,000</h6>
        </div>
      </div>
    </div>
  );
};

export default FeeBalanceCard;
