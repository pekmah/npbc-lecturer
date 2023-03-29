import React from 'react'

const QualificationItem = ({title, desc}) => {
  return (
    <div className="flex flex-col p-2 gap-3">
    {/**Title */}
    <hr className='bg-[#D9D9D9] h-[1.5px] rounded w-full' />

    <h6 className="font-medium text-c-blue">{title}</h6>

    <p className='text-xs text-c-blue'>
        {desc}
    </p>
</div>
  )
}

export default QualificationItem
