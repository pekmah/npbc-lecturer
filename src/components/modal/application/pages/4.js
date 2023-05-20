import React from "react";
import { Button } from "@/components";
import { BsArrowLeft } from "react-icons/bs";
import Details from "@/components/modal/application/pages/YourDetails/Details";
import Form from "@/components/modal/application/pages/YourDetails/Form";

const YourDetails = ({ handleCloseModal, switchToPrevious, switchToNext }) => {
  return (
    <div className={"text-c-blue w-full"}>
      {/*    Details      */}
      <div className={"flex"}>
        <Button className={"p-3"} onClick={switchToPrevious}>
          <BsArrowLeft className={"text-2xl"} />
        </Button>

        <div className={"flex items-center flex-col flex-1 text-center"}>
          <h4 className={"text-[21px] md:c-h5 font-bold md:w-2/3 mx-auto"}>
            Fill in your correct details to complete your application
          </h4>
        </div>

        <Button className={"p-3"} onClick={switchToNext}>
          <BsArrowLeft className={"text-2xl rotate-180"} />
        </Button>
      </div>

      <div className={"flex gap-5 py-8 border-b border-gray-400"}>
        {/*    Details section  */}
        <Details />

        {/*Form*/}
        <Form />
      </div>

      {/*    buttons  */}
      <div className={"flex py-3"}>
        <Button className={"text-sm text-gray-500 font-bold"}>
          Need Help?
        </Button>
        <div className={"flex gap-4 justify-end flex-1"}>
          <Button
            onClick={handleCloseModal}
            className={
              "bg-c-red-pale text-c-red py-2 md:py-3 px-4 md:px-14 text-sm font-semibold"
            }
            text={"close"}
          />
          <Button
            className={
              "bg-c-red outline-none text-white py-2 md:py-3 px-4 md:px-12 text-sm font-semibold"
            }
            text={"Continue"}
          />
        </div>
      </div>
    </div>
  );
};

export default YourDetails;
