import React from 'react'

const CourseItem = ({ style, title, children }) => {
    return (
        <div className='relative h-[350px] w-1/4' style={style}>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
                <span className="c-h6 text-2xl leading-10 text-white">{title || children}</span>
            </div>
        </div>
    )
}

export default CourseItem