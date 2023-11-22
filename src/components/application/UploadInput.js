import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Spinner from "@/components/general/Spinner";

const UploadInput = ({
  title,
  handleChangeFile,
  isUploading,
  uploadUrl,
  handleRemoveImage,
}) => {
  const inputRef = useRef();

  const onDrop = useCallback(async (acceptedFiles) => {
    let file = acceptedFiles[0];
    handleChangeFile({
      type: "file",
      data: file,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    // accept: { "*": [] },
    noClick: true,
    noKeyboard: true,
  });

  const handleUploadClick = () => {
    inputRef?.current?.click();
  };

  return (
    <div>
      {/*    label    */}
      <h6 className={"font-medium mb-2"}>{title}</h6>

      {!!uploadUrl ? (
        <a href={uploadUrl}>
          <div className={"flex gap-x-3 mt-6 items-center text-blue-600"}>
            <img
              className={"h-10 w-10"}
              src={"/images/admission/file.png"}
              alt={"file"}
            />
            <p className={"flex-1"}>{uploadUrl}</p>

            <button
              type={"button"}
              className={
                "flex bg-red-700 py-2 px-3 rounded text-xs text-white font-medium"
              }
              onClick={handleRemoveImage}
            >
              Remove
            </button>
          </div>
        </a>
      ) : (
        <>
          <div
            {...getRootProps({
              className:
                "border-2 border-dashed border-c-gray flex items-center justify-center h-28 w-full hover:bg-gray-100 cursor-pointer relative",
            })}
          >
            <input {...getInputProps()} />

            {isUploading && (
              <div
                className={
                  "absolute inset-0 bg-[#eeeeeeB0] flex items-center justify-center"
                }
              >
                <div className={"flex "}>
                  <Spinner size={"h-6 w-6"} text={" "} />
                  {"uploading..."}
                </div>
              </div>
            )}

            <div className="flex gap-6 items-center">
              <button
                onClick={handleUploadClick}
                className="h-12 w-12 border border-c-gray rounded-full flex items-center justify-center"
              >
                <MdOutlineDriveFolderUpload className="text-c-red text-lg" />
              </button>

              <span className="text-gray-400"> Drag and Drop Here</span>
            </div>
          </div>

          <input
            ref={inputRef}
            type={"file"}
            className={"hidden"}
            multiple={false}
            onChange={(e) =>
              handleChangeFile({
                type: "file",
                data: e?.target?.files[0],
              })
            }
          />
        </>
      )}
    </div>
  );
};

export default UploadInput;
