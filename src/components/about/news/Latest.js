import React from "react";

const Latest = () => {
  return (
    <div
      className={
        "py-6 md:py-12 px-4 md:px-8 text-c-blue bg-white flex flex-col md:flex-row gap-3"
      }
    >
      <h5 className={"text-2xl font-semibold md:c-h7 flex-[0.5]"}>
        Here&apos;s the latest from the NPBC administration
      </h5>

      <p className={"text-base flex-1"}>
        We publish all official communication on this website even as we uses
        other channels to disseminate information to the relevant stakeholders.
        Please note that whatever is not published here may not be factual or
        express the position NPBC.
      </p>
    </div>
  );
};

export default Latest;
