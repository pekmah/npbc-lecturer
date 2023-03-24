import React, { useState } from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    const [currentTab, setCurrentTab] = useState("home")

    return (
        <div className='bg-c-blue h-14 px-10 flex justify-between items-center '>
            {/* Nav Items */}
            {nav_list?.map((item) => (
                <NavItem title={item?.name} isCurrent={currentTab?.toLocaleLowerCase() === item?.name?.toLocaleLowerCase()} key={item?.name?.toLocaleLowerCase()} handleClick={() => setCurrentTab(item?.name?.toLocaleLowerCase())} />
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