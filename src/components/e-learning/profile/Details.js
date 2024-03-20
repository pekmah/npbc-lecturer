import React from "react";
import { ProfileForm } from "@/components/e-learning/profile/index";

const Details = () => {
  return (
    <div className={"flex-1 p-5 border border-gray-200 rounded-2xl"}>
      <h5 className={"font-semibold text-xl mb-5"}>Personal Details</h5>

      <ProfileForm />
    </div>
  );
};

export default Details;
