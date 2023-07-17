import React from "react";
import TextInput from "@/components/TextInput";

const InputItem = ({
  title,
  textvalue,
  className,
  subSize = "text-lg",
  ...rest
}) => {
  return (
    <div className={"flex flex-col gap-2 " + className}>
      <h5 className={`${subSize} font-semibold`}>{title}</h5>

      <TextInput value={textvalue} {...rest} />
    </div>
  );
};

export default InputItem;
