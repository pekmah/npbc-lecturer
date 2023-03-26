import React from 'react'

const Floater = () => {
    return (
        <div className="w-full absolute top-0 bottom-0 right-0 left-0 z-20 flex ">
            <div className="my-auto px-10">
                <div className="w-52 bg-c-red py-3 font-bold text-center">
                    <span className="font-bold text-white">Our Philosophy</span>
                </div>
                <div className="">
                    <div className="bg-[#ffffffd0] p-7 w-auto">
                        <p className="c-h5 font-bold text-black">Nurturing potential building character</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Floater