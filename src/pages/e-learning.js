import React from "react";
import Layout from "@/layout";
import { Hero, Portals } from "@/components";

const ELearning = () => {
  return (
    <Layout hideApplication={true}>
      {/*  Hero section*/}
      <Hero />

      {/*    Portals section   */}
      <Portals />
    </Layout>
  );
};

export default ELearning;
