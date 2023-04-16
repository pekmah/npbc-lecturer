import React from 'react';
import ReadMoreBtn from "@/components/home/questions/ReadMoreBtn";
import {Button} from "@/components";
import {AiOutlineDownload} from "react-icons/ai";

const CourseOutline = () => {
    return (
        <div className={"bg-slate-100 p-12 flex"}>
            <div className={"w-1/4 "}/>

            <div className={"bg-white p-4 w-3/4 text-c-blue flex flex-col gap-1"}>
                <h6 className={"c-large font-bold"}>Course Outline</h6>

                {/*    description  */}
                <p className={"text-sm my-1"}>
                    The course covers these topics in the years of study exhaustively to reveal the Bible in the context
                    of the discussion and how leadership and management should be done in the context of churches
                </p>

                {/*    Course study schedule    */}
                {/*    Year 1   */}
                <div>
                    {/*    Option     */}
                    <div className={"c-large border-b border-b-gray-300 py-2 px-1 flex justify-between"}>
                        <span>Year 1</span>

                        <ReadMoreBtn/>
                    </div>

                    {/*    collapsible Suboptions   */}
                    <ul>
                        <li className={"c-medium font-semibold border-b border-b-gray-300 py-2.5 px-1 flex justify-between ml-10"}>
                            <span>Unit 1</span>

                            <ReadMoreBtn/>
                        </li>
                        <li className={"c-medium font-semibold border-b border-b-gray-300 py-2.5 px-1 flex justify-between ml-10"}>
                            <span>Unit 2</span>

                            <ReadMoreBtn/>
                        </li>
                        <li className={"c-medium font-semibold border-b border-b-gray-300 py-2.5 px-1 flex justify-between ml-10"}>
                            <span>Unit 3</span>

                            <ReadMoreBtn/>
                        </li>
                        <li className={"c-medium font-semibold border-b border-b-gray-300 py-2.5 px-1 flex justify-between ml-10"}>
                            <span>Unit 4</span>

                            <ReadMoreBtn/>
                        </li>
                    </ul>
                </div>

                <div>
                    {/*    Option     */}
                    <div className={"c-large border-b border-b-gray-300 py-2 px-1 flex justify-between"}>
                        <span>Year 2</span>

                        <ReadMoreBtn/>
                    </div>
                </div>

                <div>
                    {/*    Option     */}
                    <div className={"c-large border-b border-b-gray-300 py-2 px-1 flex justify-between"}>
                        <span>Year 3</span>

                        <ReadMoreBtn/>
                    </div>
                </div>

                <div>
                    {/*    Option     */}
                    <div className={"c-large border-b border-b-gray-300 py-2 px-1 flex justify-between"}>
                        <span>Year 4</span>

                        <ReadMoreBtn/>
                    </div>
                </div>

                {/*    Download button  */}
                <div className={"flex justify-end p-4"}>
                    {/*    Button   */}
                    <Button
                        className={"flex justify-center text-c-blue items-center gap-1 text-sm bg-bg-blue font-semibold px-4"}>
                        <span>Download Outline</span> <AiOutlineDownload className={"text-xl ml-1"}/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseOutline;
