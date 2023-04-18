import {ApplicationModal, LayoutHeader, Navbar} from '@/components'
import Footer from '@/components/footer'
import Head from 'next/head'
import React, {useState} from 'react'

const Layout = ({children}) => {

    /**
     * @type {boolean}
     * @description handles the launch of the application(components/modal/application) modal
     */
    const [show, setShow] = useState(true)

    return (
        <main className='overflow-y-hidden bg-white relative'>
            <Head>
                <title>Nairobi Pentecostal Bible College</title>
                <meta name="description" content="Nurturing potential, building character"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/layout/logo.png"/>
            </Head>
            <LayoutHeader/>\

            {/*  Application Modal    */}
            <ApplicationModal isOpen={show}/>

            {/* Navbar */}
            <Navbar/>

            {/* children */}
            {children}

            {/* Footer */}
            <Footer/>
        </main>
    )
}

export default Layout
