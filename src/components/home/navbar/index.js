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
                path: "/admission#how-to-apply"
            },
            {
                name: "Course Qualifications",
                path: "/admission#qualifications"
            },
            {
                name: "Our Intakes",
                path: "/admission#intakes"
            },
            {
                name: "Application FAQs",
                path: "/admission#faqs"
            },
            {
                name: "Resume Application",
                path: "/admission#how-to-apply"
            },
        ]
    }, {
        name: "Courses",
        path: "/courses",
        key: "courses",
        subnavs: [
            {
                name: "Undergraduate Programs",
                path: "/courses#undergraduate"
            },
            {
                name: "Diploma Programs",
                path: "/courses#diploma"
            },
            {
                name: "Certificate Programs",
                path: "/courses#certificate"
            },
            {
                name: "Study Modes",
                path: "/courses#modes"
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
                path: "/about#history"
            },
            {
                name: "News and Articles",
                path: "/about#"
            },
            {
                name: "Mission, Vision and Core values",
                path: "/about#mission"
            },
            {
                name: "Strategic Goals",
                path: "/about#goals"
            },
            {
                name: "NPBC Leadership",
                path: "/about#leadership"
            },
            {
                name: "Partners",
                path: "/about#partners"
            },
        ],
    },
]
