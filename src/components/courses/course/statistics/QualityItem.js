import React from "react";

const QualityItem = ({ icon, title }) => {
  return (
    <div className="flex flex-col flex-1 items-center gap-3">
      {/* icon */}
      <div className="h-12 md:h-16 w-12 md:w-16 p-3 rounded-full bg-c-blue flex items-center justify-center">
        {icon}
      </div>
      {/* title */}
      <h6 className="text-sm font-semibold">{title}</h6>
    </div>
  );
};

export default QualityItem;
