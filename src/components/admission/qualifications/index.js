import React from "react";
import QualificationItem from "./QualificationItem";

const Qualifications = ({ data }) => {
  return (
    <section
      id={"qualifications"}
      className="py-8 md:py-16 bg-bg-blue flex md:flex-row flex-col"
    >
      <div
        className="flex-1 md:flex-[0.6] mb-3 md:mb-0  flex justify-center"
        data-aos="fade-right"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-c-blue">
          Course Qualifications
        </h3>
      </div>

      <div className="flex-1">
        <p
          className="c-normal md:c-medium leading-6 font-medium text-c-blue px-3"
          data-aos="fade-left"
        >
          {
            data
              ?.filter((item) => item?.title === "Course Qualifications")
              ?.at(0)?.body
          }
        </p>

        <div className="my-6 grid grid-cols-1 md:grid-cols-2 relative gap-x-16 gap-y-8 pr-10">
          <QualificationItem
            title={"Undergraduate"}
            desc={
              <>
                {
                  data
                    ?.filter(
                      (item) => item?.title?.toLowerCase() === "undergraduate"
                    )
                    ?.at(0)?.body
                }
              </>
            }
          />

          <QualificationItem
            title={"Diploma"}
            desc={
              <>
                {data?.filter((item) => item?.title === "Diploma")?.at(0)?.body}
              </>
            }
          />

          <QualificationItem
            title={"Certificate"}
            desc={
              <>
                {
                  data?.filter((item) => item?.title === "Certificate")?.at(0)
                    ?.body
                }
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
