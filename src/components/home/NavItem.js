import Link from 'next/link'
import React from 'react'

const NavItem = ({ isCurrent, title, handleClick, path = "" }) => {
    return (
        <Link className='h-full' as={"div"} href={path} onClick={handleClick}>
            <div className={`c-normal h-full flex items-center px-6 text-white ${isCurrent ? "bg-c-red " : "bg-none"} hover:bg-c-red ease-in duration-300`} >{title}</div>
        </Link>
    )
}

export default NavItem