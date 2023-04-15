import {Carousel, CourseFeeStructure, CourseOutline, CourseQualifications, CourseStatistics} from '@/components'
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
                        Your search for a wholesome approach <br/>
                        to theological teachings ends here
                    </>
                }
            />

            {/* // Statistics section */}
            <CourseStatistics/>

            {/* Qualifications */}
            <CourseQualifications/>

            {/*    Course outline       */}
            <CourseOutline/>

            {/*    Course Fee structure     */}
            <CourseFeeStructure/>
        </Layout>
    )
}

export default course
