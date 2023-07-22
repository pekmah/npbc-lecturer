import {
  AdmissionQuestions,
  Application,
  Carousel,
  HowToApply,
  Intakes,
  Qualifications,
} from "@/components";
import Layout from "@/layout";
import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import CFirebase from "@/configs/Firebase";

const Admission = () => {
  const [state, setState] = useState([]);

  const getItems = useCallback(async () => {
    setState([]);

    const q = query(
      collection(CFirebase.db, "pages"),
      where("chosenPage", "==", "admission")
    );
    let array = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      if (!array?.some((item) => item?.id === doc?.id)) {
        array.push({ ...doc?.data(), id: doc?.id });
      }
    });

    setState(array);
    // setUploadedFiles(list);
  }, []);

  useEffect(() => {
    getItems();
  }, []);
  return (
    <Layout>
      {/* Carousel */}
      <Carousel
        title="Our Assurance"
        subTitle={
          <>
            We boast of having the most elaborate <br />
            applications and admission process in the industry
          </>
        }
      ></Carousel>
      {/**How to apply */}
      <HowToApply />

      {/**Application procedure */}
      <Application />

      {/** Course Qualifications */}
      <Qualifications
        data={state?.filter((item) => item?.chosenSection === "qualifications")}
      />

      {/**Intakes */}
      <Intakes
        data={state?.filter((item) => item?.chosenSection === "intakes")[0]}
      />

      {/**Questions */}
      <AdmissionQuestions />
    </Layout>
  );
};

export default Admission;
