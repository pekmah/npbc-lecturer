import React from "react";
import PersonalForm from "@/components/modal/application/pages/YourDetails/PersonalForm";
import ContactForm from "./ContactForm";
import NextOfKin from "./NextOfKin";
import EducationalForm from "./EducationForm";
import ProgramForm from "./ProgramForm";
import OccupationForm from "./OccupationForm";
import UploadForm from "./UploadForm";

const Form = ({ className }) => {
  return (
    <div className={`md:flex-[3] text-c-blue flex flex-col gap-4 ${className}`}>
      {/*    Personal Details */}
      <PersonalForm />

      {/* Details */}
      <ContactForm />

      {/* Next of kin */}
      <NextOfKin />

      {/* Educational Background */}
      <EducationalForm />

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
