import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import { Button } from "@/components";
import { AiOutlineUpload } from "react-icons/ai";
import CFirebase from "@/configs/Firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Spinner from "@/components/general/Spinner";
import Uploader from "@/components/admin/home/Uploader";
import { Space, Table } from "antd";
import { deleteObject, ref as sRef } from "firebase/storage";
import AdminLayout from "@/layout/AdminLayout";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editState, setEditState] = useState({});

  const getItems = useCallback(async () => {
    setLoading(true);
    setUploadedFiles([]);

    const querySnapshot = await getDocs(collection(CFirebase.db, "projects"));
    let list = [];
    querySnapshot?.docs?.map((doc) => {
      // doc.data() is never undefined for query doc snapshots
      list?.push({ id: doc?.id, ...doc?.data() });
    });

    setUploadedFiles(list);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!user?.accessToken) {
      // setIsChecked(true);
      push("/admin/login");
    } else {
      getItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // delete saved data
  const handleDelete = async (item) => {
    setLoading(true);
    if (
      window?.confirm("Are you sure you want to delete " + item?.name + "?")
    ) {
      //   create storage reference using saved url
      const storageRef = sRef(CFirebase.storage, item?.url);

      //   Delete item from firebase cloud storage
      deleteObject(storageRef)
        .then(async () => {
          console.log("Cloud storage item deleted");

          await deleteDoc(doc(CFirebase.db, "projects", item?.id));
          window?.alert(item?.name + " deleted!");
          setLoading(false);
          getItems();
        })
        .catch((err) => {
          console.log("FILE DELETION ERROR: ", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "",
      dataIndex: "",
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: "File name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Purpose",
      dataIndex: "purpose",
      key: "purpose",
    },
    {
      title: "Category",
      key: "fileType",
      render: (_, record) => <span>{fileTypes[parseInt(record?.type)]}</span>,
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      key: "fileType",
    },
    {
      title: "File link",
      url: "fileType",
      // width: 300,
      render: (_, data) => (
        <div className={"w-[320px] text-ellipsis overflow-hidden truncate"}>
          <a className={""} href={data?.url}>
            {data?.url}
          </a>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
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
      ),
    },
  ];

  return (
    <AdminLayout currentNav={"download"}>
      {isOpen && (
        <Uploader
          isEditing={!!editState?.name}
          editState={editState}
          resetEdit={() => setEditState({})}
          getItems={getItems}
          handleClose={() => setIsOpen(false)}
        />
      )}

      <div className={"bg-gray-100 flex justify-center "}>
        <div className={"w-full bg-white p-8 relative"}>
          {loading && (
            <div
              className={
                "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
              }
            >
              <Spinner text={loading ? "loading" : "loading"} />
            </div>
          )}
          {/*<Search />*/}

          <div className={"px-2 py-3"}>
            <div className={"flex justify-between py-2"}>
              <h5 className={"c-xl p-2 underline"}>Downloads</h5>
              <Button
                className={
                  "bg-c-blue w-40 text-white text-sm flex items-center justify-center gap-1"
                }
                onClick={() => setIsOpen(true)}
              >
                Upload file <AiOutlineUpload className={"text-xl"} />
              </Button>
            </div>
            <Table columns={columns} dataSource={uploadedFiles} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Index;

const fileTypes = [
  "Other Material",
  "Program Pamphlet",
  "Admission Form",
  "Fee Structure",
];
