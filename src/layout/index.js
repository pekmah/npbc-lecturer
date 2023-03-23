import { LayoutHeader } from '@/components'
import Footer from '@/components/footer'
import React from 'react'

const Layout = ({children}) => {
  return (
      <main className='min-h-screen block bg-white relative'>
      <LayoutHeader />
      
      {/* children */}
      {children}

      {/* Footer */}
      <Footer/>
      </main>
  )
}

export default Layout