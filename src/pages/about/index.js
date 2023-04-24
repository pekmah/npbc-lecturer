import React from 'react';
import Layout from "@/layout";
import {Carousel, Goals, Mission, Philosophy} from "@/components";
import History from "@/components/about/history";
import Leadership from "@/components/about/leadership";
import Partners from "@/components/about/partners";

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

            {/*    Goals    */}
            <Goals/>

            {/*    Leadership     */}
            <Leadership/>

            {/*    Partners     */}
            <Partners/>
        </Layout>
    );
};

export default About;
