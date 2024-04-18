import { FormLayout, LabelledInput } from "@/components";
import { SubmitButton } from "@/components/e-learning/common";
import { ControlledLabelledInput } from "@/components/general/LabelledInput";
import { Button } from "@/components/ui/button";
import { login, loginStudent } from "@/services/AuthServices";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   router.push("/portal/student");
  // };

  const handleResetPassword = () => {
    router.push("/portal/auth/student/reset_password");
  };

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const signinMutation = useMutation({
    mutationKey: "loginStudent",
    mutationFn: loginStudent,
  });

  // signin as student
  const onSubmit = (data) => {
    const { email, password } = data;

    signinMutation.mutate({ email, password });
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} formClassName={"gap-5"}>
      <h4 className={"text-xl md:text-2xl font-semibold text-c-blue "}>
        Login as Student
      </h4>

      <ControlledLabelledInput
        name={"email"}
        control={control}
        required={true}
        labelClassName={"px-1"}
        containerClassName={"gap-2.5"}
        title={"Email"}
        inputClassName={"rounded-xl h-12"}
        placeholder={"Enter your email"}
        type={"email"}
      />

      <div>
        <ControlledLabelledInput
          name={"password"}
          control={control}
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
      <SubmitButton
        type={"submit"}
        className={"bg-c-red text-white rounded-xl h-12"}
        isLoading={signinMutation.isLoading}
        disabled={signinMutation.isLoading}
      >
        Login
      </SubmitButton>
    </FormLayout>
  );
};

export default Login;
