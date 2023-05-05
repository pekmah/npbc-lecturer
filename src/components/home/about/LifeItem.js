import React from 'react'

const LifeItem = ({ style, title, children, desc }) => {
    return (
        <div className='relative h-[400px] w-full md:w-1/4' style={style}>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center text-white px-2">
                <span className="c-h7 text-2xl leading-10" data-aos="fade-up">{title}</span>

                <p className="mt-4" data-aos="fade-up">
                    {desc}
                </p>
            </div>
        </div >
    )
}

export default LifeItem
