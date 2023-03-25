import { MdOutlineAdd } from 'react-icons/md'

const Questions = () => {
    return (
        <div className='px-14 py-10 bg-gray-100'>
            <div className="p-10 bg-white text-black">
                {/* title */}
                <h2 className="c-h4 font-semibold ">Questions other <span className='text-c-red'>students</span> are asking</h2>

                {/* Questions */}
                <div className="flex my-6">
                    {/* new students */}
                    <div className="flex-[0.3]">
                        <div className="flex">
                            <div>
                                <span className="c-medium font-semibold">
                                    New Students
                                </span>

                                <hr className='h-1 bg-c-red rounded-full' />
                            </div>
                        </div>

                        <ul>
                            <li className='my-4 text-gray-400 font-semibold'>New Students</li>
                            <li className='my-4 text-gray-400 font-semibold'>New Students</li>
                            <li className='my-4 text-gray-400 font-semibold'>New Students</li>
                            <li className='my-4 text-gray-400 font-semibold'>New Students</li>
                            <li className='my-4 text-gray-400 font-semibold'>New Students</li>
                            <li className='my-4 text-gray-400 font-semibold'>New Students</li>
                        </ul>
                    </div>
                    {/* Questions */}
                    <ul className=' flex-1'>
                        <li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li><li className='flex justify-between py-3 border-b border-gray-200'>
                            <span className="c-xl">Question 1</span>

                            <MdOutlineAdd className='text-c-red text-2xl' />
                        </li>

                        <div className="h-10" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Questions