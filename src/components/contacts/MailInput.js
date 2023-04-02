import React from 'react';

/**
 * @param {string} title
 * @return {JSX.Element}
 * @constructor
 */
const MailInput = ({title}) => {
    return (
        <div className={"w-[47%]"}>
            {/*    Name     */}
            <h3 className={"font-semibold "}>
                {title}
            </h3>

            <input className={"border-b border-gray-400 w-full h-10 bg-inherit focus:outline-none"}/>
        </div>
    );
};

export default MailInput;
