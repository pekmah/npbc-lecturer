import React from "react";

const CourseItem = ({ style, title, line, children }) => {
  return (
    <div className="relative h-[350px] w-1/4" style={style}>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
        <span
          className="c-h6 text-2xl leading-10 text-white"
          data-aos="fade-up"
        >
          {title || children}
        </span>
      </div>

      {line}
    </div>
  );
};

export default CourseItem;

const Line = () => (
  <div className={"rounded-full bg-white w-2 top-0 bottom-0 right-0"} />
);
