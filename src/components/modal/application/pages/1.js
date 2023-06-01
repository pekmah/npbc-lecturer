import React, { useState } from "react";
import AppStages from "@/components/modal/application/pages/welcome/AppStages";
import CompleteLater from "@/components/modal/application/pages/welcome/CompleteLater";
import NeedHelp from "@/components/modal/application/pages/welcome/NeedHelp";
import { Button } from "@/components";
import { BsArrowLeft } from "react-icons/bs";

/**
 * @param {function} switchModal
 * @returns {JSX.Element}
 * @constructor
 */

const Welcome = ({ switchModal, handleCloseModal, switchToNext }) => {
  const [name, setName] = useState("");

  const handleChangeName = async (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("application", JSON.stringify({ name1: name }));
    window.alert("Name saved");
  };
  return (
    <div className={"text-c-blue w-full "}>
      <div className={"flex "}>
        {/*    Details      */}
        <div className={"flex items-center flex-col flex-1"}>
          <h4 className={"text-2xl md:c-h5 font-bold"}>Welcome to NPBC</h4>

          <p className={"text-lg md:c-xl mt-4 font-semibold leading-6"}>
            We are glad to see you want to learn with us
          </p>
        </div>

        <Button className={"p-3"} onClick={switchToNext}>
          <BsArrowLeft className={"text-2xl rotate-180"} />
        </Button>
      </div>

      <div className={"flex flex-col md:flex-row gap-5 py-8"}>
        {/*    Application stages   */}
        <AppStages switchModal={switchModal} />

        {/*Complete later*/}
        <CompleteLater
          handleSave={handleSave}
          name={name}
          handleChange={handleChangeName}
        />

        {/*    Need help    */}
        <NeedHelp />
      </div>

      {/*    buttons  */}
      <div className={"flex gap-4 justify-end"}>
        <Button
          onClick={handleCloseModal}
          className={
            "bg-c-red-pale text-c-red py-2 px-14 text-sm font-semibold"
          }
          text={"close"}
        />
        <Button
          className={"bg-c-red text-white py-2 px-12 text-sm font-semibold"}
          text={"Get Started"}
          onClick={switchToNext}
        />
      </div>
      <div className={"h-20 md:hidden"} />
    </div>
  );
};

export default Welcome;
