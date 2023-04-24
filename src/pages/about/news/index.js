import React from 'react';
import Layout from "@/layout";
import {Carousel} from "@/components";

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

            {/*    Latest News      */}

            {/*    Campus Events    */}

            {/*    Articles and Blogs   */}
        </Layout>
    );
};

export default News;
