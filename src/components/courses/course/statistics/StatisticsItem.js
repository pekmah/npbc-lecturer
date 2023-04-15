import React from 'react'

const StatisticsItem = ({ superText, subText }) => {
    return (
        <div className='text-c-blue flex flex-col gap-2'>
            <h4 className='c-h7 text-3xl font-medium'>{superText}</h4>

            <span className='font-medium '>{subText}</span>
        </div>
    )
}

export default StatisticsItem