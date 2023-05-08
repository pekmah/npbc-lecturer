/* eslint-disable @next/next/no-img-element */
import {Button} from '@/components/general'
import React from 'react'
import {useRouter} from "next/router";

const Admission = () => {
    const router = useRouter()

    return (
        <>
            {/* Admission */}
            <div className="flex flex-col md:flex-row">
                {/* image */}
                <div className="flex-1">
                    <img className={"h-full object-contain md:object-cover"} src="/images/home/admission-1.webp" alt="admission"/>
                </div>

                {/* desc */}
                <div className="bg-c-red flex-1 py-8 md:py-12 flex flex-col items-center text-white">
                    <h2 className="c-h7 md:c-h4  font-semibold" data-aos="fade-up-left">Apply for Admission</h2>

                    <p className="c-normal md:c-large mt-2 md:mt-4 font-normal"
                       data-aos="fade-up-left">{new Date().getFullYear()} Applications are now open</p>

                    <div className=" my-5 md:my-10 text-sm md:c-medium font-normal w-11/12 md:w-10/12 mx-auto leading-6" data-aos="fade-up-left">
                        <p>Please contact our Admission Office on 0754 569 687 who will be happy to arrange this for
                            you.</p>
                        <br className={"hidden md:block"}/>
                        <p>For Detailed information, brochures and other forms can be mailed to you upon request.</p>
                    </div>

                    <div className="w-11/12 mx-auto flex md:block justify-center" data-aos="fade-up">
                        <Button className={"bg-white mx-auto py-2 md:py-3 px-8 md:px-0 md:w-3/6 text-c-red text-sm md:text-base font-semibold md:font-bold "}
                                onClick={() => router.push("?apply=true")}>
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admission
