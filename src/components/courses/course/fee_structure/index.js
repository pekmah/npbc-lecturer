import React from 'react';
import AccountsTable from "@/components/courses/course/fee_structure/AccountsTable";
import CourseFeeTable from "@/components/courses/course/fee_structure/CourseFeeTable";
import {Button} from "@/components";
import {AiOutlineDownload} from "react-icons/ai";

const CourseFeeStructure = () => {
    return (
        <div className={"py-6 bg-c-red text-white flex"}>
            <div className={"w-1/4"}/>

            <div className={"w-3/4"}>
                {/*    title    */}
                <h5 className={"c-h7"}>Fee Structure</h5>

                {/*    Description    */}
                <p className={"font-normal py-2"}>
                    The fees indicated below should be paid by every student before the day of registration. Please note
                    that payment must be paid in any branch of the following banks in Kenya
                </p>

                {/*    Payment Accounts table   */}
                <AccountsTable/>
                <div className={"h-8"}/>

                <p className={"font-normal py-2"}>
                    The fees indicated below should be paid by every student before the day of registration. Please note
                    that payment must be paid in any branch of the following banks in Kenya
                </p>

                {/*    Course fee breakdown table     */}
                <div className={"w-10/12"}>
                    <CourseFeeTable/>

                    {/*    Download button  */}
                    <div className={"flex justify-end py-4"}>
                        {/*    Button   */}
                        <Button
                            className={"flex justify-center text-white items-center gap-1 text-sm bg-[#ffffff20] font-semibold px-4"}>
                            <span>Download Fee Structure</span> <AiOutlineDownload className={"text-2xl ml-1"}/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseFeeStructure;
