import React from 'react';

/**
 * @param {number} currentModal
 * @param {function} switchModal
 * @return {JSX.Element}
 * @constructor
 */
const Header = ({currentModal, switchModal}) => {
    return (
        <div className={"flex justify-between pt-4"}>
            {
                nav_list?.map((item, key) => (
                    <button
                        key={key}
                        onClick={() => switchModal(key)}
                        className={`flex h-16 border-b-[4px]  font-bold text-c-blue items-center hover:bg-[#A2253121] ${item?.class} ${currentModal >= key ? "border-c-red" : "border-[#A2253121]"}`}>
                        <span>{item?.name}</span>
                    </button>
                ))
            }
        </div>
    );
};

export default Header;


const nav_list = [
    {
        name: "Welcome",
        key: 1,
        class: "flex-1 pr-4 justify-end "
    }, {
        name: "All you need",
        key: 2,
        class: "flex-1 justify-center"
    }, {
        name: "Select Course",
        key: 3,
        class: "flex-1 justify-center"
    }, {
        name: "Your Details",
        key: 4,
        class: "flex-1 justify-center"
    }, {
        name: "Payment",
        key: 5,
        class: "flex-1 justify-center"
    }, {
        name: "Preview Application",
        key: 6,
        class: "flex-1 justify-center"
    }, {
        name: "Finish",
        key: 7,
        class: "flex-1 pl-6 justify-start"
    },
]
