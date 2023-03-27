import { LayoutHeader, Navbar } from '@/components'
import Footer from '@/components/footer'
import React from 'react'

const Layout = ({children}) => {
  return (
      <main className='min-h-screen block bg-white relative'>
      <LayoutHeader />

      {/* Navbar */}
      <Navbar />

      {/* children */}
      {children}

      {/* Footer */}
      <Footer/>
      </main>
  )
}

export default Layout