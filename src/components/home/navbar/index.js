import React, {useState} from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    const [currentTab, setCurrentTab] = useState("home")
    const [currentCollapsibleTab, setCurrentCollapsibleTab] = useState("")

    return (
        <div className='bg-c-blue-dark h-14 px-10 flex justify-between items-center '>
            {/* Nav Items */}
            {nav_list?.map((item) => (
                <NavItem
                    key={item?.name?.toLocaleLowerCase()}
                    title={item?.name}
                    path={item?.path}
                    subMenu={item?.subnavs}
                    hasSubmenu={item?.subnavs && item?.subnavs?.length > 0}
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
        path: "/",
    }, {
        name: "Admissions",
        path: "/admission",
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
        path: "/courses",
        subnavs: [
            {
                name: "Undergraduate Programs",
                path: ""
            },
            {
                name: "Diploma Programs",
                path: ""
            },
            {
                name: "Certificate Programs",
                path: ""
            },
            {
                name: "Study Modes",
                path: ""
            },
        ]
    }, {
        name: "E-Learning",
        path: "",
    }, {
        name: "Downloads",
        path: "/downloads",
    }, {
        name: "Contact Us",
        path: "",
    },
]
