/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import Layout from "@/layout";
import { Carousel, Goals, Mission, Philosophy } from "@/components";
import History from "@/components/about/history";
import Leadership from "@/components/about/leadership";
import Partners from "@/components/about/partners";
import { collection, getDocs, query, where } from "firebase/firestore";
import CFirebase from "@/configs/Firebase";

const About = () => {
  const [state, setState] = useState([]);

  const getItems = useCallback(async () => {
    setState([]);

    const q = query(
      collection(CFirebase.db, "pages"),
      where("chosenPage", "==", "about")
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
      {/*    Carousel     */}
      <Carousel
        title={"Our Philosophy"}
        subTitle={"Nurturing Potential Building Character"}
      />

      {/*    History     */}
      <History />
      {/*    Mission & Vision     */}
      <Mission
        data={state?.filter((item) => item?.chosenSection === "mission_vision")}
      />

      {/*    Philosophy*/}
      <Philosophy
        data={state?.filter(
          (item) => item?.chosenSection === "philosophy_core_values"
        )}
      />

      {/*    Goals    */}
      <Goals />

      {/*    Leadership     */}
      <Leadership />

      {/*    Partners     */}
      <Partners />
    </Layout>
  );
};

export default About;
