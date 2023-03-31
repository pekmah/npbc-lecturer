import React from 'react';
import {IoLocationOutline} from "react-icons/io5"
import {Button} from "@/components";
import Theme from "@/constants/Theme";

function StudyModes() {
    return (
        <div className={"bg-bg-blue py-24 flex justify-center"}>
            <div className={"w-5/6 bg-white "}>
                <div className={"py-6 border-b border-line-gray"}>
                    <h3 className={"c-h7 text-c-blue my-2 text-center"}>
                        Study Modes
                    </h3>

                    <p className={"text-sm text-c-blue text-center w-10/12 mx-auto"}>
                        We offer both physical/regular and virtual/online lectures in most of our programs. This means
                        you
                        can join lecture
                        sessions from anywhere or attend them in one of our locations.
                    </p>
                </div>

                <div className={"flex"}>
                    {/*    Campus locations     */}
                    <div className={"flex-1 border-r border-line-gray"}>
                        <h3 className={"c-xl text-c-blue my-2 font-medium text-center"}>
                            Campus Locations
                        </h3>

                        {/*    Campus 1    */}
                        <div className={"text-c-blue p-2"}>
                            <span className={"font-semibold c-medium "}>
                                Main Campus
                            </span>

                            <div className={"flex  justify-between items-center py-1"}>
                                <span className={"text-sm"}>Garden Estate Off Thika Road Office</span>

                                <Button
                                    className={"flex justify-center text-c-blue items-center gap-1 text-sm bg-bg-blue font-semibold"}>
                                    <span>View Location</span> <IoLocationOutline className={"text-lg"}
                                                                                  color={Theme.colors.c_blue}
                                />
                                </Button>
                            </div>
                        </div>

                        {/*    Campus 2     */}
                        <div className={"text-c-blue p-2"}>
                            <span className={"font-semibold c-medium "}>
                                Ruiru Campus
                            </span>

                            <div className={"flex  justify-between items-center py-1"}>
                                <span className={"text-sm"}>Garden Estate Off Thika Road Office</span>

                                <Button
                                    className={"flex justify-center text-c-blue items-center gap-1 text-sm bg-bg-blue font-semibold"}>
                                    <span>View Location</span> <IoLocationOutline className={"text-lg"}
                                                                                  color={Theme.colors.c_blue}
                                />
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/*    Virtual Platforms    */}
                    <div className={"flex-1"}>
                        <h3 className={"c-xl text-c-blue my-2 text-center font-medium text-center"}>
                            Virtual Platforms
                        </h3>

                        {/*    Platform 1    */}
                        <div className={"text-c-blue p-2"}>
                            <span className={"font-semibold c-medium "}>
                                NPBC LMS
                            </span>

                            <div className={"flex  justify-between items-center py-1"}>
                                <span className={"text-sm"}>Notes and all learning materials are shared to all students by a lecturer on the college’s LMS at the start of the semester</span>
                            </div>
                        </div>

                        {/*    Platform 2     */}
                        <div className={"text-c-blue p-2"}>
                            <span className={"font-semibold c-medium "}>
                                Google Meet
                            </span>

                            <div className={"flex  justify-between items-center py-1"}>
                                <span className={"text-sm"}>Every unit has a unique session link shared by the lecturer early before the class starts</span>
                            </div>
                        </div>

                        {/*    Platform 3     */}
                        <div className={"text-c-blue p-2"}>
                            <span className={"font-semibold c-medium "}>
                                Zoom
                            </span>

                            <div className={"flex  justify-between items-center py-1"}>
                                <span className={"text-sm"}>Every unit has a unique session link shared by the lecturer early before the class starts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyModes;
