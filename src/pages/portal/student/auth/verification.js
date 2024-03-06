import React from "react";
import { FormLayout } from "@/pages/portal/student/_components";
import { Button } from "@/components/ui/button";
import { VerificationCodeInput } from "@/components/general/LabelledInput";
import { useRouter } from "next/router";

const ResetPasswordVerification = () => {
  const router = useRouter();

  const handleProceed = (e) => {
    e.preventDefault();

    router.push("/portal/student/auth/create_password");
  };

  return (
    <FormLayout handleSubmit={handleProceed}>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue "}>
        Reset your password
      </h4>
      <p className={"text-c-blue font-light text-sm my-4 lg:w-3/4"}>
        We sent a 5 digit verification code to your primary email
        n****@gmail.com.
      </p>

      <VerificationCodeInput
        required={true}
        labelClassName={"px-1"}
        containerClassName={"gap-2.5"}
        title={"Verification Code"}
        inputClassName={"rounded-xl h-14 w-14"}
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
