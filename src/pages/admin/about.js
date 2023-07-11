import React from "react";
import InputItem from "@/components/admin/InputItem";
import AdminLayout from "@/layout/AdminLayout";
import { Button } from "@/components";
import { Table } from "antd";

const About = () => {
  return (
    <AdminLayout currentNav={"admissions"}>
      <div className={"min-h-20 rounded-xl bg-gray-100 p-5 relative my-4"}>
        {/*section 1*/}
        <div className={"my-2 w-full lg:w-3/5 flex flex-col gap-5"}>
          {/*  Mission */}
          <InputItem
            title={"Mission"}
            textvalue={
              "We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"
            }
          />

          {/*section 2*/}
          {/*    Vision */}
          <InputItem
            title={"Vision"}
            textvalue={
              "To be the training center of choice among our target denominations and churches by providing the best training skills that are relevant to society."
            }
          />

          {/*    Vision */}
          <InputItem
            title={"Our Philosophy"}
            textvalue={" Nurturing Potential Building Character"}
          />

          {/*    Vision */}
          <InputItem
            title={"Our Core Values"}
            textvalue={
              "Excellence, Relevance, Competence\n" +
              "\n" +
              "We deliver quality teaching and learning. We seek to meet the needs of the industry. Proficient in skills, knowledge and attitudes"
            }
          />

          <div className={"px-2 "}>
            <div className={"flex justify-between py-2"}>
              <h5 className={"text-lg p-2 underline font-medium"}>
                Program Brief View
              </h5>

              <Button
                className={
                  "bg-c-blue w-32 h-10 text-white text-sm flex items-center justify-center gap-1"
                }
                // onClick={() => setIsOpen(true)}
              >
                Add
              </Button>
            </div>
            <Table columns={pColumns} dataSource={mngt} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default About;

const mngt = [
  {
    name: "Rev. Andrew Manyeki",
    image:
      "https://www.jambonews.co.ke/wp-content/uploads/2019/08/images-34.jpeg",
    roles: "coordinator, Online, Distance and Extension Learning",
  },
];
