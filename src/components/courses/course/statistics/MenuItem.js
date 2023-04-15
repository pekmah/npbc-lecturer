import React from 'react';

/**
 * @param {boolean} isCurrent
 * @param {string} name
 * @return {JSX.Element}
 */
const MenuItem = ({ isCurrent, name }) => {
    return (
        <a href={"/"}>
            <li className={`  my-2 ${isCurrent ? "text-primary font-bold c-xl" : "text-gray-500 font-semibold text-[19px] "}`}>
                <span className={"leading-10"}>{name}</span>
                {isCurrent && <hr className={"h-1 bg-c-red w-full mx-auto border-0"} />}
            </li>
        </a>
    );
};

export default MenuItem;
