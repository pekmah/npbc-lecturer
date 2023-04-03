import React from 'react';
import RightBranchItem from "@/components/about/history/RightBranchItem";
import LeftBranchItem from "@/components/about/history/LeftBranchItem";

const MileStones = () => {
    return (
        <div >
            <h6 className={"c-large font-semibold text-center mb-2"}>Our Milestones</h6>

            {/*    Milestone Tree     */}
            <div className={"flex "}>
                {/*    Left Branches    */}
                <div className={"flex flex-col flex-1"}>
                    {/*Empty */}
                    <div className={"h-28"}/>

                    <LeftBranchItem
                        title={"Chartering"}
                        date={"April 15th 1980"}
                        desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
                    />

                    <div className={"h-28"}/>

                    <LeftBranchItem
                        title={"1st Branch"}
                        date={"Jan 2nd 2005"}
                        desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
                    />
                </div>
                {/*    Line     */}
                <div className={"w-1 bg-white h-auto"}/>
                {/*    Right Branches   */}
                <div className={"flex flex-col flex-1"}>
                    <RightBranchItem
                        title={"Founding"}
                        date={"Nov 16th 1969"}
                        desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
                    />

                    <div className={"h-28"}/>

                    <RightBranchItem
                        title={"Accreditation"}
                        date={"June 28th 1995"}
                        desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
                    />

                    <div className={"h-28"}/>

                    <RightBranchItem
                        title={"5th Anniversary"}
                        date={"Nov 16th 2019"}
                        desc={`We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling`}
                    />
                </div>

            </div>
        </div>
    );
};

export default MileStones;
