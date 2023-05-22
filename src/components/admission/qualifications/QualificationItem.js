import React from "react";

const QualificationItem = ({ title, desc }) => {
  return (
    <div className="flex flex-col p-2 gap-3" data-aos="fade-up">
      {/**Title */}
      <hr className="bg-[#D9D9D9] h-[1.5px] rounded w-full" />

      <h6 className="font-medium text-c-blue">{title}</h6>

      <p className="text-sm text-c-blue">{desc}</p>
    </div>
  );
};

export default QualificationItem;
