import React from "react";

const BreadCrumb = ({ icon, title }) => {
  return (
    <div className="flex gap-4 items-center m-2">
      <div className="p-2 bg-white">{icon}</div>

      <span className="font-bold">{title}</span>
    </div>
  );
};

export default BreadCrumb;