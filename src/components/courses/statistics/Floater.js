import React from 'react'
import StatisticsItem from './StatisticsItem'

const Floater = () => {
    return (
        <div className='absolute flex flex-col items-center justify-center gap-3 z-40 shadow-md -top-[45%] left-[15%] right-[15%] bg-slate-500 h-40'
            style={{
                background: "rgba(255, 255, 255, 0.23)",
                boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)"
            }}
        >
            {/*Title */}
            <h4 className='text-white c-h7 font-medium'>Our Statistics</h4>
            <div className="w-10/12 mx-auto">

                <div className="text-center flex-1 flex justify-between">
                    <StatisticsItem
                        superText={"4024+"}
                        subText={"Hours Lectured"}
                    />

                    <StatisticsItem
                        superText={"3750+"}
                        subText={"Students taught"}
                    />

                    <StatisticsItem
                        superText={"7"}
                        subText={"Course Provided"}
                    />

                    <StatisticsItem
                        superText={"3"}
                        subText={"Course Provided"}
                    />

                </div>
            </div>
        </div>
    )
}

export default Floater