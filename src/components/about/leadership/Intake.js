/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {Button} from "@/components";
import {useRouter} from "next/router";

const Intake = () => {
    const router = useRouter()
    return (
        <div className={"bg-c-blue p-6 flex text-c-white"}>
            <div className={"flex-1 flex flex-col gap-8"}>
                <div className={"flex flex-col gap-4"} data-aos="fade-up-right">
                    <h4 className={"c-h7 font-medium"}>Our Intake is ongoing</h4>

                    <h6 className={"c-medium font-light"}>The February intake is now open</h6>

                    <p className={"c-normal font-light"}>
                        We conduct intakes twice an year in the months of February and September for all our courses
                    </p>
                </div>

                {/*    Intake     */}
                <div data-aos="fade-up-right">
                    <h5 className={"font-semibold"}>Intake closes in</h5>

                    <div className="flex gap-6 text-center my-4">
                        <div className="flex flex-col gap-1 my-3">
                            <h3 className="c-h6 font-medium text-c-red">10</h3>
                        </div>

                        <div className="flex flex-col gap-1 my-3">
                            <h3 className="c-h6 font-medium text-c-red">12</h3>
                        </div>

                        <div className="flex flex-col gap-1 my-3">
                            <h3 className="c-h6 font-medium text-c-red">50</h3>
                        </div>

                        <div className="flex flex-col gap-1 my-3">
                            <h3 className="c-h6 font-medium text-c-red">22</h3>
                        </div>
                    </div>
                </div>

                <p className={"c-normal leading-6 font-light"} data-aos="fade-up-right">
                    Our application process is clear and simple so you can apply from anywhere.
                </p>

                <div className="flex gap-4 items-center" data-aos="fade-up">
                    <Button
                        onClick={() => router.push("?apply=true")}
                        className={"bg-c-red text-white font-semibold text-xs w-40 h-10"}>
                        Apply Now
                    </Button>

                    <Button
                        className={"bg-none h-8 text-xs text-[#FFFFFFB2] flex items-center gap-2 font-semibold px-5  justify-center"}>
                        View Courses first
                    </Button>
                </div>
            </div>

            <div className={"flex-1"}>
                <img className={"h-full object-cover ml-6 "} src={"/images/about/about-2.webp"} alt="about"/>
            </div>
        </div>
    );
};

export default Intake;
