import React from "react";

const Input = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={`mt-1 bg-inherit w-full h-10 border-b border-gray-400 ${className}`}
    />
  );
};

export default Input;
