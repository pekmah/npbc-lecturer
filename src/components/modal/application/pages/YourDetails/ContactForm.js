import Input from "@/components/general/Input";
import React from "react";

const ContactForm = ({ state, handleChange }) => {
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
          <h6 className={"font-medium"}>Name</h6>

          <Input name={"fName"} onChange={handleChange} value={state?.name} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Phone</h6>

          <Input name={"phone"} onChange={handleChange} value={state?.phone} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Email</h6>

          <Input name={"email"} onChange={handleChange} value={state?.email} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Nationality</h6>

          <Input
            name={"nationality"}
            value={state?.nationality}
            onChange={handleChange}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>County/Region</h6>

          <Input
            name={"county"}
            onChange={handleChange}
            value={state?.county}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Town</h6>

          <Input name={"town"} onChange={handleChange} value={state?.town} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
