import {AdmissionQuestions, Application, Carousel, HowToApply, Intakes, Qualifications} from '@/components'
import Layout from '@/layout'
import React from 'react'

const admission = () => {
    return (
        <Layout>
            {/* Carousel */}
            <Carousel
                title='Our Assurance'
                subTitle={<>
                    We boast of having the most elaborate <br/>
                    applications and admission process in the industry
                </>}
            >
            </Carousel>
            {/**How to apply */}
            <HowToApply/>

            {/**Application procedure */}
            <Application/>

            {/** Course Qualifications */}
            <Qualifications/>

            {/**Intakes */}
            <Intakes/>

            {/**Questions */}
            <AdmissionQuestions/>

        </Layout>
    )
}

export default admission
