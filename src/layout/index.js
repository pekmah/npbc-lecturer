import { LayoutHeader, Navbar } from '@/components'
import Footer from '@/components/footer'
import Head from 'next/head'
import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='overflow-y-hidden bg-white relative'>
      <Head>
        <title>Nairobi Pentecostal Bible College</title>
        <meta name="description" content="Nurturing potential, building character" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/layout/logo.png" />
      </Head>
      <LayoutHeader />

      {/* Navbar */}
      <Navbar />

      {/* children */}
      {children}

      {/* Footer */}
      <Footer />
      </main>
  )
}

export default Layout