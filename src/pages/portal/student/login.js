import React from "react";
import Image from "next/image";

import Layout from "@/layout";
import { LabelledInput } from "@/components";
import { Button } from "@/components/ui/button";
import { FormLayout } from "./_components";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleResetPassword = () => {
    router.push("/portal/student/reset_password");
  };
  return (
    <FormLayout formClassName={"gap-5"}>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue "}>
        Login as Student
      </h4>
      <LabelledInput
        required={true}
        labelClassName={"px-1"}
        containerClassName={"gap-2.5"}
        title={"Registration Number"}
        inputClassName={"rounded-xl h-12"}
        placeholder={"Enter your registration number"}
        type={"email"}
      />
      <div>
        <LabelledInput
          required={true}
          labelClassName={"px-1"}
          containerClassName={"gap-2.5"}
          title={"Password"}
          inputClassName={"rounded-xl h-12"}
          type={"password"}
          placeholder={"Enter password"}
        />

        <div className={"flex justify-end mt-2"}>
          <Button
            className={"text-c-red text-[13px] font-semibold underline "}
            variant="link"
            type={"button"}
            onClick={handleResetPassword}
          >
            Forgot Password?
          </Button>
        </div>
      </div>
      <div className={"w-full h-24"} />
      <Button type={"submit"} className={"bg-c-red text-white rounded-xl h-12"}>
        Login
      </Button>
    </FormLayout>
  );
};

export default Login;
