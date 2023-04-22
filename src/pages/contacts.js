import React from 'react';
import Layout from "@/layout";
import {Carousel, MailBox} from "@/components";

function Contacts(props) {
    return (
        <Layout>
            {/*    Carousel     */}
            <Carousel
                title={"Our Philosophy"}
                subTitle={"Nurturing potential building character"}
            />

            {/*    Mail Box    */}
            <MailBox/>
        </Layout>
    );
}

export default Contacts;
