/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {GrLinkedin} from "react-icons/gr";
import {FaInstagram, FaTwitter} from "react-icons/fa";
import {MdOutlineFacebook} from "react-icons/md";

const LeadershipItem = () => {
    return (
        <div className={"w-[47%] px-2 flex gap-4 items-center"} data-aos="fade-up">
            {/*Image*/}
            <div className={"w-32 flex-shrink-0"}>
                <img className={" w-full object-contain"} src="/images/about/about-1.jpg" alt="about-1"/>
            </div>
            {/*    Details      */}
            <div className={""}>
                {/*title*/}
                <h6 className={"c-large"}>Dr. Grace Mwalimu</h6>

                {/*    role     */}
                <h6 className={"text-sm font-medium leading-3 "}>Serving patron</h6>
                {/*    course     */}
                <span
                    className={"font-medium text-xs leading-3 text-[#092A59A8]"}>B.A. Diplomacy & Foreign Affairs</span>

                {/*    desc     */}
                <p className={"font-medium text-sm"}>
                    Dr. Grace is a graduate of NPBC and has been a lecturer for 15 years training Bible scholars in
                    matters of theology.
                </p>
                {/*    Icons    */}
                <div className={"flex w-full gap-4 text-c-blue my-3"}  data-aos="fade-left">
                    {/*    Linked In    */}
                    <GrLinkedin className={"text-xl"}/>
                    {/*    Twitter    */}
                    <FaTwitter className={"text-xl"}/>
                    {/*    Facebook    */}
                    <MdOutlineFacebook className={"text-xl"}/>
                    {/*    Instagram    */}
                    <FaInstagram className={"text-xl"}/>
                </div>
            </div>
        </div>
    );
};

export default LeadershipItem;
