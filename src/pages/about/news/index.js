import React from 'react';
import Layout from "@/layout";
import {Carousel, Latest, LatestNews} from "@/components";

const News = () => {
    return (
        <Layout>
            {/*    Carousel     */}
            <Carousel
                title='Our Assurance'
                subTitle={<>
                    Your search for a wholesome approach <br/> to theological teachings ends here
                </>}
            />
            {/*    Latest   */}
            <Latest/>

            {/*    Latest News      */}
            <LatestNews/>

            {/*    Articles and Blogs   */}
        </Layout>
    );
};

export default News;
