import React, { useEffect, useMemo, useState } from "react";
import UploadForm from "@/components/admin/home/UploadForm";
import { Button } from "@/components";
import { MdClose } from "react-icons/md";
import Spinner from "@/components/general/Spinner";
import CFirebase from "@/configs/Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const Uploader = ({
  handleClose,
  getItems,
  isEditing,
  editState,
  resetEdit,
}) => {
  const [state, setState] = useState({
    name: "",
    purpose: "",
    type: null,
    page: "downloads",
    size: null,
    fileType: "",
    url: "",
  });
  const [files, setFiles] = useState();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState({
    type: "", //base64/file
    data: "", //base64 url / file
  });

  useEffect(() => {
    if (isEditing) {
      setState(editState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isValid = useMemo(() => {
    if (file && state?.name && state?.purpose && state?.type) {
      return true;
    } else {
      return false;
    }
  }, [state, file]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  // upload files
  /**
   * @desc uploads documents to firebase file storage
   * @return void
   */
  const upload = async () => {
    if (!file) return;
    setUploading(true);

    // files.forEach((file) => {
    const storageRef = ref(CFirebase.storage, `/files/${file?.data?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file?.data);
    // const uploadTask = uploadString(storageRef, file?.data);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // setProgress(prog);
      },
      (err) => console.error(err),
      () => {
        getDownloadURL(storageRef).then((url) => {
          setState((prev) => ({
            ...prev,
            url,
            fileType: file?.data?.type,
            size: file?.data?.size,
          }));

          addDoc(collection(CFirebase.db, "projects"), {
            ...state,
            url,
            fileType: file?.data?.type,
            size: file?.data?.size,
          })
            .then((r) => {
              console.log("Upload Success!", r.id);
              window.alert("Urls saved.");

              setUploading(false);
              setFile({});
              setState({
                name: "",
                purpose: "",
                type: "",
              });
              handleClose();

              getItems();
            })
            .catch((err) => {
              console.error("File save error", err);
              setLoading(false);
            });
        });
      }
    );
    // });
  };

  const handleUpdate = () => {
    setLoading(true);

    const docRef = doc(CFirebase.db, "projects", editState?.id);

    updateDoc(docRef, {
      name: state?.name,
      purpose: state?.purpose,
      type: state?.type,
    })
      .then((r) => {
        // console.log("Update successful!", r.id);
        window.alert("Update successful.");

        setLoading(false);
        setFile({});
        setState({});
        handleClose();
        resetEdit();
        getItems();
      })
      .catch((err) => {
        console.error("File save error", err);
        setLoading(false);
        resetEdit();
      });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // console.log(editState);
    // return;
    if (isEditing) {
      handleUpdate();
    } else {
      upload();
    }
  };
  return (
    <div
      className={
        "fixed top-0 right-0 bottom-0 left-0 z-50 bg-[#00000090] max-h-screen p-1 md:p-4 max-w-screen flex justify-center"
      }
    >
      <div
        className={
          "bg-slate-50 h-full w-11/12 sm:w-3/4  md:w-3/5 lg:w-1/2  overflow-x-hidden rounded p-10 relative"
        }
      >
        {(loading || uploading) && (
          <div
            className={
              "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
            }
          >
            <Spinner
              text={
                loading
                  ? isEditing
                    ? "Updating"
                    : "loading"
                  : uploading
                  ? "uploading"
                  : "loading"
              }
            />
          </div>
        )}
        <Button
          className={"absolute top-5 right-5 text-2xl rounded-full h-10 w-10"}
          onClick={handleClose}
        >
          <MdClose />
        </Button>
        <div>
          <h2 className={"font-semibold text-2xl"}>Downloads upload form</h2>
          <p className={"font-semibold text-slate-500"}>
            Please fill in the details below and attach the file to be uploaded
          </p>

          <hr className={"h-3 mt-3"} />
        </div>

        <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
          <Input
            label={"File name"}
            type={"text"}
            name={"name"}
            onChange={handleChange}
            value={state?.name}
          />

          <TextArea
            label={"Description / purpose"}
            type={"text"}
            name={"purpose"}
            onChange={handleChange}
            value={state?.purpose}
            rows={3}
          />

          <Input
            label={"Page"}
            disabled
            type={"text"}
            name={"page"}
            onChange={handleChange}
            value={"Downloads"}
          />

          <Select
            name={"type"}
            onChange={(e) => handleChange(e)}
            label={"Type"}
            value={state?.type}
          />

          {!isEditing && (
            <UploadForm
              handleChangeFile={(data) => setFile(data)}
              file={file}
            />
          )}

          <div className={"flex justify-end gap-4 text-white text-sm"}>
            <Button
              onClick={() => {
                handleClose();
                resetEdit();
              }}
              className={"bg-c-red w-28"}
            >
              Cancel
            </Button>
            <Button
              type={"submit"}
              className={`bg-c-blue w-28 ${
                !isValid && "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              {isEditing ? "Update" : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Uploader;

const Input = ({ label, disabled, ...rest }) => (
  <div className={"w-full"}>
    {/*    label    */}
    <h6 className={"font-semibold text-md mb-2"}>{label}</h6>

    {/*    input  */}
    <input
      className={`border border-slate-400 rounded-md h-9 bg-slate-50 w-full px-3 text-sm ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
      {...rest}
      disabled={disabled}
    />
  </div>
);

const TextArea = ({ label, disabled, ...rest }) => (
  <div className={"w-full"}>
    {/*    label    */}
    <h6 className={"font-semibold text-md mb-2"}>{label}</h6>

    {/*    input  */}
    <textarea
      className={`border border-slate-400 rounded-md bg-slate-50 w-full px-3 text-sm ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
      {...rest}
      disabled={disabled}
    />
  </div>
);

const Select = ({ label, disabled, ...rest }) => (
  <div className={"w-full text-sm"}>
    {/*    label    */}
    <h6 className={"font-semibold text-md mb-2"}>{label}</h6>

    {/*    input  */}
    <select
      className={`border border-slate-400 rounded-md h-9 bg-slate-50 w-full px-3 text-sm `}
      name="languages"
      id="lang"
      {...rest}
    >
      <option value="">--select upload type--</option>
      <option value="1">Program pamphlet</option>
      <option value="2">Admission Form</option>
      <option value="3">Fee structure</option>
      <option value="0">Other material</option>
    </select>
  </div>
);
