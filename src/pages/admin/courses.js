/* eslint-disable @next/next/no-img-element */
import React from "react";
import AdminLayout from "@/layout/AdminLayout";
import { Space, Table } from "antd";
import { Button } from "@/components";

const Courses = () => {
  const columns = [
    {
      title: "",
      dataIndex: "",
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Image",
      key: "image",
      render: (_, record) => (
        <div className={"h-24 w-28 bg-amber-300 border border-gray-200"}>
          <img
            className={"h-full  object-cover"}
            src={record?.image}
            alt={"image"}
          />
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Action",
      key: "action",
      width: "150px",
      render: (_, record) => <Actions />,
    },
  ];

  const pColumns = [
    {
      title: "",
      dataIndex: "",
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "Program Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Target Group",
      dataIndex: "target",
      key: "target",
    },
    {
      title: "Credit Hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Enrollment Criteria",
      dataIndex: "enrollment_criteria",
      key: "enrollment_criteria",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Fees Per Course",
      dataIndex: "fees",
      key: "fees",
    },
    {
      title: "Action",
      key: "action",
      width: 150,
      render: (_, record) => <Actions />,
    },
  ];

  return (
    <AdminLayout currentNav={"courses"}>
      <div className={"bg-gray-100 p-3 flex justify-center "}>
        <div className={"w-full bg-white p-7 relative"}>
          <div className={"px-2 "}>
            <div className={"flex justify-between mb-4 "}>
              <h5 className={"c-xl p-2 underline"}>COURSES PAGE</h5>
            </div>

            <div className={"flex justify-between py-2"}>
              <h5 className={"text-lg p-2 underline font-medium"}>Programs</h5>

              <Button
                className={
                  "bg-c-blue w-40 h-10 text-white text-sm flex items-center justify-center gap-1"
                }
                // onClick={() => setIsOpen(true)}
              >
                Add Course
              </Button>
            </div>
            <Table columns={columns} dataSource={Programs} />
          </div>

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
            <Table columns={pColumns} dataSource={ProgramView} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Courses;

/**
 * @typedef {("diploma"|"undergraduate"|"certificate")} Course
 */

/**
 *
 * @type {{image: string, type: Course, title: string, desc: string}}
 */
const Programs = [
  {
    type: "diploma",
    image:
      "https://www.jambonews.co.ke/wp-content/uploads/2019/08/images-34.jpeg",
    title: "Diploma in Computer Technology",
    desc: "KUCCPS Marketable Diploma Courses 2023, KCSE Mean Grade Requirements",
  },
];

/**
 *
 * @type {{name:string,target:string,hours:string,enrollment_criteria:string,duration:string,fees:string}} ProgramView
 */
const ProgramView = [
  {
    name: "Bachelor of Arts in Bible and Theology",
    target: "Church Ministers and Administrators",
    hours: "120",
    enrollment_criteria: "C+ or Diploma in Bible and Theology",
    duration: "4 years or 2 years after Diploma",
    fees: "Ksh 7500",
  },
];

const Actions = () => (
  <Space className={"font-medium"} size="middle">
    <Button
      onClick={() => {
        setEditState(record);
        setIsOpen(true);
      }}
      className={"bg-blue-600 w-16 text-white"}
    >
      Edit
    </Button>
    <Button
      onClick={() => handleDelete(record)}
      className={"bg-red-600 w-16 text-white"}
    >
      Delete
    </Button>
  </Space>
);
