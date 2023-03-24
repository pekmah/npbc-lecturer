import React from 'react'

const SvgItem = ({ title, children }) => {
    return (
        <div className="">
            <div className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center">
                {children}
            </div>
            <p className="my-3 text-center">{title}</p>
        </div>
    )
}

export default SvgItem