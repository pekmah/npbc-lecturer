import React from 'react';
import Layout from "@/layout";
import {Carousel, Mission, Philosophy} from "@/components";
import History from "@/components/about/history";

const About = () => {
    return (
        <Layout>
            {/*    Carousel     */}
            <Carousel
                title={"Our Philosophy"}
                subTitle={"Nurturing potential building character"}
            />

            {/*    History     */}
            <History/>
            {/*    Mission & Vision     */}
            <Mission/>

            {/*    Philosophy*/}
            <Philosophy/>
        </Layout>
    );
};

export default About;
