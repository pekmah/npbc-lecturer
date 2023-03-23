import { LayoutHeader } from '@/components'
import React from 'react'

const Layout = ({children}) => {
  return (
      <main className='min-h-screen block bg-white relative'>
      <LayoutHeader />
      
      {/* children */}
      {children}
      
      </main>
  )
}

export default Layout