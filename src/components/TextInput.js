import React from "react";

const TextInput = ({ value }) => {
  return (
    <div
      className={"border border-gray-400 rounded overflow-hidden bg-white p-3"}
    >
      <textarea
        rows={2}
        type="text"
        className={"w-full h-full focus:outline-none text-sm"}
        value={value}
      />
    </div>
  );
};

export default TextInput;
