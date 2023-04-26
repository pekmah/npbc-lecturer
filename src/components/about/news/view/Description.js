import React from 'react';
import {Button} from "@/components";
import {MdShare} from "react-icons/md";
import Intake from "@/components/about/leadership/Intake";

const Description = () => {
    return (
        <div className={"text-c-blue flex-[2] "}>
            {/*    title    */}
            <h4 className={"c-h7 text-2xl"}>The Nairobi Pentecostal Bible College officially becomes an accredited
                training
                institution
            </h4>

            <div className={"py-8 flex flex-col gap-4"}>
                {/*    Author*/}
                <h4 className={"c-xl "}>Author: Dean of Students</h4>

                <div className={"h-[1px] bg-gray-400"}/>

                <div className={"flex justify-between"}>
                    <h6 className={"text-gray-500 font-medium"}>Date Published: 24 March 2023</h6>

                    <Button className={"flex gap-4 py-0 items-center"}><MdShare className={"text-lg"}/>
                        <span>Share</span></Button>
                </div>

                {/*    paragraph    */}
                <div className={""}>
                    <p>
                        I am pleased to announce that our college has officially received accreditation from the
                        regional accrediting agency. This is a significant milestone for our institution and a testament
                        to the hard work and dedication of our entire community. Accreditation is a rigorous and
                        comprehensive evaluation process that ensures that our college meets or exceeds the highest
                        standards of academic quality and integrity. It is a recognition of our commitment to excellence
                        in education and our ongoing efforts to provide our students with the best possible learning
                        experience.
                    </p>
                    <br/>
                    <p>The accreditation process involves an extensive review of our academic programs, faculty
                        qualifications, student services, facilities, and more. The review team conducted an on-site

                        visit to our campus and conducted interviews with students, faculty, staff, and
                        administrators.<br/>
                        After a thorough evaluation of our institution, the review team has recommended that our college
                        be accredited for a period of ten years. This is the maximum length of accreditation that can be
                        awarded, and it is a clear indication of the high quality of education that we provide.
                    </p>
                    <br/>
                    <p>
                        As an accredited college, our students will have access to a wide range of benefits, including
                        transfer-ability of credits, eligibility for financial aid, and increased employment
                        opportunities. This accreditation is also a significant milestone for our graduates, as it
                        demonstrates to future employers and graduate schools that our degrees are of the highest
                        quality.
                    </p>
                    <br/>
                    <p>
                        I want to thank everyone in our community who contributed to this achievement. It is a team
                        effort, and it would not have been possible without the hard work and dedication of our faculty,
                        staff, and students. I am proud of what we have accomplished together and look forward to
                        building on this success in the years to come.
                    </p>
                </div>


            </div>

            {/*    Intake  */}
            <Intake/>
        </div>
    );
};

export default Description;
