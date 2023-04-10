import React from 'react'
import NewsItem from './NewsItem'

const News = () => {
    return (
        <div className='py-12 px-8'>
            <div className="flex items-center gap-6" data-aos="fade-up">
                <p className="c-xl text-black font-bold ">News & Updates</p>

                <hr className='bg-gray-100 h-0.5 rounded-full flex-1' />
            </div>

            {/* news items */}
            <div className="flex gap-3 py-5">
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"} desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"} />
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"} desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"} />
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"} desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"} />
                <NewsItem image={"/images/home/news-1.jpg"} date={"1st March 2023"} desc={"We exist to bring maturity to church and transformation to society through equipped leadership based on Christian values and principles by training people in their area of calling"} />

            </div>
            <div className="h-20" />
        </div>
    )
}

export default News