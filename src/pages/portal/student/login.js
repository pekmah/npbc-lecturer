import React from "react";
import Image from "next/image";

import Layout from "@/layout";
import { LabelledInput } from "@/components";
import { Button } from "@/components/ui/button";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout hideApplication={true}>
      {/*hero section */}
      <div className={"relative h-[40vh] bg-white"}>
        <Image
          src={"/images/e-learning/students.jpeg"}
          alt={"student-portal"}
          className={"h-full w-full object-cover"}
          width={1000}
          height={950}
        />

        <div
          className={
            "absolute inset-0 bg-[#000000B0] flex flex-col justify-center"
          }
        >
          <div className={"max-w-[1300px] w-full mx-auto"}>
            <h3
              className={
                "font-bold text-white text-2xl md:text-3xl lg:text-4xl"
              }
            >
              Student Portal
            </h3>

            <p className={"mt-2 text-sm w-full md:w-1/3 lg:w-1/4 text-white"}>
              Sign in to manage your account and view updates and information
              communicated by the administration.
              <br /> <br />
              The default password is your registration. Change the default
              password to a more secure and private password.
            </p>
          </div>
        </div>
      </div>

      {/*  form section  */}
      <div className={"h-60 relative max-w-[1300px] w-full mx-auto"}>
        <form
          className={
            "absolute right-0 bottom-10 z-10 bg-white shadow p-3 sm:p-5 lg:p-10 md:min-w-[600px] rounded-2xl flex flex-col gap-5"
          }
          onSubmit={handleSubmit}
        >
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
                className={
                  "text-c-red text-[13px] font-semibold underline hover:bg-c-red"
                }
                variant="link"
              >
                Forgot Password?
              </Button>
            </div>
          </div>

          <div className={"w-full h-24"} />

          <Button
            type={"submit"}
            className={"bg-c-red text-white rounded-xl h-12"}
          >
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
