import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import Spinner from "@/components/general/Spinner";
import Uploader from "@/components/admin/home/Uploader";
import AdminLayout from "@/layout/AdminLayout";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [editState, setEditState] = useState({});

  useEffect(() => {
    if (!user?.accessToken) {
      // setIsChecked(true);
      // push("/admin/login");
    }
  }, [user?.accessToken]);

  // delete saved data

  return (
    <AdminLayout currentNav={"admissions"}>
      {isOpen && (
        <Uploader
          isEditing={!!editState?.name}
          editState={editState}
          resetEdit={() => setEditState({})}
          getItems={getItems}
          handleClose={() => setIsOpen(false)}
        />
      )}

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
                      className={
                        "h-auto w-full focus:outline-none text-sm"
                      }
                      value={
                        "We have courses for everyone with any level of qualification and educational background At NPBC, we are committed to providing a high-quality education in biblical studies and ministry training. In order to ensure that our students are well-prepared for their future ministry work."
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
                        "All undergraduate courses require a KCSE grade of C+ or Diploma in Bible and Theology and go for Ksh 7,500.\n" +
                        "\n" +
                        "Find out the specific qualification needed in each particular course by selecting a course you are interested in."
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
                      value={
                        "Diploma courses generally require C- or KCE division II, KACE one (1) Principal or an equivalent qualification or Certificate of Experiential Learning or KNQF 5.\n" +
                        "\n" +
                        "The fee ranges from 1500Ksh to 2000 Ksh per course depending on the course you choose but more specific details are found in the courses page."
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
                      value={
                        "Certificate courses are open to everyone with any level of qualification at a fee of Ksh 1,100.\n" +
                        "\n" +
                        "Find out the specific qualification needed in each particular course by selecting a course you are interested in."
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
                    className={
                      "h-auto w-full focus:outline-none text-sm"
                    }
                    value={
                      "Intake is now open\n\n" +
                      "We have continuous intakes through out the year. The major intakes happens in January, april, may, August, September & November.\n" +
                      "\n" +
                      "Our application process is clear and simple so you can apply from anywhere."
                    }
                  />
                </div>
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
