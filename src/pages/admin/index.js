import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import { Table } from "@/components/admin/home";
import { Button } from "@/components";
import { AiOutlineUpload } from "react-icons/ai";
import CFirebase from "@/configs/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);

  // console.log(urls);
  // upload files
  const upload = () => {
    if (!files) return;

    files.forEach((file) => {
      const storageRef = ref(CFirebase.storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(prog);
        },
        (err) => console.error(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrls((prev) => [...prev, url]);
            console.log("URL", url);
            console.log("FILE IS: ", file);
          });
        }
      );
    });
  };

  useEffect(() => {
    if (!user?.accessToken) {
      // setIsChecked(true);
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
                onChange={(e) => setFiles([...e.target.files])}
              />

              <Button
                className={
                  "bg-c-blue w-40 text-white text-sm flex items-center justify-center gap-1"
                }
                onClick={upload}
              >
                Upload file(s) <AiOutlineUpload className={"text-xl"} />
              </Button>
            </div>

            <div className="progress bg-gray-200 my-2 rounded-full overflow-hidden">
              <div
                className="progress-bar bg-c-blue text-white text-center "
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`  ${progress}%`}
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
