import React from "react";

import { LabelledInput } from "@/components";
import { Button } from "@/components/ui/button";
import { FormLayout } from "./_components";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const router = useRouter();

  const handleProceed = (e) => {
    e.preventDefault();

    router.push("/portal/student/verification");
  };
  return (
    <FormLayout handleSubmit={handleProceed} formClassName={"gap-3"}>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue "}>
        Reset your password
      </h4>
      <p className={"text-c-blue text-sm my-1 mb-3"}>
        To reset your password, enter your registration number for
        identification.
      </p>
      <LabelledInput
        required={true}
        labelClassName={"px-1"}
        containerClassName={"gap-2.5"}
        title={"Registration Number"}
        inputClassName={"rounded-xl h-12"}
        placeholder={"Enter your registration number"}
      />
      <div className={"w-full h-24"} />
      <Button type={"submit"} className={"bg-c-red text-white rounded-xl h-12"}>
        Proceed
      </Button>
    </FormLayout>
  );
};

export default ResetPassword;
