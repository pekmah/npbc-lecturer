import { Carousel, CourseQualifications, CourseStatistics } from '@/components'
import Layout from '@/layout'
import React from 'react'

const course = () => {
    return (
        <Layout>
            {/* Carousel */}
            <Carousel
                title='Our Assurance'
                subTitle={
                    <>
                        Your search for a wholesome approach <br />
                        to theological teachings ends here
                    </>
                }
            />

            {/* // Statistics section */}
            <CourseStatistics />

            {/* Qualifications */}
            <CourseQualifications />

        </Layout>
    )
}

export default course