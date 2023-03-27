/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/general'
import React from 'react'

const Admission = () => {
    return (
        <>
            {/* Admission */}
            <div className="flex">
                {/* image */}
                <div className="flex-1">
                    <img src="/images/home/admission-1.jpg" alt="admission" />
                </div>

                {/* desc */}
                <div className="bg-c-red flex-1 py-12 flex flex-col items-center text-white">
                    <h2 className="c-h4 font-semibold ">Apply for Admission</h2>

                    <p className="c-large mt-4 font-normal">{new Date().getFullYear()} Applications are now open</p>

                    <div className="my-10 c-medium font-normal w-10/12 mx-auto leading-6">
                        <p>Please contact our Admission Office on 0754 569 687 who will be happy to arrange this for you.</p>
                        <br />
                        <p>For Detailed information, brochures and other forms can be mailed to you upon request.</p>
                    </div>

                    <div className="w-10/12 mx-auto">
                        <Button className={"bg-white py-3 w-3/6 text-c-red font-bold "}>
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admission