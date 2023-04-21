import React from 'react';
import AppStages from "@/components/modal/application/pages/welcome/AppStages";
import CompleteLater from "@/components/modal/application/pages/welcome/CompleteLater";
import NeedHelp from "@/components/modal/application/pages/welcome/NeedHelp";
import {Button} from "@/components";
import {BsArrowLeft} from "react-icons/bs";

/**
 * @param {function} switchModal
 * @returns {JSX.Element}
 * @constructor
 */
const Welcome = ({switchModal, handleCloseModal, switchToNext}) => {
    return (
        <div className={"text-c-blue w-full "}>
            <div className={"flex "}>
                {/*    Details      */}
                <div className={"flex items-center flex-col flex-1"}>
                    <h4 className={"c-h5 font-bold"}>Welcome to NPBC</h4>

                    <p className={"c-xl mt-4 font-semibold"}> We are glad to see you want to learn with us</p>
                </div>

                <Button className={"p-3"} onClick={switchToNext}>
                    <BsArrowLeft className={"text-2xl rotate-180"}/>
                </Button>
            </div>

            <div className={"flex gap-5 py-8"}>
                {/*    Application stages   */}
                <AppStages switchModal={switchModal}/>

                {/*Complete later*/}
                <CompleteLater/>

                {/*    Need help    */}
                <NeedHelp/>
            </div>

            {/*    buttons  */}
            <div className={"flex gap-4 justify-end"}>
                <Button onClick={handleCloseModal}
                        className={"bg-c-red-pale text-c-red py-2 px-14 text-sm font-semibold"} text={"close"}/>
                <Button className={"bg-c-red text-white py-2 px-12 text-sm font-semibold"}
                        text={"Get Started"}/>
            </div>
        </div>
    );
};

export default Welcome;
