import React from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const UploadForm = () => {
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
        <div>
          {/*    label    */}
          <h6 className={"font-medium mb-2"}>National ID/Passport</h6>
          <div
            className={
              "border-2 border-dashed border-c-gray flex items-center justify-center h-28 w-full"
            }
          >
            <div className="flex gap-6 items-center">
              <div className="h-12 w-12 border border-c-gray rounded-full flex items-center justify-center">
                <MdOutlineDriveFolderUpload className="text-c-red text-lg" />
              </div>
              <span className="text-gray-400"> Drag and Drop Here</span>
            </div>
          </div>
        </div>
        <div>
          {/*    label    */}
          <h6 className={"font-medium mb-2"}>
            High School Certificate / Results
          </h6>
          <div
            className={
              "border-2 border-dashed border-c-gray flex items-center justify-center h-28 w-full"
            }
          >
            <div className="flex gap-6 items-center">
              <div className="h-12 w-12 border border-c-gray rounded-full flex items-center justify-center">
                <MdOutlineDriveFolderUpload className="text-c-red text-lg" />
              </div>
              <span className="text-gray-400"> Drag and Drop Here</span>
            </div>
          </div>
        </div>

        <div>
          {/*    label    */}
          <h6 className={"font-medium mb-2"}>Passport size photo</h6>
          <div
            className={
              "border-2 border-dashed border-c-gray flex items-center justify-center h-28 w-full"
            }
          >
            <div className="flex gap-6 items-center">
              <div className="h-12 w-12 border border-c-gray rounded-full flex items-center justify-center">
                <MdOutlineDriveFolderUpload className="text-c-red text-lg" />
              </div>
              <span className="text-gray-400"> Drag and Drop Here</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
