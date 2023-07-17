import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import Spinner from "@/components/general/Spinner";
import AdminLayout from "@/layout/AdminLayout";
import { doc, getDoc, setDoc } from "firebase/firestore";
import CFirebase from "@/configs/Firebase";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    qualifications: "",
    diploma: "",
    undergraduate: "",
    certificate: "",
    intakes: "",
  });

  const getItems = useCallback(async () => {
    setLoading(true);
    // setUploadedFiles([]);

    const data = await getDoc(doc(CFirebase.db, "pages", "admission"));

    setState(data?.data());
    // setUploadedFiles(list);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user?.accessToken) {
      getItems();
    }
  }, [user?.accessToken]);

  // delete saved data

  const handleSubmit = () => {
    setLoading(true);

    setDoc(doc(CFirebase.db, "pages", "admission"), {
      ...state,
    })
      .then((r) => {
        console.log("Details saved!", r?.id);
        window.alert("Home page details updated.");

        setLoading(false);

        setState({
          qualifications: "",
          diploma: "",
          undergraduate: "",
          certificate: "",
          intakes: "",
        });

        getItems();
      })
      .catch((err) => {
        console.error("File save error", err);
        setLoading(false);
      });
  };

  return (
    <AdminLayout currentNav={"admissions"}>
      <div className={"bg-gray-100 flex justify-center "}>
        <div className={"w-full bg-white p-8 relative"}>
          {loading && (
            <div
              className={
                "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
              }
            >
              <Spinner text={loading ? "loading" : "loading"} />
            </div>
          )}
          {/*<Search />*/}

          <div className={"px-2 py-3"}>
            <div className={"flex justify-between py-2"}>
              <h5 className={"c-xl p-2 underline"}>ADMISSION PAGE</h5>
            </div>

            <div
              className={"min-h-20 rounded-xl bg-gray-100 p-5 relative my-4"}
            >
              {/*section 1*/}
              <div className={"my-2 w-full lg:w-3/5 flex flex-col gap-5"}>
                {/*section 1*/}
                {/*   Course qualifications  */}

                <div className={"flex flex-col gap-2"}>
                  <h5 className={"text-lg font-semibold"}>
                    Course Qualifications
                  </h5>

                  <div
                    className={
                      "border border-gray-400 rounded overflow-hidden bg-white p-3"
                    }
                  >
                    <textarea
                      rows={6}
                      type="text"
                      className={"h-auto w-full focus:outline-none text-sm"}
                      value={state?.qualifications}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          qualifications: e?.target?.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className={"pl-5"}>
                  <h5 className={"text-base font-semibold"}>Undergraduate</h5>

                  <div
                    className={
                      "border border-gray-400 rounded overflow-hidden bg-white p-3"
                    }
                  >
                    <textarea
                      rows={6}
                      type="text"
                      className={
                        "min-h-16 w-full h-full focus:outline-none text-sm"
                      }
                      value={
                        // "All undergraduate courses require a KCSE grade of C+ or Diploma in Bible and Theology and go for Ksh 7,500.\n" +
                        // "\n" +
                        // "Find out the specific qualification needed in each particular course by selecting a course you are interested in."
                        state?.undergraduate
                      }
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          undergraduate: e?.target?.value,
                        }))
                      }
                    />
                  </div>
                </div>

                {/*diploma*/}
                <div className={"pl-5"}>
                  <h5 className={"text-base font-semibold"}>Diploma</h5>

                  <div
                    className={
                      "border border-gray-400 rounded overflow-hidden bg-white p-3"
                    }
                  >
                    <textarea
                      rows={6}
                      type="text"
                      className={
                        "min-h-16 w-full h-full focus:outline-none text-sm"
                      }
                      value={state?.diploma}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          diploma: e?.target?.value,
                        }))
                      }
                    />
                  </div>
                </div>

                {/*certificate*/}
                <div className={"pl-5"}>
                  <h5 className={"text-base font-semibold"}>Certificate</h5>

                  <div
                    className={
                      "border border-gray-400 rounded overflow-hidden bg-white p-3"
                    }
                  >
                    <textarea
                      rows={6}
                      type="text"
                      className={
                        "min-h-16 w-full h-full focus:outline-none text-sm"
                      }
                      value={state?.certificate}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          certificate: e?.target?.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/*Admission Intakes*/}
              <div className={"flex flex-col gap-2"}>
                <h5 className={"text-lg font-semibold"}>Our Intakes</h5>

                <div
                  className={
                    "border border-gray-400 rounded overflow-hidden bg-white p-3"
                  }
                >
                  <textarea
                    rows={6}
                    type="text"
                    className={"h-auto w-full focus:outline-none text-sm"}
                    value={state?.intakes}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        intakes: e?.target?.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className={"flex"}>
                <button
                  onClick={handleSubmit}
                  className={
                    "bg-blue-800 h-12 w-full text-white lg:w-3/5 text-center rounded-md mx-auto mt-5 mx-auto"
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </AdminLayout>
  );
};

export default Index;
