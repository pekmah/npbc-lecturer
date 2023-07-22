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
  state,
  handlePersonalDataChange,
  handleContactDataChange,
  handleNokDataChange,
  handleEducationDataChange,
}) => {
  return (
    <div className={`md:flex-[3] text-c-blue flex flex-col gap-4 ${className}`}>
      {/*    Personal Details */}
      <PersonalForm
        state={state?.personal}
        handleChange={handlePersonalDataChange}
      />

      {/* Details */}
      <ContactForm
        state={state?.contact}
        handleChange={handleContactDataChange}
      />

      {/* Next of kin */}
      <NextOfKin state={state?.nextOfKin} handleChange={handleNokDataChange} />

      {/* Educational Background */}
      <EducationalForm
        state={state?.education}
        handleChange={handleEducationDataChange}
      />

      {/* Program Form */}
      <ProgramForm />

      {/* Occupation Form */}
      <OccupationForm />

      {/* Upload Form */}
      <UploadForm />
    </div>
  );
};

export default Form;
