import React, { useEffect, useState } from "react";
import { Button } from "@/components";
import { BsArrowLeft } from "react-icons/bs";
import Details from "@/components/modal/application/pages/YourDetails/Details";
import Form from "@/components/modal/application/pages/YourDetails/Form";
import { setDoc, collection, doc, updateDoc } from "firebase/firestore";
import CFirebase from "@/configs/Firebase";

const YourDetails = ({ handleCloseModal, switchToPrevious, switchToNext }) => {
  const [state, setState] = useState({
    personal: {
      first: "",
      second: "",
      surname: "",
      dob: "",
      gender: "",
      n_id: "",
      maritalStatus: "",
      church: "",
      disability: "",
    },
    contact: {
      fName: "",
      email: "",
      nationality: "",
      county: "",
      town: "",
    },
    nextOfKin: {
      first: "",
      second: "",
      relationship: "",
      phone: "",
      email: "",
      n_id: "",
      nationality: "",
      county: "",
      town: "",
    },
    education: {
      school: "", //string
      years: "", //number(2 etc);
      qualification: "",
    },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("application"));
    setState(d?.data);
  }, []);

  const handlePersonalDataChange = (e) => {
    const { name, value } = e?.target;

    setState((prev) => ({
      ...prev,
      personal: {
        ...prev?.personal,
        [name]: value,
      },
    }));
  };

  const handleContactDataChange = (e) => {
    const { name, value } = e?.target;

    setState((prev) => ({
      ...prev,
      contact: {
        ...prev?.contact,
        [name]: value,
      },
    }));
  };
  const handleNokDataChange = (e) => {
    const { name, value } = e?.target;

    setState((prev) => ({
      ...prev,
      nextOfKin: {
        ...prev?.nextOfKin,
        [name]: value,
      },
    }));
  };
  const handleEducationDataChange = (e) => {
    const { name, value } = e?.target;

    setState((prev) => ({
      ...prev,
      education: {
        ...prev?.education,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    const d = JSON.parse(localStorage.getItem("application"));
    localStorage.setItem(
      "application",
      JSON.stringify({
        ...d,
        data: state,
      })
    );

    setLoading(true);

    setDoc(doc(CFirebase.db, "application"), {
      ...state,
    })
      .then((r) => {
        console.log("Details saved!", r?.id);
        window.alert("Details saved.");

        setLoading(false);
      })
      .catch((err) => {
        console.error("File save error", err);
        window.alert("Document not saved.", err?.message);
        setLoading(false);
      });
  };

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
        <Form
          state={state}
          handlePersonalDataChange={handlePersonalDataChange}
          handleEducationDataChange={handleEducationDataChange}
          handleNokDataChange={handleNokDataChange}
          handleContactDataChange={handleContactDataChange}
        />
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
            onClick={handleSave}
            className={`bg-c-red outline-none text-white py-2 md:py-3 px-4 md:px-12 text-sm font-semibold ${
              loading && "opacity-60"
            }`}
            disabled={loading}
            text={loading ? "Saving..." : "Continue"}
          />
        </div>
      </div>
    </div>
  );
};

export default YourDetails;
