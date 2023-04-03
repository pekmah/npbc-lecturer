import React from 'react';
import Layout from "@/layout";
import {Carousel} from "@/components";

const About = () => {
    return (
        <Layout>
            {/*    Carousel     */}
            <Carousel
                title={"Our Philosophy"}
                subTitle={"Nurturing potential building character"}
            />

        </Layout>
    );
};

export default About;
