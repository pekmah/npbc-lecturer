import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

/**
 * @param {{children:JSX.Element}} props
 * @return {JSX.Element}
 * @constructor
 */
function Body({ children }) {
  return (
    <div
      className={
        "md:ml-[25%] w-full md:w-3/4 h-full overflow-y-scroll py-2 md:py-10"
      }
    >
      {/*Search && Description*/}
      <div className={"flex flex-col items-center "}>
        {/*Spacer*/}
        <div className={"h-28 hidden md:flex"} />

        {/*    Search   */}
        <div className={"flex items-center p-2 gap-2 border-b border-gray-500"}>
          {/*    Search icon     */}
          <AiOutlineSearch className={"text-xl text-gray-600"} />
          {/*    input    */}
          <input
            className={"text-sm h-8 bg-inherit"}
            placeholder={"Search Material"}
          />
        </div>

        {/*Desc*/}
        <p className={"text-sm text-c-blue text-center py-3 font-medium"}>
          We are committed to making every resource that you need whether as a
          student, aspiring student, partner or graduate easily accessible and
          available in the simplest way possible. This page contains all the
          document material we avail to everyone without the need of an account
          to access them. Feel free to make inquiry about anything you are
          looking for.
        </p>

        {/*Spacer*/}
        <div className={"h-5 md:h-20"} />

        {/*    Children     */}
        <div
          className={
            "max-w-[100vw] overflow-x-scroll w-full flex flex-col gap-8"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Body;
