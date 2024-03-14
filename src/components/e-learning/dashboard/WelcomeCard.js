import React from "react";
import { Button } from "@/components/ui/button";
import { HiArrowUpRight } from "react-icons/hi2";

const WelcomeCard = () => {
  return (
    <div className={"col-span-3 dashboard_card"}>
      <h3 className={"text-c-red font-semibold text-xl"}>
        Welcome back, Peter
      </h3>

      <p className={"text-sm my-2"}>
        Explore your student portal to access and manage your details and carry
        out your academic activities. You can also check for updates from the
        administration to stay up to date with every matter that concerns
        students. If you experience a challenge finding information or resources
        or with carrying out any action, please contact the ICT office.
      </p>

      {/*  buttons*/}
      <div className={"flex_row gap-6 mt-5"}>
        <Button
          className={"text-sm text-c-blue border border-c-blue font-light"}
          variant={"outline"}
        >
          Checkout Exam Results
          <HiArrowUpRight className={"ml-2"} />
        </Button>

        <Button
          className={"text-sm text-c-blue border border-c-blue font-light"}
          variant={"outline"}
        >
          Pay Fees
          <HiArrowUpRight className={"ml-2"} />
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCard;
