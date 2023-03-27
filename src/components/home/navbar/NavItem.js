import Link from 'next/link'
import React from 'react'
import DropDown from './DropDown'

const NavItem = ({
    isCurrent,
    title,
    handleClick,
    subMenu,
    isCurrentCollapsibleTab,
    setCurrentCollapsibleTab,
    path = ""
}) => {
    return (
        <div
            className='h-full relative'
            onMouseOver={() => {
                if (subMenu && subMenu?.length > 0) {
                    setCurrentCollapsibleTab(title?.toLowerCase())
                }
            }}
            onMouseLeave={() => {
                if (subMenu && subMenu?.length > 0) {
                    setCurrentCollapsibleTab("")
                }
            }}
        >
            <Link className='h-full' href={path} onClick={handleClick}>
                <div className={`c-normal h-full flex items-center px-6 text-white ${isCurrent || isCurrentCollapsibleTab ? "bg-c-red " : "bg-none"} hover:bg-c-red ease-in duration-300`} >{title}</div>

            </Link>

            <DropDown list={subMenu} isCurrent={isCurrentCollapsibleTab} />
        </div>
    )
}

export default NavItem