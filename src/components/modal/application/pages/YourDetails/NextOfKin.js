import Input from "@/components/general/Input";
import React from "react";

const NextOfKin = ({ state, handleChange }) => {
  return (
    <div className={"p-3 md:p-5 border border-gray-300"}>
      <h6 className={"font-bold text-lg mb-2"}>Next of Kin</h6>

      {/*    form     */}
      <form
        className={
          "grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-6 text-c-blue"
        }
        action=""
      >
        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>First Name</h6>

          <Input name={"first"} onChange={handleChange} value={state?.first} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Second Name & Surname</h6>

          <Input
            name={"second"}
            onChange={handleChange}
            value={state?.second}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Relationship</h6>

          <Input
            name={"relationship"}
            onChange={handleChange}
            value={state?.relationship}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Phone Number</h6>

          <Input name={"phone"} onChange={handleChange} value={state?.phone} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Email</h6>

          <Input name={"email"} onChange={handleChange} value={state?.email} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>National ID/Passport</h6>

          <Input name={"n_id"} onChange={handleChange} value={state?.n_id} />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Nationality</h6>

          <Input
            name={"nationality"}
            onChange={handleChange}
            value={state?.nationality}
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

export default NextOfKin;
