import React from 'react';
import {Button} from "@/components";
import Uploads from "@/components/modal/application/pages/all_you_need/Uploads";
import ApplicationFee from "@/components/modal/application/pages/all_you_need/ApplicationFee";
import TermsAndCondition from "@/components/modal/application/pages/all_you_need/TermsAndCondition";
import {BsArrowLeft} from "react-icons/bs";

const AllYouNeed = () => {
    return (
        <div className={"text-c-blue w-full"}>
            {/*    Details      */}
            <div className={"flex"}>
                <Button className={"p-3"}>
                    <BsArrowLeft className={"text-2xl"}/>
                </Button>
                <div className={"flex items-center flex-col flex-1 text-center"}>
                    <h4 className={"c-h5 font-bold w-2/3 mx-auto"}>Here is everything you need to
                        complete your application</h4>

                    <p className={"c-xl mt-4 font-semibold"}> We are glad to see you want to learn with us</p>
                </div>
                <Button className={"p-3"}>
                    <BsArrowLeft className={"text-2xl rotate-180"}/>
                </Button>
            </div>

            <div className={"flex gap-5 py-8"}>
                {/*    Application stages   */}
                <Uploads/>

                {/*Complete later*/}
                <ApplicationFee/>

                {/*    Need help    */}
                <TermsAndCondition/>
            </div>

            {/*    buttons  */}
            <div className={"flex"}>
                <Button className={"text-sm text-gray-500 font-bold"}>
                    Need Help?
                </Button>
                <div className={"flex gap-4 justify-end flex-1"}>
                    <Button className={"bg-c-red-pale text-c-red py-3 px-14 text-sm font-semibold"} text={"close"}/>
                    <Button className={"bg-gray-500 outline-none text-white py-3 px-12 text-sm font-semibold"}
                            text={"Continue"}/>
                </div>
            </div>
        </div>
    );
};

export default AllYouNeed;
