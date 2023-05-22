import React from "react";

const PersonalForm = () => {
  return (
    <div className={"p-3 md:p-5 border border-gray-300"}>
      <h6 className={"font-bold text-lg"}>Personal Details</h6>

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

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Second Name</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Surname</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Date of Birth</h6>

          <input
            type={"date"}
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Second Name</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>National ID/Passport</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Marital Status</h6>

          <select
            id="countries"
            className="bg-inherit border-b border-gray-400 text-gray-900 rounded-none focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          >
            <option selected>Select</option>
            <option value="1">Married</option>
            <option value="2">Not married</option>
          </select>
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Denomination/Church</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Disability(if any)</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
