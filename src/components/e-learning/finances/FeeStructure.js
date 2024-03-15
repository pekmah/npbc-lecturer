import React from "react";
import { ReceiptLongSvg } from "@/assets/icons";
import { LiaDownloadSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";

const FeeStructure = () => {
  return (
    <div className={""}>
      <h5 className={" text-c-red text-base font-semibold mt-7"}>
        Fee Structure
      </h5>

      <div className={"my-4 border border-gray-200 rounded-xl items-center"}>
        <div className={"px-5 py-3"}>
          <div className={"flex_row justify-between"}>
            <div className={"text-gray-700 "}>
              <h6 className={"font-medium text-15 mb-3"}>
                Diploma in Theology Studies
              </h6>
              <p className={"text-sm"}>Comprehensive Fee Structure</p>
            </div>
          </div>
        </div>

        <div
          className={
            "rounded-2xl border border-gray-200 p-2 m-5 flex_row gap-3 items-center"
          }
        >
          {/*    icon    */}

          <div className={"h-24 w-24 flex_row-center bg-gray-100 rounded-2xl"}>
            <ReceiptLongSvg />
          </div>

          {/*    text     */}
          <div className={"flex_col justify-center flex-1"}>
            <h6 className={"font-medium text-sm mb-2"}>
              Comprehensive Diploma Theology Studies Fee Structure
            </h6>

            <p className={"text-13 text-gray-600"}>
              comprehensive_diploma_theology_studies_fee_structure.pdf
            </p>
          </div>

          <Button
            className={
              "text-xs text-c-blue border border-c-blue font-light gap-2"
            }
            variant={"outline"}
          >
            Download fee structure
            <LiaDownloadSolid className={"text-lg"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
