import { AboutUs, Admission, Carousel, Courses } from "@/components";
import Layout from "@/layout";
import { useCallback, useEffect, useState } from "react";
import CFirebase from "@/configs/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const [state, setState] = useState([]);

  const getItems = useCallback(async () => {
    setState([]);

    const q = query(
      collection(CFirebase.db, "pages"),
      where("chosenPage", "==", "home")
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
  console.log(state);

  return (
    <>
      <Layout>
        {/* Carousel */}
        <Carousel
          title={"Our Philosophy"}
          subTitle={"Nurturing Potential Building Character"}
        >
          <Courses />
        </Carousel>
        {/* About us */}
        <AboutUs
          lifeData={
            state?.filter((item) => item?.chosenSection === "npbc_life")[0]
          }
          data={state?.filter((item) => item?.chosenSection === "about")[0]}
        />
        {/* Admission */}
        <Admission
          data={
            state?.filter((item) => item?.chosenSection === "application")[0]
          }
        />
        {/* News and updates */}
        {/* <News/> */}
        {/* Questions */}
        {/* <Questions/> */}
      </Layout>
    </>
  );
}
