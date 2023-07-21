import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components";

const UploadForm = ({ setImage, file, handleChangeFile, setError }) => {
  const inputRef = useRef();

  const handleUploadClick = () => {
    inputRef?.current?.click();
  };

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

  return (
    <div>
      <p className="text-center font-thin text-xs text-slate-400 mb-2">
        click or drop file(Max - 1 file) to upload
      </p>
      <div
        {...getRootProps({
          className:
            "md:h-52 sm:h-44 h-auto bg-slate-100 border-2 border-light-blue border-dashed rounded-md",
        })}
      >
        <input {...getInputProps()} />

        {/*<img src={bgimage} className="max-w-1/3 mx-auto mt-4" />*/}
        <p className="text-slate-400 md:text-md text-center mt-4 text-sm">
          Drag & Drop your file here
          <br />
          <br />
          or
          <br />
          <br />
          <Button
            onClick={handleUploadClick}
            className={"bg-c-blue text-white"}
            text={"click to choose"}
            type={"button"}
          />
          <br />
          <br />
        </p>
      </div>
      {file?.data?.name && (
        <div>
          <strong>Chosen file</strong>
          <p className={"text-sm"}>1. {file?.data?.name}</p>
        </div>
      )}
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
    </div>
  );
};

export default UploadForm;
