import UploadInput from "@/components/application/UploadInput";
import CFirebase from "@/configs/Firebase";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const UploadForm = ({
  handleIdUpload,
  handleCertificateUpload,
  handlePassportUpload,
  idUrl,
  passportUrl,
  certificateUrl,

  handleRemoveFile,
}) => {
  const [loading, setUploading] = useState(false);
  const [current, setCurrent] = useState(null);

  /**
   *
   * @param {file} file
   * @param {string} cType
   * @returns
   */
  const uploadFile = async (file, cType) => {
    if (!file) return;
    setUploading(true);
    setCurrent(cType);

    // files.forEach((file) = > {
    const storageRef = ref(
      CFirebase.storage,
      `/admission_files/${file?.data?.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file?.data);

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
          if (current === "id") {
            handleIdUpload({
              url,
              fileType: file?.data?.type,
              size: file?.data?.size,
            });
          } else if (current === "certificate") {
            handleCertificateUpload({
              url,
              fileType: file?.data?.type,
              size: file?.data?.size,
            });
          } else if (current === "passport") {
            handlePassportUpload({
              url,
              fileType: file?.data?.type,
              size: file?.data?.size,
            });
          }

          setUploading(false);
          setCurrent(null);
        });
      }
    );
    // });
  };

  return (
    <div className={"p-3 md:p-5 border border-gray-300"}>
      <h6 className={"font-bold text-lg"}>Uploads</h6>

      {/*    form     */}
      <form
        className={
          "grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 text-c-blue mt-2"
        }
        action=""
      >
        <UploadInput
          title={"National ID/Passport"}
          handleChangeFile={(file) => uploadFile(file, "id")}
          isUploading={current === "id" && loading}
          uploadUrl={idUrl}
          handleRemoveImage={() => handleRemoveFile("id")}
        />

        <UploadInput
          title={"High School Certificate / Results"}
          handleChangeFile={(file) => uploadFile(file, "certificate")}
          isUploading={current === "certificate" && loading}
          uploadUrl={certificateUrl}
          handleRemoveImage={() => handleRemoveFile("certificate")}
        />

        <UploadInput
          title={"Passport size photo"}
          handleChangeFile={(file) => uploadFile(file, "passport")}
          isUploading={current === "passport" && loading}
          uploadUrl={passportUrl}
          handleRemoveImage={() => handleRemoveFile("passport")}
        />
      </form>
    </div>
  );
};

export default UploadForm;
