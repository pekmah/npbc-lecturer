/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Partners = () => {
    return (
        <section id={"partners"} className={"text-c-blue p-8 lg:w-11/12 mx-auto"}>
            <h6 className={"c-h6 font-bold text-center "}  data-aos="fade-up">Our partners</h6>

            <div className={"flex py-5 justify-between"}>

                <div className={"text-center flex flex-col items-center gap-3 font-bold"} data-aos="fade-left">
                    <img className={"h-12"} src={"/images/about/about-5.webp"} alt={"partner"}/>

                    Ministry of Education
                </div>

                <div className={"text-center flex flex-col items-center gap-3 font-bold"} data-aos="fade-left">
                    <img className={"h-12"} src={"/images/about/about-4.webp"} alt={"partner"}/>

                    TVETA
                </div>

                <div className={"text-center flex flex-col items-center gap-3 font-bold "} data-aos="fade-left">
                    <div className={"bg-slate-900"}>
                        <img className={"h-12"} src={"/images/about/about-3.webp"} alt={"partner"}/>
                    </div>

                    Global University
                </div>
            </div>
        </section>
    );
};

export default Partners;
