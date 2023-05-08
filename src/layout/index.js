import {ApplicationModal, LayoutHeader, Navbar} from '@/components'
import Footer from '@/components/footer'
import Head from 'next/head'
import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router"

const Layout = ({children}) => {
    const router = useRouter()

    const query = router.query

    /**
     * @type {boolean}
     * @description handles the launch of the application(components/modal/application) modal
     */
    const [show, setShow] = useState(false)

    const handleOpenModal = () => {
        setShow(true)
    }

    /**
     * @method
     * @return void
     * @desc extracts apply query from the url
     */
    const handleQuery = () => {
        //     If a query name apply is passed, show the application modal.
        const applicationQuery = query?.apply

        if (applicationQuery) {
            setShow(applicationQuery)
        } else {
            setShow(false)
        }
    }

    /**
     * @return void
     * @desc deletes apply query passed via url
     */
    function removeQueryParams() {
        router.push(router.pathname);
    }

    /**
     * @return void
     * @desc closes the applicatoin modal
     */
    const handleCloseApplicationModal = () => {
        removeQueryParams()
        setShow(false)
    }
    useEffect(() => {
        //     Listen for query change
        handleQuery()
    }, [query])

    return (
        <main className='max-w-screen overflow-x-hidden overflow-y-hidden bg-white relative'>
            <Head>
                <title>Nairobi Pentecostal Bible College</title>
                <meta name="description" content="Nurturing potential, building character"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/layout/logo.png"/>
            </Head>
            <LayoutHeader showModal={handleOpenModal}/>

            {/*  Application Modal    */}
            {show && <ApplicationModal isOpen={show} handleCloseModal={handleCloseApplicationModal}/>}

            {/* Navbar */}
            <Navbar/>

            {/* children */}
            {children}

            {/* Footer */}
            <Footer showModal={handleOpenModal}/>
        </main>
    )
}

export default Layout
