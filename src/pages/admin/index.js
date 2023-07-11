/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/storage/MainContext";
import { useRouter } from "next/router";
import Spinner from "@/components/general/Spinner";
import Uploader from "@/components/admin/home/Uploader";
import AdminLayout from "@/layout/AdminLayout";
import Sections from "@/components/admin/home/Sections";

const Index = () => {
  const { user, setUser } = useContext(Context);
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [editState, setEditState] = useState({});

  useEffect(() => {
    if (!user?.accessToken) {
      // setIsChecked(true);
      // push("/admin/login");
    }
  }, []);

  // delete saved data

  return (
    <AdminLayout currentNav={"home"}>
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
              <h5 className={"c-xl p-2 underline"}>HOME PAGE</h5>
            </div>

            {/*  section 1(carousels)*/}
            <Sections />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Index;
