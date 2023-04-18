import React from 'react';
import {FiChevronDown} from "react-icons/fi";

/**
 *
 * @param {function} switchModal
 * @returns {JSX.Element}
 * @constructor
 */
const AppStages = ({switchModal}) => {
    return (
        <div className={"flex-1"}>
            <h6 className={"c-medium font-bold text-c-blue px-3"}>Application Stages</h6>

            <div className={"px-3 border-l border-l-gray-400 my-4"}>
                <p className={"leading-6 text-sm"}>This process involves 5 simple steps and takes 20 - 30 minutes only.
                    Here is
                    what to expect.</p>

                <ul className={"py-3 flex flex-col "}>
                    <button onClick={() => switchModal(1)}>
                        <li className={"py-2 focus:outline-none text-sm font-semibold flex justify-between"}>
                            <span>Registration Requirements</span>
                            {/*    icon*/}
                            <FiChevronDown className={"text-c-red text-2xl"}/>
                        </li>
                    </button>

                    <button onClick={() => switchModal(2)}>
                        <li className={"py-2 focus:outline-none text-sm font-semibold flex justify-between"}>
                            <span>Select course</span>
                            {/*    icon*/}
                            <FiChevronDown className={"text-c-red text-2xl"}/>
                        </li>
                    </button>

                    <button onClick={() => switchModal(3)}>
                        <li className={"py-2 focus:outline-none text-sm font-semibold flex justify-between"}>
                            <span>Your Details</span>
                            {/*    icon*/}
                            <FiChevronDown className={"text-c-red text-2xl"}/>
                        </li>
                    </button>

                    <button onClick={() => switchModal(4)}>
                        <li className={"py-2 focus:outline-none text-sm font-semibold flex justify-between"}>
                            <span>Payment</span>
                            {/*    icon*/}
                            <FiChevronDown className={"text-c-red text-2xl"}/>
                        </li>
                    </button>

                    <button onClick={() => switchModal(5)}>
                        <li className={"py-2 focus:outline-none text-sm font-semibold flex justify-between"}>
                            <span>Preview application</span>
                            {/*    icon*/}
                            <FiChevronDown className={"text-c-red text-2xl"}/>
                        </li>
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default AppStages;
