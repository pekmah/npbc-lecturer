import { Carousel } from '@/components'
import Layout from '@/layout'
import React from 'react'

const Courses = () => {
    return (
        <Layout>
            {/* Carousel */}
            <Carousel
                title='Our Assurance'
                subTitle={<>
                    Your search for a  wholesome approach <br />
                    to theological teachings ends here
                </>}
            />
        </Layout>
    )
}

export default Courses