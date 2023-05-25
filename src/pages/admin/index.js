import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import { Table } from "@/components/admin/home";
import { Button } from "@/components";
import { AiOutlineUpload } from "react-icons/ai";
import CFirebase from "@/configs/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Spinner from "@/components/general/Spinner";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // upload files
  /**
   * @desc uploads documents to fireabase file storage
   * @return void
   */
  const upload = () => {
    if (!files) return;
    setUploading(true);

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
            setUrls((prev) => [
              ...prev,
              { url, name: file?.name, type: file?.type, size: file?.size },
            ]);
          });
        }
      );
    });
    setUploading(false);
    setFiles([]);
  };
  const getItems = async () => {
    setLoading(true);
    setUploadedFiles([]);

    const querySnapshot = await getDocs(collection(CFirebase.db, "projects"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc?.data());

      // if (!uploadedFiles?.some((item) => item?.id === doc.id)) {
      setUploadedFiles((prev) => [...prev, { id: doc.id, ...doc.data() }]);
      // }
    });
    setLoading(false);
  };
  const handleSaveURLs = async () => {
    setLoading(true);

    for (const item of urls) {
      addDoc(collection(CFirebase.db, "projects"), {
        url: item?.url,
        name: item?.name,
        size: item?.size,
        type: item?.type,
      })
        .then((r) => {
          console.log("Upload Success!", r.id);
          window.alert("Urls saved.");

          setLoading(false);
          getItems();
        })
        .catch((err) => {
          console.error("File save error", err);
          setLoading(false);
        });
    }

    // reset urls
    setUrls([]);
  };

  useEffect(() => {
    if (!user?.accessToken) {
      // setIsChecked(true);
      push("/admin/login");
    } else {
      getItems();
    }
  }, []);

  return (
    <div className={"bg-gray-100 flex justify-center "}>
      <div className={"md:w-11/12 lg:w-10/12 xl:w-9/12 bg-white p-8 relative"}>
        {(loading || uploading) && (
          <div
            className={
              "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
            }
          >
            <Spinner
              text={loading ? "loading" : uploading ? "uploading" : "loading"}
            />
          </div>
        )}
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

            {urls?.length > 0 && (
              <Button
                className={
                  "bg-c-red w-40 text-white text-sm flex items-center justify-center gap-1"
                }
                onClick={handleSaveURLs}
              >
                Save ({urls?.length}) url(s)
              </Button>
            )}
          </div>

          <div className={"flex justify-between"}>
            <h5 className={"c-xl p-2 underline"}>Uploaded files</h5>
          </div>
          <Table
            headerList={["", "File name", "Type", "File Url", "Size"]}
            data={uploadedFiles}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
