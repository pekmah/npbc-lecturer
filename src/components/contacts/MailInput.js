import React from "react";

/**
 * @param {string} title
 * @return {JSX.Element}
 * @constructor
 */
const MailInput = ({ title, ...rest }) => {
  return (
    <div className={" w-11/12 mx-auto md:mx-0 md:w-[47%]"}>
      {/*    Name     */}
      <h3 className={"font-semibold "}>{title}</h3>

      <input
        className={
          "border-b border-gray-400 w-full h-10 bg-inherit focus:outline-none"
        }
        {...rest}
      />
    </div>
  );
};

export default MailInput;
