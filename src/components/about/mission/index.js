import React from 'react';
import Mission from "@/components/about/mission/icons/Mission";
import Vision from "@/components/about/mission/icons/Vision";

const Index = () => {
    return (

        <section id={"mission"} className={" p-12 flex bg-white text-c-blue"}>
            {/*Side Menu*/}
            <div className={"w-1/4"}/>

            {/*    Main Body    */}
            <div className={" py-2 w-3/4"} data-aos="fade-up">
                <h3 className={"c-h7 font-bold"}>Mission & Vision</h3>

                {/*    HStack     */}
                <div className={"flex justify-between gap-10 my-20"}>
                    {/*    Mission      */}
                    <div className={"flex flex-col gap-5 items-center"}  data-aos="fade-up">
                        {/*Icon*/}
                        <Mission/>

                        <h6 className={"c-xl font-semibold"}>Our Mission</h6>

                        <p className={"c-normal font-medium text-center text-c-blue"}>
                            We exist to bring maturity to church and transformation to society through equipped
                            leadership based on Christian values and principles by training people in their area of
                            calling
                        </p>
                    </div>
                    {/*    Vision   */}
                    <div className={"flex flex-col items-center gap-5"}  data-aos="fade-up">
                        {/*Icon*/}
                        <Vision/>

                        <h6 className={"c-xl font-semibold"}>Our Vision</h6>

                        <p className={"c-normal font-medium text-center text-c-blue "}>
                            To be the training center of choice among our target denominations and churches by
                            providing the best training skills that are relevant to society.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Index;
