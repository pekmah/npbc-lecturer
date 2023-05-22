import Input from "@/components/general/Input";
import React from "react";

const ContactForm = () => {
  return (
    <div className={"p-3 md:p-5 border border-gray-300"}>
      <h6 className={"font-bold text-lg"}>Contact Details</h6>

      {/*    form     */}
      <form
        className={
          "grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-4 gap-y-4 md:gap-y-6 text-c-blue"
        }
        action=""
      >
        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>First Name</h6>

          <Input />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Email</h6>

          <Input />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Nationality</h6>

          <Input />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Country/Region</h6>

          <Input />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Town</h6>

          <Input />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
