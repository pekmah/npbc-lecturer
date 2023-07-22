import { Button } from "@/components/general";
import Input from "@/components/general/Input";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const EducationalForm = ({ handleChange, state }) => {
  return (
    <div className={"p-3 md:p-5 border border-gray-300"}>
      <h6 className={"font-bold text-lg"}>Educational Background</h6>

      {/*    form     */}
      <form
        className={
          "grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-6 text-c-blue"
        }
        action=""
      >
        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>High school Name</h6>

          <Input
            name={"school"}
            onChange={handleChange}
            value={state?.school}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>From - until(years)</h6>

          <Input name={"years"} onChange={handleChange} value={state?.years} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Qualification</h6>

          <Input
            name={"qualification"}
            onChange={handleChange}
            value={state?.qualification}
          />
        </div>

        <div />
        {/*<div className={"col-span-2 flex items-center justify-center "}>*/}
        {/*  <Button*/}
        {/*    className={*/}
        {/*      "bg-c-red-pale text-c-red outline-none py-3 px-6 text-sm font-semibold flex gap-1 items-center "*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <IoMdAdd /> &nbsp; Add post-secondary level*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </form>
    </div>
  );
};

export default EducationalForm;
