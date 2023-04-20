import Input from '@/components/general/Input'
import React, { useState } from 'react'

const ProgramForm = () => {
    const [current, setCurrent] = useState("")
    return (
        <div className={"p-5 border border-gray-300"}>
            <h6 className={"font-bold text-lg"}>Program</h6>

            {/*    form     */}
            <form className={"grid grid-cols-3 gap-x-4 gap-y-6 text-c-blue"} action="">

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Program Level</h6>

                    <select id="countries"
                        className="bg-inherit border-b border-gray-400 text-gray-900 rounded-none focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                        <option selected>Select</option>
                        {programs?.map((item, key) => (
                            <option key={key} value="1">{item}</option>
                        ))}


                    </select>
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Course</h6>

                    <select id="countries"
                        className="bg-inherit border-b border-gray-400 text-gray-900 rounded-none focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                        <option selected>Select</option>
                    </select>
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Learning center</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Start From</h6>

                    <input type={"date"} className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"} />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Learning Mode</h6>

                    <div className='flex h-10 items-end gap-5'>
                        <div className='flex items-center'>
                            <input id="default-radio-1"
                                type="radio" value="" name="default-radio"
                                className="focus:border-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-1"
                                className={`ml-2 text-sm font-medium text-c-blue dark:text-gray-300`}>Regular</label>
                        </div>

                        <div className='flex items-center'>
                            <input checked id="default-radio-1"
                                type="radio" value="" name="default-radio"
                                className="focus:border-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-1"
                                className={`ml-2 text-sm font-medium text-c-blue dark:text-gray-300`}>Virtual</label>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProgramForm

const programs = [
    "certificate",
    "Associate Diploma",
    "Diploma",
    "Undergraduate Programs",
    "Postgraduate Diploma"
]
