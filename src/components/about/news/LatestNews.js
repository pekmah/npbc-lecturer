import React from 'react';
import {Button} from "@/components";

const LatestNews = () => {
    return (
        <div className={"px-4 py-8 text-c-blue"}>
            {/*   title     */}
            <div className={"flex gap-4 items-center"}>
                {/*    title    */}
                <h6 className={"c-h7"}>
                    Latest News
                </h6>

                {/*    line     */}
                <hr className={"flex-1 bg-gray-200 h-1 rounded-full"}/>

                {/*    more button  */}

                <Button text={"More"} className={"text-gray-500 font-medium"}/>
            </div>

            {/*    grid display     */}
            <div className={"grid grid-cols-3 gap-6"}>
                {/*main news pane */}
                <div className={"flex flex-col row-span-2 col-span-2"}>
                    {/*    image    */}
                    <img src="/images/about/news/news-1.jpg" alt="news-1"
                         className={"min-h-[500px] object-cover object-center w-full"}/>

                    {/*    caption  */}
                    <div className={"flex text-sm text-[#7D7C7C] font-semibold gap-3 py-3 items-center"}>
                        <p>Registrar's office</p>

                        <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"}/>

                        <p>3 days ago</p>
                    </div>

                    <a href={"/about/news/news_1"} className={"c-h7 font-semibold"}> The Nairobi Pentecostal Bible
                        College
                        officially becomes an
                        accredited training institution</a>
                </div>
                <div className={" row-span-1 "}>
                    {/*    image    */}
                    <img src="/images/about/news/news-2.jpg" alt="news-1"
                         className={"h-[200px] object-cover object-center w-full"}/>

                    {/*    caption  */}
                    <div className={"flex text-sm text-[#7D7C7C] font-semibold gap-3 py-3 items-center"}>
                        <p>Dean of students</p>

                        <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"}/>

                        <p> 15 Mar 2023 </p>
                    </div>

                    <a href={"/about/news/news_2"} className={"c-large leading-7 font-semibold"}>
                        Student portals have been activated. You can now login and set up your profile
                    </a>
                </div>
                <div className={" row-span-1"}>
                    {/*    image    */}
                    <img src="/images/about/news/news-3.jpg" alt="news-1"
                         className={"h-[200px] object-cover object-center w-full"}/>

                    {/*    caption  */}
                    <div className={"flex  text-sm text-[#7D7C7C] font-semibold gap-3 py-3 items-center"}>
                        <p>Registrar's office</p>

                        <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"}/>

                        <p> 24 Jan 2023 </p>
                    </div>

                    <a href={"/about/news/news_3"} className={"c-large leading-7 font-semibold"}>
                        NPBC launches the new 5 floor building for active use as lecture hall and offices
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
