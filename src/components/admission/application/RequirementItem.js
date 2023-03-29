import React from 'react'

const RequirementItem = ({title,desc}) => {
    return (
        <div className="flex gap-4" >
            {/**Line */}
            <div className="flex items-center">
                <div className='h-[1.5px] w-5 bg-white' />
                <div className="rounded-full h-[6px] w-[6px] bg-white"></div>
            </div>

            <div className="flex flex-col gap-1">
                <h5 className='font-medium'>{title}</h5>

                <p className='text-[13px] font-light'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default RequirementItem
