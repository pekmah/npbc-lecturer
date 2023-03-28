import { AboutUs, Admission, Carousel, News, Questions } from '@/components'
import Layout from '@/layout'

export default function Home() {
  return (
    <>


      <Layout>

        {/* Carousel */}
        <Carousel />

        {/* About us */}
        <AboutUs />

        {/* Admission */}
        <Admission />

        {/* News and updates */}
        <News />

        {/* Questions */}
        <Questions />
      </Layout>
    </>
  )
}
