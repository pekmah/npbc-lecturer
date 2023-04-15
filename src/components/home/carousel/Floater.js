import React from 'react'

const Floater = ({ title, subTitle }) => {
    return (
        <div className="w-full absolute top-0 bottom-0 right-0 left-0 z-20 flex" data-aos="fade-up">
            <div className="mt-16 px-10">
                <div className="w-52 bg-c-red py-3 font-bold text-center">
                    <span className="font-bold text-white">
                        {title}
                    </span>
                </div>
                <div className="">
                    <div className="bg-[#ffffffd0] p-6">
                        <p className="text-2xl font-bold text-black">
                            {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Floater