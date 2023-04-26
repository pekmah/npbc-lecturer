import React, {useEffect, useState} from 'react'
import NavItem from './NavItem'
import {useRouter as useNavigate} from "next/navigation";
import {useRouter} from "next/router";

const Navbar = () => {
    const navigate = useNavigate()
    const router = useRouter()

    const [currentTab, setCurrentTab] = useState("home")
    const [currentCollapsibleTab, setCurrentCollapsibleTab] = useState("")

    const handleNavigate =(nav)=>{
        setCurrentTab(nav?.path)
        navigate.push(nav?.path)
    }



    useEffect(()=>{
        const location = router.pathname.split("/")[1]

        if(location===""){
            setCurrentTab("home")
        }else {
            setCurrentTab(location)
        }

    },[router.pathname])

    return (
        <div className='bg-c-blue-dark h-14 px-10 flex justify-between items-center '>
            {/* Nav Items */}
            {nav_list?.map((item) => {

                return (
                    <NavItem
                        key={item?.name?.toLocaleLowerCase()}
                        title={item?.name}
                        path={item?.path}
                        subMenu={item?.subnavs}
                        hasSubmenu={item?.subnavs && item?.subnavs?.length > 0}
                        isCurrent={currentTab?.toLocaleLowerCase() === item?.key}
                        isCurrentCollapsibleTab={currentCollapsibleTab?.toLocaleLowerCase() === item?.name?.toLocaleLowerCase()}
                        setCurrentCollapsibleTab={setCurrentCollapsibleTab}
                        handleClick={() => handleNavigate(item)}
                    />
                )
            })}

        </div>
    )
}

export default Navbar

const nav_list = [
    {
        name: "Home",
        path: "/",
        key:"home"
    }, {
        name: "Admissions",
        path: "/admission",
        key:"admission",
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
        key: "courses",
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
        key: "e-learning"
    }, {
        name: "Downloads",
        path: "/downloads",
        key:"downloads"
    }, {
        name: "Contact Us",
        path: "/contacts",
        key:"contacts"
    }, {
        name: "About Us",
        path: "/about",
        key: "about",
        subnavs: [
            {
                name: "Our History",
                path: ""
            },
            {
                name: "News and Articles",
                path: ""
            },
            {
                name: "Mission, Vision and Core values",
                path: ""
            },
            {
                name: "Strategic Goals",
                path: ""
            },
            {
                name: "NPBC Leadership",
                path: ""
            },
            {
                name: "Partners",
                path: ""
            },
        ],
    },
]
