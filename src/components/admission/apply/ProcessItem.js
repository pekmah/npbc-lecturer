import React from 'react'

const ProcessItem = ({text,subtext}) => {
    return (
        <div className=" flex flex-col items-center gap-2 font-medium">
            <div className="flex items-center flex-col">
                <div className='w-[2px] h-6 bg-c-red' />
                <div className="rounded-full h-[6px] w-[6px] bg-c-red"></div>
            </div>

            <p className='text-xs text-c-blue leading-3'><span className={"text-c-red"} >{text} </span> <br /> {subtext} </p>
        </div>
    )
}

export default ProcessItem
