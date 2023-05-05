import React from 'react'

const SvgItem = ({ title, children }) => {
    return (
        <div className="">
            <div className="w-14 h-14 p-3 md:p-0 md:w-[90px] md:h-[90px] rounded-full bg-white flex items-center justify-center">
                {children}
            </div>
            <p className="my-3 text-center text-white">{title}</p>
        </div>
    )
}

export default SvgItem
