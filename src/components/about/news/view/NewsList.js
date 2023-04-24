import React from 'react';
import {MdOutlineSearch} from "react-icons/md";
import {Button} from "@/components";

const NewsList = () => {
    return (
        <div className={"flex-1"}>
            {/*search input*/}
            <div className={"flex gap-2  w-full border-b border-gray-500 items-center my-2"}>
                <MdOutlineSearch className={"text-xl"}/>
                <input placeholder={"search"} type="text"
                       className={"flex-1 bg-inherit h-full text-sm focus:outline-none py-2"}/>
            </div>

            {/*    Lates News section     */}
            <div>
                {/*title*/}
                <div className={"flex justify-between h-14 items-center bg-c-blue px-4 text-white"}>
                    <h6 className={"text-lg font-medium"}>Latest News</h6>

                    <Button text={"Show All"}/>
                </div>

                {/*    list     */}
                <ul className={"flex flex-col gap-3 py-2 border-b border-gray-300"}>
                    {
                        news_list?.map((item) => (
                            <li>
                                <div className={"flex text-c-blue"}>
                                    <div className={"flex-[0.8] min-h-28"}>
                                        <img src={item?.img} alt={"img"}
                                             className={" object-cover object-center h-full"}/>
                                    </div>
                                    <div className={"flex flex-col p-2 flex-1"}>
                                        <div>
                                            <p className={"c-medium font-medium"}>
                                                {item?.desc}
                                            </p>
                                        </div>

                                        {/*    flex     */}
                                        <div
                                            className={"flex text-xs text-[#7D7C7C] font-semibold gap-1 py-3 items-center"}>
                                            <p>{item?.sub}</p>

                                            <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"}/>

                                            <p>{item?.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                {/*title*/}
                <div className={"flex justify-between h-14 items-center bg-c-blue px-4 text-white"}>
                    <h6 className={"text-lg font-medium"}>Campus Events</h6>

                    <Button text={"Show All"}/>
                </div>

                {/*    list     */}
                <ul className={"flex flex-col gap-3 py-2 border-b border-gray-300"}>
                    {
                        news_list?.map((item) => (
                            <li>
                                <div className={"flex text-c-blue"}>
                                    <div className={"flex-[0.8] min-h-28"}>
                                        <img src={item?.img} alt={"img"}
                                             className={" object-cover object-center h-full"}/>
                                    </div>
                                    <div className={"flex flex-col p-2 flex-1"}>
                                        <div>
                                            <p className={"c-medium font-medium"}>
                                                {item?.desc}
                                            </p>
                                        </div>

                                        {/*    flex     */}
                                        <div
                                            className={"flex text-xs text-[#7D7C7C] font-semibold gap-1 py-3 items-center"}>
                                            <p>{item?.sub}</p>

                                            <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"}/>

                                            <p>{item?.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                {/*title*/}
                <div className={"flex justify-between h-14 items-center bg-c-blue px-4 text-white"}>
                    <h6 className={"text-lg font-medium"}>Articles and Blogs</h6>

                    <Button text={"Show All"}/>
                </div>

                {/*    list     */}
                <ul className={"flex flex-col gap-3 py-2 border-b border-gray-300"}>
                    {
                        news_list?.map((item) => (
                            <li>
                                <div className={"flex text-c-blue"}>
                                    <div className={"flex-[0.8] min-h-28"}>
                                        <img src={item?.img} alt={"img"}
                                             className={" object-cover object-center h-full"}/>
                                    </div>
                                    <div className={"flex flex-col p-2 flex-1"}>
                                        <div>
                                            <p className={"c-medium font-medium"}>
                                                {item?.desc}
                                            </p>
                                        </div>

                                        {/*    flex     */}
                                        <div
                                            className={"flex text-xs text-[#7D7C7C] font-semibold gap-1 py-3 items-center"}>
                                            <p>{item?.sub}</p>

                                            <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"}/>

                                            <p>{item?.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default NewsList;

const news_list = [
    {
        img: "/images/about/news/news-4.jpg",
        desc: "Student portals have been activated. You can now login and set up your profile",
        sub: "Dean of Students",
        date: "15 Mar 2023"
    }, {
        img: "/images/about/news/news-4.jpg",
        desc: "Student portals have been activated. You can now login and set up your profile",
        sub: "Dean of Students",
        date: "15 Mar 2023"
    }, {
        img: "/images/about/news/news-4.jpg",
        desc: "Student portals have been activated. You can now login and set up your profile",
        sub: "Dean of Students",
        date: "15 Mar 2023"
    },
]
