import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Button } from "@/components/ui/button";

const ReadMoreBtn = () => {
  return (
    <Button className="bg-none p-0 m-0">
      <MdOutlineAdd className="text-c-red text-2xl" />
    </Button>
  );
};

export default ReadMoreBtn;
