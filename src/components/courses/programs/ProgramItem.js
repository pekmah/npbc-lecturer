import React from 'react'

const ProgramItem = ({icon, title, desc}) => {
  return (
    <div
      className="h-[280px] shrink-0 bg-white w-48 md:w-1/5 rounded flex flex-col items-center p-4 gap-4"
      style={{
        boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/** icon */}
      {icon}
      {/** title */}
      <h5 className="c-xl text-c-blue text-[17px] font-bold">{title}</h5>
      {/** Desc */}
      <p className="text-sm">{desc}</p>
    </div>
  );
}

export default ProgramItem
