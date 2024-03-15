import React from "react";
import { FormLayout, LabelledInput } from "@/components";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const CreatePassword = () => {
  const router = useRouter();
  const handleProceed = () => {
    router.push("/portal/student");
  };
  return (
    <FormLayout formClassName={"gap-4"}>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue"}>
        Create a Password
      </h4>

      <p className={"text-c-blue text-sm my-1 mb-2"}>
        Enter your new password.
      </p>

      <LabelledInput
        required={true}
        labelClassName={"px-1"}
        containerClassName={"gap-2.5"}
        title={"Create Password"}
        type={"password"}
        inputClassName={"rounded-xl h-12"}
        placeholder={"Enter new password"}
      />

      <LabelledInput
        required={true}
        labelClassName={"px-1"}
        containerClassName={"gap-2.5"}
        title={"Confirm Password"}
        type={"password"}
        inputClassName={"rounded-xl h-12"}
        placeholder={"Confirm new password"}
      />

      <div className={"w-full h-24"} />

      <Button type={"submit"} className={"bg-c-red text-white rounded-xl h-12"}>
        Finish and Login
      </Button>
    </FormLayout>
  );
};

export default CreatePassword;
