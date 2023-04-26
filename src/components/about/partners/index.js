import React from 'react';

const Partners = () => {
    return (
        <section id={"partners"} className={"text-c-blue p-8 lg:w-11/12 mx-auto"}>
            <h6 className={"c-large text-center font-semibold"}  data-aos="fade-up">Our partners</h6>

            <div className={"flex py-5 justify-between"}>
                <div className={"text-center flex flex-col items-center gap-3 font-bold"} data-aos="fade-left">
                    <img className={"h-8"} src={"/images/about/about-6.png"} alt={"partner"}/>

                    Graduated Students
                </div>

                <div className={"text-center flex flex-col items-center gap-3 font-bold"} data-aos="fade-left">
                    <img className={"h-8"} src={"/images/about/about-5.png"} alt={"partner"}/>

                    Intake Rounds
                </div>

                <div className={"text-center flex flex-col items-center gap-3 font-bold"} data-aos="fade-left">
                    <img className={"h-8"} src={"/images/about/about-4.png"} alt={"partner"}/>

                    Glitex
                </div>

                <div className={"text-center flex flex-col items-center gap-3 font-bold"} data-aos="fade-left">
                    <img className={"h-8"} src={"/images/about/about-3.png"} alt={"partner"}/>

                    Campus Locations
                </div>
            </div>
        </section>
    );
};

export default Partners;
