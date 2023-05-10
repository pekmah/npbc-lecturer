import React from 'react'

import {HiOutlineArrowSmallRight} from 'react-icons/hi2'
import Link from "next/link";

/**
 *
 * @param {string} title
 * @param {string} desc
 * @param {boolean} isComingSoon
 * @param {string} link
 * @return {JSX.Element}
 * @constructor
 */
const CourseItem = ({title, desc, isComingSoon, link = ""}) => {
    return (
        <div className="w-full md:w-[32%] bg-white px-1.5 py-3 flex gap-3 relative">
            {isComingSoon &&
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-none z-20 flex items-center justify-center">
                    <div className=" text-xs text-white p-1 text-center w-36 bg-[#1C3B66] -rotate-45 ">Coming soon</div>
                </div>
            }

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/courses/programs-1.jpg"
                alt="programs-1"
                className='h-24 md:h-32 my-auto'
            />

            <div>
                <h6 className="text-md font-semibold leading-5">{title}</h6>

                <p className='text-xs my-2'>
                    {desc}
                </p>

                <div className="flex justify-end pr-8">
                    <Link href={link} className={"bg-c-red text-white text-xs flex items-center gap-2 rounded-lg p-2"}>
                        Couse Details <HiOutlineArrowSmallRight className='text-lg'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseItem
