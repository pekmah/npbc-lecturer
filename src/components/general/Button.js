import React from 'react'

const Button = ({className,children, ...rest}) => {
  return (
    <button className={`rounded-lg p-2 ${className}`} {...rest}>{children}</button>
  )
}

export default Button