import React from 'react';

const AvailableCourses = () => {
    return (
        <div className={"flex-1 flex flex-col"}>
            <h6 className={"c-medium font-bold text-c-blue px-3"}>Program of choice</h6>

            <div className={"px-3 border-l border-l-gray-400 my-4 flex-1"}>
                <ul className={"py-3 flex flex-col gap-4"}>

                    <li>
                        <div className={"flex border border-gray-200"}>
                            <div className={"h-24 w-32 flex-0.4 relative overflow-hidden"}>
                                <img src={"/images/home/course-1.jpg"} alt={"statistics-1"}
                                     className='w-full h-full object-cover'/>
                                <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#A225317A]'/>
                            </div>

                            <div className={"flex-1 p-2 flex flex-col gap-1"}>
                                <h6 className={"font-bold text-md"}>Diploma in Bible and Theology</h6>
                                <div className={"flex gap-1 text-sm"}>
                                    <span className={"font-semibold"}>Study Mode:</span>
                                    <span className={""}>Regular</span>
                                </div>

                                <div className={"flex gap-1 text-sm"}>
                                    <span className={"font-semibold"}>Start Date:</span>
                                    <span className={""}>1st Feb 2024</span>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li>
                        <div className={"flex border border-gray-200"}>
                            <div className={"h-24 w-32 flex-0.4 relative overflow-hidden"}>
                                <img src={"/images/home/course-1.jpg"} alt={"statistics-1"}
                                     className='w-full h-full object-cover'/>
                                <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#A225317A]'/>
                            </div>

                            <div className={"flex-1 p-2 flex flex-col gap-1"}>
                                <h6 className={"font-bold text-md"}>Diploma in Christian Ministry</h6>
                                <div className={"flex gap-1 text-sm"}>
                                    <span className={"font-semibold"}>Study Mode:</span>
                                    <span className={""}>Regular</span>
                                </div>

                                <div className={"flex gap-1 text-sm"}>
                                    <span className={"font-semibold"}>Start Date:</span>
                                    <span className={""}>1st Feb 2024</span>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AvailableCourses;
