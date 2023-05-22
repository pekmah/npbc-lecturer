import React, { useContext, useEffect } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import { Table } from "@/components/admin/home";
import { Button } from "@/components";
import { AiOutlineUpload } from "react-icons/ai";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  useEffect(() => {
    if (!user?.accessToken) {
      push("/admin/login");
    }
  }, []);
  return (
    <div className={"bg-gray-100 flex justify-center "}>
      <div className={"md:w-11/12 lg:w-10/12 xl:w-9/12 bg-white p-8"}>
        {/*<Search />*/}

        <div className={"px-2 py-6"}>
          <label className="slab form-label">Documents</label>

          <div>
            <div className="flex items-center">
              <input
                className="form-control flex-1 h-full border border-gray-500 "
                type="file"
                id="formFileMultiple"
                multiple
                onChange={(e) => setImages([...e.target.files])}
              />

              <Button
                className={
                  "bg-c-blue w-40 text-white text-sm flex items-center justify-center gap-1"
                }
              >
                Upload file(s) <AiOutlineUpload className={"text-xl"} />
              </Button>
            </div>

            <div className="progress bg-gray-200 my-2 rounded-full overflow-hidden">
              <div
                className="progress-bar bg-c-blue text-white text-center "
                role="progressbar"
                style={{ width: `88%` }}
                aria-valuenow={88}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`  88%`}
              </div>
            </div>
          </div>

          <div className={"flex justify-between"}>
            <h5 className={"c-xl p-2 underline"}>Uploaded files</h5>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Index;
