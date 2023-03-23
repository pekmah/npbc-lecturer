import Image from 'next/image'
import React from 'react'
import { Button } from '../general'
import { FiPhone } from 'react-icons/fi'
import {MdPersonOutline} from 'react-icons/md'

const Header = () => {
  return (
      <div className='bg-white px-10 h-20 flex items-center text-black'>
          <div className="flex gap-6 items-center flex-1">
              {/* Image */}
              <Image height={80} width={70} src="/images/layout/logo.png" alt="logo" />

              {/* title */}
              <h4 className="c-xl font-bold text-c-blue">Nairobi Pentecostal Bible College</h4>
            </div>

          {/* buttons */}
          <div className="flex gap-3 flex-1 justify-end">
              <Button className={"bg-c-red-pale flex items-center justify-center gap-2 c-normal py-2.5 w-[160px] text-c-red"}>
                  {/* icon */}
                  <FiPhone className=''/>
                  {/* phone */}
                  <span className='text-[12px]'>+254 754 569687</span>
              </Button>
              
              <Button className={"bg-c-red-pale flex items-center justify-center gap-2 c-normal py-2.5 w-[160px] text-c-red"}>
                  {/* icon */}
                  <MdPersonOutline className='text-lg'/>
                  {/* phone */}
                  <span className='text-[12px]'>Access Portals</span>
              </Button>
              
              <Button className={"bg-c-red flex items-center justify-center gap-2 c-normal py-2.5 w-[160px] text-white"}>
                 
                  {/* phone */}
                  <span className='text-[12px]'>Apply Now</span>
              </Button>
          </div>
    </div>
  )
}

export default Header

