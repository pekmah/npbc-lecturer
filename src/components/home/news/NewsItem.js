/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/general'
import React from 'react'

const NewsItem = ({ image, date, desc }) => {
    return (
        <div className='w-[24%] flex flex-col gap-4'>
            <img className='h-44' src={image} alt="news" />

            <span className="text-gray-400 font-medium c-medium">
                {date}
            </span>

            <p className='text-black c-normal leading-6'>{desc}</p>

            <div className="text-white">
                <Button className={"bg-c-blue py-3 px-4 text c-normal"} text={"Read More"} />
            </div>
        </div >
    )
}

export default NewsItem