import React, { useCallback, useEffect, useState } from "react";
import Layout from "@/layout";
import { Body, Button, OtherMaterial, SideMenu } from "@/components";
import Table from "@/components/downloads/tables";
import { collection, getDocs, query, where } from "firebase/firestore";
import CFirebase from "@/configs/Firebase";
import Spinner from "@/components/general/Spinner";
import { Space } from "antd";
import { MdOutlineFileDownload } from "react-icons/md";

function Downloads() {
  const [state, setState] = useState({
    fee: [],
    admission: [],
    program: [],
    other: [],
  });

  const [loading, setLoading] = useState({
    fee: false,
    admission: false,
    program: false,
    other: false,
  });
  // fetch fee uploads
  const getFeeUploads = useCallback(async () => {
    setLoading((prev) => ({ ...prev, fee: true }));
    setState((prev) => ({ ...prev, fee: [] }));

    try {
      const querySnapshot = await getDocs(
        query(collection(CFirebase.db, "projects"), where("type", "==", "3"))
      );
      let list = [];
      querySnapshot?.docs?.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list?.push({ id: doc?.id, ...doc?.data() });
      });

      setState((prev) => ({ ...prev, fee: list }));
      setLoading((prev) => ({ ...prev, fee: false }));
    } catch (err) {
      console.log("Fee uploads error: ", err);
      setLoading((prev) => ({ ...prev, fee: false }));
    }
  }, []);

  // fetch admission uploads
  const getAdmissionUploads = useCallback(async () => {
    setLoading((prev) => ({ ...prev, admission: true }));

    try {
      setState((prev) => ({ ...prev, admission: [] }));

      const querySnapshot = await getDocs(
        query(collection(CFirebase.db, "projects"), where("type", "==", "2"))
      );
      let list = [];
      querySnapshot?.docs?.map((doc) => {
        // doc.data() is never undefined forquery doc snapshots
        list?.push({ id: doc?.id, ...doc?.data() });
      });

      setState((prev) => ({ ...prev, admission: list }));
      setLoading((prev) => ({ ...prev, admission: false }));
    } catch (e) {
      console.log("Get Admissions error. ", e);
      setLoading((prev) => ({ ...prev, admission: false }));
    }
  }, []);

  // fetch program uploads
  const getProgramUploads = useCallback(async () => {
    setLoading((prev) => ({ ...prev, program: false }));

    setState((prev) => ({ ...prev, program: [] }));

    try {
      const querySnapshot = await getDocs(
        query(collection(CFirebase.db, "projects"), where("type", "==", "1"))
      );
      let list = [];
      querySnapshot?.docs?.map((doc) => {
        // doc.data() is never undefined forquery doc snapshots
        list?.push({ id: doc?.id, ...doc?.data() });
      });

      setState((prev) => ({ ...prev, program: list }));
      setLoading((prev) => ({ ...prev, program: false }));
    } catch (e) {
      console.log("GET Program uploads error: ", e);
      setLoading((prev) => ({ ...prev, program: false }));
    }
  }, []);

  // fetch program uploads
  const getOtherUploads = useCallback(async () => {
    setLoading((prev) => ({ ...prev, other: false }));

    setState((prev) => ({ ...prev, other: [] }));
    try {
      const querySnapshot = await getDocs(
        query(collection(CFirebase.db, "projects"), where("type", "==", "0"))
      );
      let list = [];
      querySnapshot?.docs?.map((doc) => {
        list?.push({ id: doc?.id, ...doc?.data() });
      });

      setState((prev) => ({ ...prev, other: list }));
      setLoading((prev) => ({ ...prev, other: false }));
    } catch (e) {
      console.log("GET OTHER UPLOADS ERROR: ", e);
      setLoading((prev) => ({ ...prev, other: false }));
    }
  }, []);

  useEffect(() => {
    getFeeUploads();
    getAdmissionUploads();
    getProgramUploads();
    getOtherUploads;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className={"relative min-h-[95vh] bg-[#092A5905]"}>
        {/*Side Menu*/}
        <SideMenu />

        {/*Main Body*/}
        <Body>
          {/*   Program Table     */}
          <div className={"relative pr-3"} key={1}>
            {loading.program && (
              <div
                className={
                  "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
                }
              >
                <Spinner text={loading && "loading"} />
              </div>
            )}
            <Table
              title={"Program Pamphlets"}
              columns={programColumns}
              data={state?.program}
            />
          </div>

          {/*    Admission Form Table     */}
          <div className={"relative"} key={2}>
            {loading.admission && (
              <div
                className={
                  "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
                }
              >
                <Spinner text={"loading"} />
              </div>
            )}
            <Table
              title={"Admission Forms"}
              columns={programColumns}
              data={state?.admission}
            />
          </div>

          {/*    Fees Structure Table     */}
          <div className={"relative"} key={3}>
            {loading.fee && (
              <div
                className={
                  "absolute top-0 left-0 bottom-0 right-0 bg-[#ffffffa0] z-30 flex justify-center items-center"
                }
              >
                <Spinner text={"loading"} />
              </div>
            )}
            <Table
              title={"Fee Structure"}
              columns={programColumns}
              data={state?.fee}
            />
          </div>

          {/*    Other Materials      */}
          <OtherMaterial />
        </Body>
      </div>
    </Layout>
  );
}

export default Downloads;

/** @typedef {{item:string, purpose:string, size: string}} Program */
/**
 * @type {Program[]} program_data
 * @desc Program Pamphlets data
 */

/**
 * @type {string[]}
 * @desc Table header for Admission forms and Program Pamphlets table
 */
const table_columns = ["", "Purpose", "size"];

/**
 *  * @type {string[]}
 *  * @desc Table header for Fee structure table
 */
const fee_table_columns = ["Item", "size"];

const programColumns = [
  {
    title: "Item",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Purpose",
    dataIndex: "purpose",
    key: "purpose",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
    render: (_, item) => {
      let kbs = item?.size / 1000;
      let mbs = item?.size / 1000000;
      return <span>{kbs > 100 ? mbs + " mb" : kbs + " kb"}</span>;
    },
  },

  {
    title: "Action",
    key: "action",
    width: 250,
    render: (_, record) => (
      <Space className={"font-medium"} size="middle">
        <td className={`flex justify-between items-center my-auto `}>
          <Button className={"bg-none text-gray-500 text-sm"}>
            Open in browser
          </Button>

          <a href={record?.url} className={"px-2 bg-none text-blue-500"}>
            <MdOutlineFileDownload className={"text-2xl"} />
            {record?.link}
          </a>
        </td>
      </Space>
    ),
  },
];
