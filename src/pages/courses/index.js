import {Carousel, Programs, ProgramView, Statistics, StudyModes} from '@/components'
import Layout from '@/layout'
import React from 'react'

const Courses = () => {
    return (
        <Layout>
            {/* Carousel */}
            <Carousel
                title='Our Assurance'
                subTitle={
                    <p>
                        Your search for a wholesome approach <br/>
                        to theological teachings ends here
                    </p>
                }
            />

            {/* Statistics */}
            <Statistics/>

            {/** Programs */}
            <Programs/>

            {/* Program View*/}
            <ProgramView/>

            {/*Study Modes*/}
            <StudyModes/>

        </Layout>
    )
}

export default Courses
