import { Carousel } from '@/components'
import Layout from '@/layout'
import React from 'react'

const admission = () => {
    return (
        <Layout>
            {/* Carousel */}
            <Carousel
                title='Our Assurance'
                subTitle={<>
                    We boast of having the most elaborate <br />
                    applications and admission process in the industry
                </>}
            />

        </Layout>
    )
}

export default admission