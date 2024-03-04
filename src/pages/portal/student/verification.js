import React from "react";
import { FormLayout } from "@/pages/portal/student/_components";
import { LabelledInput } from "@/components";
import { Button } from "@/components/ui/button";

const ResetPasswordVerification = () => {
  return (
    <FormLayout>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue "}>
        Reset your password
      </h4>
      <p className={"text-c-blue font-light text-sm my-4"}>
        We sent a 5 digit verification code to your primary email
        n****@gmail.com.
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
        Confirm
      </Button>

      <p className={"text-c-blue text-sm mt-4"}>
        If this doesn&apos;t work, please contact your administrator
      </p>
    </FormLayout>
  );
};

export default ResetPasswordVerification;
