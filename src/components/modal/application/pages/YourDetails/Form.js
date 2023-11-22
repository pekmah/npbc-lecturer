import React, { useEffect, useState } from "react";
import PersonalForm from "@/components/modal/application/pages/YourDetails/PersonalForm";
import ContactForm from "./ContactForm";
import NextOfKin from "./NextOfKin";
import EducationalForm from "./EducationForm";
import ProgramForm from "./ProgramForm";
import OccupationForm from "./OccupationForm";
import UploadForm from "./UploadForm";

const Form = ({
  className,
  data,
  handlePersonalDataChange,
  handleContactDataChange,
  handleNokDataChange,
  handleEducationDataChange,

  handleIdUpload,
  handleCertificateUpload,
  handlePassportUpload,
  handleRemoveFile,
}) => {
  console.log(data);
  return (
    <div className={`md:flex-[3] text-c-blue flex flex-col gap-4 ${className}`}>
      {/*    Personal Details */}
      <PersonalForm
        state={data?.personal}
        handleChange={handlePersonalDataChange}
      />

      {/* Details */}
      <ContactForm
        state={data?.contact}
        handleChange={handleContactDataChange}
      />

      {/* Next of kin */}
      <NextOfKin state={data?.nextOfKin} handleChange={handleNokDataChange} />

      {/* Educational Background */}
      <EducationalForm
        state={data?.education}
        handleChange={handleEducationDataChange}
      />

      {/* Program Form */}
      <ProgramForm
        state={data?.program}
        handleChange={handleEducationDataChange}
      />

      {/* Occupation Form */}
      <OccupationForm
        state={data?.occupation}
        // handleChange={handleOccupationChange}
      />

      {/* Upload Form */}
      <UploadForm
        state={data?.upload}
        handleIdUpload={handleIdUpload}
        handleCertificateUpload={handleCertificateUpload}
        handlePassportUpload={handlePassportUpload}
        idUrl={data?.documents?.id?.url}
        passportUrl={data?.documents?.passport?.url}
        certificateUrl={data?.documents?.certificate?.url}
        handleRemoveFile={handleRemoveFile}
      />
    </div>
  );
};

export default Form;
