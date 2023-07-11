import React, { useState } from "react";
import InputItem from "@/components/admin/InputItem";

const AdminCarousel = () => {
  const [numberOfRows, setNumberOfRows] = useState(3);
  return (
    <div className={"min-h-20 rounded-xl bg-gray-100 p-5 relative my-4"}>
      {/*section 1*/}
      <div className={"my-2 w-full lg:w-3/5 flex flex-col gap-5"}>
        {/*  We are registered by the Ministry of Education as a private TVET
          institution since 2018 */}
        <InputItem
          title={
            "We are registered by the Ministry of Education as a private TVET\n" +
            "          institution since 2018"
          }
        />

        {/*section 2*/}
        {/*    life at npbc */}
        <InputItem title={"Life at Npbc"} />

        {/*section 3*/}
        {/*   Apply for admission  */}
        <div className={"flex flex-col gap-2"}>
          <h5 className={"text-lg font-semibold"}>Apply for admission</h5>

          <InputItem
            title={"Text 1"}
            className={"pl-5"}
            subSize={"text-base"}
          />

          <InputItem
            title={"Text 2"}
            className={"pl-5"}
            subSize={"text-base"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCarousel;

const Title = ({ title }) => (
  <div className={"px-3 py-1 absolute -top-4 left-3 bg-white font-medium "}>
    <span>{title}</span>
  </div>
);
