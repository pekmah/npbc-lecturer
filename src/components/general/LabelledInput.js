import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LabelledInput = ({
  containerClassName,
  inputClassName,
  labelClassName,
  title,
  placeholder,
  id,
  type = "text",
  required,
  ...rest
}) => {
  return (
    <div
      className={`grid w-full max-w-xl items-center gap-1.5 ${containerClassName}`}
    >
      <Label className={`text-c-blue ${labelClassName}`} htmlFor={id}>
        {title} {required && <span className={"text-red-600"}>*</span>}
      </Label>
      <Input
        className={`w-full ${inputClassName}`}
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </div>
  );
};

export default LabelledInput;
