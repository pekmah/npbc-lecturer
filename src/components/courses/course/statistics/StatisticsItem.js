import React from "react";

const StatisticsItem = ({ superText, subText, className }) => {
  return (
    <div className={`text-c-blue flex flex-col gap-2 flex-1 ${className}`}>
      <h4 className="c-h7 text-2xl md:text-3xl font-medium">{superText}</h4>

      <span className="font-medium text-sm md:text-base">{subText}</span>
    </div>
  );
};

export default StatisticsItem;
