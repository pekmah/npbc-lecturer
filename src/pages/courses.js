import { Carousel, Statistics } from '@/components'
import Layout from '@/layout'
import React from 'react'

const Courses = () => {
    return (
        <Layout>
            {/* Carousel */}
            <Carousel
                title='Our Assurance'
                subTitle={
                    <>
                        Your search for a  wholesome approach <br />
                        to theological teachings ends here
                    </>
                }
            />

            {/* Statistics */}
            <Statistics />
        </Layout>
    )
}

export default Courses