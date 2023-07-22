import React from "react";

const PersonalForm = ({ state, handleChange }) => {
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
            name={"first"}
            value={state?.first}
            onChange={handleChange}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Second Name</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
            name={"second"}
            value={state?.second}
            onChange={handleChange}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Surname</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
            name={"surname"}
            value={state?.surname}
            onChange={handleChange}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Date of Birth</h6>

          <input
            type={"date"}
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
            name={"dob"}
            value={state?.dob}
            onChange={handleChange}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Gender</h6>

          <div className={"flex gap-2 pt-5"}>
            <RadioInput
              name={"gender"}
              text={"Male"}
              value={"male"}
              isChecked={state?.gender === "male"}
              onChange={handleChange}
            />
            <RadioInput
              name={"gender"}
              text={"Female"}
              value={"female"}
              isChecked={state?.gender === "male"}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>National ID/Passport</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
            name={"n_id"}
            value={state?.n_id}
            onChange={handleChange}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Marital Status</h6>

          <select
            id="marital-status"
            className="bg-inherit border-b border-gray-400 text-gray-900 rounded-none focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            name={"maritalStatus"}
            onChange={handleChange}
            value={state?.maritalStatus}
          >
            <option selected>Select</option>
            <option value="married">Married</option>
            <option value="">Not married</option>
          </select>
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Denomination/Church</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
            name={"church"}
            onChange={handleChange}
            value={state?.church}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Disability(if any)</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
            name={"disability"}
            onChange={handleChange}
            value={state?.disability}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
const RadioInput = ({ isChecked, text, ...rest }) => {
  return (
    <div className="flex items-center">
      <input
        checked={isChecked}
        id="default-radio-2"
        type="radio"
        value=""
        name="default-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...rest}
      />
      <label htmlFor="default-radio-2" className="ml-2 text-lg  text-c-blue">
        {text}
      </label>
    </div>
  );
};
