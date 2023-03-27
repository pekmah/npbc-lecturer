import React, { useState } from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    const [currentTab, setCurrentTab] = useState("home")
    const [currentCollapsibleTab, setCurrentCollapsibleTab] = useState("")

    return (
        <div className='bg-c-blue-dark h-16 px-10 flex justify-between items-center '>
            {/* Nav Items */}
            {nav_list?.map((item) => (
                <NavItem
                    key={item?.name?.toLocaleLowerCase()}
                    title={item?.name}
                    subMenu={item?.subnavs}
                    isCurrent={currentTab?.toLocaleLowerCase() === item?.name?.toLocaleLowerCase()}
                    isCurrentCollapsibleTab={currentCollapsibleTab?.toLocaleLowerCase() === item?.name?.toLocaleLowerCase()}
                    setCurrentCollapsibleTab={setCurrentCollapsibleTab}
                    handleClick={() => setCurrentTab(item?.name?.toLocaleLowerCase())}
                />
            ))}
        </div>
    )
}

export default Navbar

const nav_list = [
    {
        name: "Home",
        path: "",
    }, {
        name: "Admissions",
        path: "",
        subnavs: [
            {
                name: "How to Apply",
                path: ""
            },
            {
                name: "Course Qualifications",
                path: ""
            },
            {
                name: "Our Intakes",
                path: ""
            },
            {
                name: "Application FAQs",
                path: ""
            },
            {
                name: "Resume Application",
                path: ""
            },
        ]
    }, {
        name: "Courses",
        path: "",
    }, {
        name: "E-Learning",
        path: "",
    }, {
        name: "Downloads",
        path: "",
    }, {
        name: "Contact Us",
        path: "",
    },
]