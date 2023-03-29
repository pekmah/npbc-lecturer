/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Floater from './Floater'

const Statistics = () => {
    return (
        <div className='bg-white p-10 relative'>
            {/*Floater */}
            <Floater />

            <div className="h-5" />

            <div className='flex'>

                <div className='w-10/12 mx-auto flex gap-6'>
                    {/* Image */}
                    <div className='flex-[0.3] flex justify-center'>
                        <img src={"/images/courses/statistics-1.png"} alt={"statistics-1"} className={"h-40 flex-0.4"} />
                    </div>

                    <div className='flex-1'>
                        <h3 className='c-h7 text-3xl leading-10 font-semibold'>
                            We offer <span className={"text-c-red"}>industry leading </span> and <span className={"text-c-red"}> accredited </span>  programs to
                            undergraduate, diploma and certificate students
                        </h3>
                        {/*paragraph */}
                        <p className=' mx-auto text-[#092A59A8] leading-6 my-4 font-medium'>
                            Our courses are curated to meet the spiritual and leadership needs of the body of Christ in Kenya, Africa
                            and the world. We put care in everything we do with the consciousness that our students will tomorrow
                            face the society in the reality of God’s plan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics