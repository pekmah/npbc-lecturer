import { Button } from "@/components/general";
import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import RequirementItem from "./RequirementItem";
import { useRouter } from "next/router";

const Application = () => {
  const router = useRouter();

  return (
    <section
      id={"application"}
      className="flex flex-col md:flex-row text-white"
    >
      {/**Online Application */}
      <div className="flex-1 bg-c-red p-8 flex flex-col">
        <h4 className="c-h7 font-semibold text-center" data-aos="fade-up">
          Online Application
        </h4>

        <p className="my-1 c-medium font-medium leading-6" data-aos="fade-up">
          Our online application is simple and clear, having only 5 steps to
          complete your entire application. Get help using the “Need Help” link
          at the bottom left at any point in the process.
        </p>

        {/**Requirements */}
        <div className="flex my-8 flex-1">
          <div className="w-[3.5px] bg-white h-auto" />

          <div className="flex flex-col gap-5">
            {/**Requirement Item */}
            <RequirementItem
              title={"See Registration Requirements"}
              desc={
                "View the main requirements for the general application process including documents to upload, terms and conditions and the application fee"
              }
            />

            <RequirementItem
              title={"Select Course"}
              desc={
                "Choose a study level, certificate, diploma or undergraduate, pick a course among the choices and see the qualifications needed for the choice you made"
              }
            />

            <RequirementItem
              title={"Enter your details"}
              desc={
                "Input correct details under the sections as follows; personal details, contact, next of kin, educational background, verify course, current occupation and finally upload the relevant files"
              }
            />

            <RequirementItem
              title={"Payment"}
              desc={
                "View the payment details and edit where necessary and request for Mpesa payment prompt to proceed"
              }
            />

            <RequirementItem
              title={"Preview Application & Finish"}
              desc={
                "View all the details as you have entered them to ascertain their correctness. Finally confirm your application with a final declaration"
              }
            />
          </div>
        </div>

        {/**Buttons */}
        <div className="flex justify-end gap-4" data-aos="fade-up">
          <Button className={"bg-none text-white font-semibold text-xs "}>
            Contact us
          </Button>

          <Button
            className={
              "bg-white h-8 text-xs text-c-red flex items-center gap-2 font-semibold px-5 w-32 justify-center"
            }
            onClick={() => router.push("?apply=true")}
          >
            Apply Now
          </Button>
        </div>
      </div>
      {/**Offline Application */}
      <div className=" flex flex-col flex-1 bg-c-blue p-4 md:p-8">
        <h4 className="c-h7 font-semibold" data-aos="fade-up">
          Physical Application Application
        </h4>

        <p className="my-3 c-medium font-medium leading-6" data-aos="fade-up">
          The physical application mode is customized to accommodate those who
          find it hard to apply online. Our physical application process can
          happen in three ways.
        </p>

        <div className="flex my-6 flex-col gap-8 flex-1">
          <div
            className="px-2 md:px-4 py-2 bg-[#FFFFFF14]"
            data-aos="fade-left"
          >
            <h6 className="text-sm font-medium">Visit campus to apply</h6>

            <div className="flex justify-between items-center">
              <span className="text-xs font-light flex-1">
                Gardent Estate Off Thika Road Office
              </span>

              <div className="flex gap-3">
                <Button
                  className={
                    "bg-none text-[#7D7C7C] font-medium text-[13px] hidden md:block"
                  }
                >
                  View Locations
                </Button>

                <div className="flex flex-1 ml-1">
                  <Button
                    className={
                      "bg-white h-8 font-medium text-xs text-c-blue flex items-center gap-2"
                    }
                  >
                    <MdOutlinePhone className="text-lg" /> Call for directions
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="px-2 md:px-4 py-2 bg-[#FFFFFF14]"
            data-aos="fade-left"
          >
            <h6 className="text-sm font-medium">
              Fill form and submit in-person
            </h6>

            <div className="flex justify-between items-center">
              <span className="text-xs font-light flex-1">
                Gardent Estate Off Thika Road Office
              </span>

              <div className="flex gap-3">
                <Button
                  className={
                    "bg-none text-[#7D7C7C] font-medium text-[13px] hidden md:block"
                  }
                >
                  View Locations
                </Button>

                <div className="flex flex-1">
                  <Button
                    className={
                      "bg-white h-8 font-medium text-xs text-c-blue flex items-center gap-2"
                    }
                  >
                    <HiOutlineDownload className="text-lg" /> Download Form
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="px-2 md:px-4 py-2 bg-[#FFFFFF14]"
            data-aos="fade-left"
          >
            <h6 className="text-sm font-medium">
              Fill form and submit via email
            </h6>

            <div className="flex justify-between items-center">
              <span className="text-xs font-light flex-1">
                NPBC Email : admin@npbc.co.ke
              </span>

              <div className="flex gap-3">
                <Button
                  className={
                    "bg-none text-[#7D7C7C] font-medium text-[13px] hidden md:block"
                  }
                >
                  Submit form
                </Button>

                <div className="flex flex-1">
                  <Button
                    className={
                      "bg-white h-8 font-medium text-xs text-c-blue flex items-center gap-2"
                    }
                  >
                    <HiOutlineDownload className="text-lg" /> Download Form
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4" data-aos="fade-up">
          <Button className={"bg-none text-white font-semibold text-xs "}>
            View Courses
          </Button>

          <Button
            className={
              "bg-white h-8 text-xs text-c-red flex items-center gap-2 font-semibold px-5"
            }
          >
            Submit filled form
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Application;
