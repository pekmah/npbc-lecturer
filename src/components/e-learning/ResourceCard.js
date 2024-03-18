import React from "react";
import { GantChartSvg } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";

const ResourceCard = ({
  cardTitle,
  fileName,
  customActions,
  actionTitle = "Download",
}) => {
  return (
    <div className={"flex_row gap-3 inter items-center"}>
      {/*    icon   */}
      <div className={"h-24 w-28 bg-slate-100 flex_row-center rounded-xl"}>
        <GantChartSvg />
      </div>

      {/*    resource details   */}
      <div className={"flex-1 flex_col justify-center"}>
        <h6 className={"text-sm mb-2 font-medium"}>{cardTitle}</h6>
        <span className={"text-13 text-gray-600"}>{fileName}</span>
      </div>

      {/*    actions   */}
      <div className={"flex_row"}>
        {customActions}

        <Button
          variant={"outlined"}
          className={
            "border border-c-blue text-c-blue gap-3 font-normal text-[13px]"
          }
        >
          {actionTitle}
          <LiaDownloadSolid className={"text-xl text-c-blue"} />
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
