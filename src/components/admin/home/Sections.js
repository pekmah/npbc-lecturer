import React, { useCallback, useContext, useEffect, useState } from "react";
import InputItem from "@/components/admin/InputItem";
import { doc, getDoc, setDoc } from "firebase/firestore";
import CFirebase from "@/configs/Firebase";
import Spinner from "@/components/general/Spinner";
import { Context } from "@/storage/MainContext";

const SectionOne = () => {
  const { user, setUser } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    weAreRegistered: "",
    npbcLife: "",
    applyAdmn: {
      txt1: "",
      txt2: "",
    },
  });

  const getItems = useCallback(async () => {
    setLoading(true);
    // setUploadedFiles([]);

    const data = await getDoc(doc(CFirebase.db, "pages", "home"));

    setState(data?.data());
    // setUploadedFiles(list);
    setLoading(false);
  }, []);

  const handleSubmit = () => {
    setLoading(true);

    setDoc(doc(CFirebase.db, "pages", "home"), {
      ...state,
    })
      .then((r) => {
        console.log("Details saved!", r?.id);
        window.alert("Home page details updated.");

        setLoading(false);

        setState({
          weAreRegistered: "",
          npbcLife: "",
          applyAdmn: {
            txt1: "",
            txt2: "",
          },
        });

        getItems();
      })
      .catch((err) => {
        console.error("File save error", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user?.accessToken) {
      // setIsChecked(true);

      getItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"min-h-20 rounded-xl bg-gray-100 p-5 relative my-4"}>
      {loading && (
        <div
          className={
            "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
          }
        >
          <Spinner text={loading ? "loading" : "loading"} />
        </div>
      )}
      {/*section 1*/}
      <div className={"my-2 w-full lg:w-3/5 flex flex-col gap-5"}>
        {/*  We are registered by the Ministry of Education as a private TVET
          institution since 2018 */}
        <InputItem
          title={
            "We are registered by the Ministry of Education as a private TVET\n" +
            "          institution since 2018"
          }
          onChange={(e) => {
            setState((prev) => ({ ...prev, weAreRegistered: e.target?.value }));
            // console/.log(e?.target.value);
          }}
          value={state?.weAreRegistered}
        />

        {/*section 2*/}
        {/*    life at npbc */}
        <InputItem
          title={"Life at Npbc"}
          onChange={(e) => {
            setState((prev) => ({ ...prev, npbcLife: e.target?.value }));
          }}
          value={state?.npbcLife}
        />

        {/*section 3*/}
        {/*   Apply for admission  */}
        <div className={"flex flex-col gap-2"}>
          <h5 className={"text-lg font-semibold"}>Apply for admission</h5>

          <InputItem
            title={"Text 1"}
            className={"pl-5"}
            subSize={"text-base"}
            onChange={(e) => {
              setState((prev) => ({
                ...prev,
                applyAdmn: {
                  ...prev.applyAdmn,
                  txt1: e.target?.value,
                },
              }));
            }}
            value={state?.applyAdmn?.txt1}
          />

          <InputItem
            title={"Text 2"}
            className={"pl-5"}
            subSize={"text-base"}
            onChange={(e) => {
              setState((prev) => ({
                ...prev,
                applyAdmn: {
                  ...prev.applyAdmn,
                  txt2: e.target?.value,
                },
              }));
            }}
            value={state?.applyAdmn?.txt2}
          />
        </div>

        <div className={"flex-1 flex w-full "}>
          <button
            onClick={handleSubmit}
            className={
              "bg-blue-800 h-12 w-full text-white lg:w-3/5 text-center rounded-md mx-auto"
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

const Title = ({ title }) => (
  <div className={"px-3 py-1 absolute -top-4 left-3 bg-white font-medium "}>
    <span>{title}</span>
  </div>
);
