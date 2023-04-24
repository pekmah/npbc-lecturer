import React from 'react';
import {Button} from "@/components";
import NewsItem from "@/components/home/news/NewsItem";

const Articles = () => {
    return (
        <section className={"px-4 py-8 text-c-blue"}>
            <div className={"flex gap-4 items-center"}>
                {/*    title    */}
                <h6 className={"c-h7"}>
                    Articles & Blogs
                </h6>

                {/*    line     */}
                <hr className={"flex-1 bg-gray-200 h-1 rounded-full"}/>

                {/*    more button  */}
                <Button text={"More"} className={"text-gray-500 font-medium"}/>
            </div>

            {/*    news     */}
            <div className="flex gap-3 py-5">
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"}
                          desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"}/>
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"}
                          desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"}/>
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"}
                          desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"}/>
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"}
                          desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"}/>

            </div>
        </section>
    );
};

export default Articles;
