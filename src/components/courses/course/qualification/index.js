import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Qualification = () => {
    return (
        <div className='flex bg-c-blue'>
            <div className='w-1/4' />

            <div className='w-3/4 text-c-white py-12'>
                {/* Qualifications Section */}
                {/* title */}
                <h6 className='text-xl font-semibold'>Course Qualification</h6>

                {/* qualifications list */}
                <ul className="py-4 flex flex-col gap-2 px-2">
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            A student should have completed secondary school education
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            Student should have attained a minimum of C+ in KCSE or have diploma in
                            theology from a recognized institution cation
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            Student should have be a practicing Christian under someone’s authority
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            Student should be available for the period of the course duration
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            Student should be proficient in English in reading and writing
                        </p>
                    </li>
                </ul>



                {/* Requirements Section */}
                {/* title */}
                <h6 className='text-xl font-semibold mt-2'>Applications Requirements</h6>

                {/* qualifications list */}
                <ul className="py-4 flex flex-col gap-2 px-2">
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            KCSE certificate or Diploma certificate
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            National ID or passport

                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            Ksh 3000 application fee
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            Photo passport
                        </p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <AiOutlineCheckCircle className='text-lg' />
                        <p className='text-lg font-medium '>
                            passport
                        </p>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Qualification