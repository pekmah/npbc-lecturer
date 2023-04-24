import React from 'react';
import Layout from "@/layout";
import {NewsCarousel, NewsDescription, NewsList} from "@/components";

const ViewNews = () => {
    return (
        <Layout>
            {/*image*/}
            <NewsCarousel/>

            <div className={"flex gap-6 p-8"}>
                {/*    Description   */}
                <NewsDescription/>

                {/*    news list    */}
                <NewsList/>

            </div>
        </Layout>
    );
};

export default ViewNews;
