import React from "react";

const OccupationForm = () => {
  return (
    <div className={"p-3 md:p-5 border border-gray-300"}>
      <h6 className={"font-bold text-lg"}>Occupation</h6>

      {/*    form     */}
      <form
        className={
          "grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 text-c-blue mt-2"
        }
        action=""
      >
        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Occupation Type</h6>

          <select
            id="countries"
            className="bg-inherit border-b border-gray-400 text-gray-900 rounded-none focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          >
            <option selected>Select</option>
            {programs?.map((item, key) => (
              <option key={key} value="1">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Company/institution</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>

        <div className={""}>
          {/*    label    */}
          <h6 className={"font-medium"}>Role/crouse</h6>

          <input
            className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}
          />
        </div>
      </form>
    </div>
  );
};

export default OccupationForm;

const programs = [
  "certificate",
  "Associate Diploma",
  "Diploma",
  "Undergraduate Programs",
  "Postgraduate Diploma",
];
