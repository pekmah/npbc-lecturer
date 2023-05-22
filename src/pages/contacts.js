import React from "react";
import Layout from "@/layout";
import { Carousel, MailBox } from "@/components";

function Contacts(props) {
  return (
    <Layout>
      {/*    Carousel     */}
      <Carousel
        title={"Our Philosophy"}
        subTitle={"Nurturing Potential Building Character"}
      />

      {/*    Mail Box    */}
      <MailBox />
    </Layout>
  );
}

export default Contacts;
