import React from "react";

const ProgramChoice = ({ current, setCurrent }) => {
  return (
    <div className={"flex-1 hidden md:flex flex-col"}>
      <h6 className={"c-medium font-bold text-c-blue px-3"}>
        Program of choice
      </h6>

      <div className={"px-3 border-l border-l-gray-400 my-4 flex-1"}>
        <ul className={"py-3 flex flex-col "}>
          {programs?.map((prog, key) => (
            <li
              key={key}
              className={
                "py-2 focus:outline-none text-sm font-semibold flex gap-4"
              }
            >
              <input
                onClick={() => setCurrent(prog?.split(" ")[0]?.toLowerCase())}
                checked={current === prog?.split(" ")[0]?.toLowerCase()}
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="focus:border-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                // htmlFor="default-radio-1"
                className={`ml-2 text-sm font-medium ${
                  current === prog?.split(" ")[0]?.toLowerCase()
                    ? "text-c-blue"
                    : "text-gray-400"
                } `}
              >
                {prog}
              </label>
              {/*{JSON.stringify(current === prog?.split(" ")[0]?.toLowerCase())}*/}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramChoice;

const programs = [
  "certificate",
  "Associate Diploma",
  "Diploma",
  "Undergraduate Programs",
  "Postgraduate Diploma",
];
