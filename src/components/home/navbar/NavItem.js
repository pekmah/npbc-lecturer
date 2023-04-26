import Link from 'next/link'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import DropDown from './DropDown'

const NavItem = ({
    isCurrent,
    title,
    handleClick,
    subMenu,
    hasSubmenu,
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
            <button className='h-full' href={path} onClick={handleClick}>
                <div className={`c-normal h-full flex items-center px-6 text-white ${isCurrent || isCurrentCollapsibleTab ? "bg-c-red " : "bg-none"} hover:bg-c-red ease-in duration-300`} >
                    {title}
                    {hasSubmenu && <FiChevronDown className='text-white text-xl mx-2' />}
                </div>

            </button>

            <DropDown list={subMenu} isCurrent={isCurrentCollapsibleTab} />
        </div>
    )
}

export default NavItem
