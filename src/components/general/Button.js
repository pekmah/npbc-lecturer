import React from 'react'

const Button = ({ className, children, text, ...rest }) => {
  return (
    <button className={`rounded-lg p-2 ${className}`} {...rest}>{children || text}</button>
  )
}

export default Button