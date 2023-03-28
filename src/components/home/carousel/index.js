/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Car } from 'react-responsive-carousel';
import CourseItem from './CourseItem';
import Line from './Line';
import Floater from './Floater';

const Carousel = ({
    title = "",
    subTitle = ""
}) => {
    return (
        <div className="block">
            <div className="h-[60vh] relative">
                <Car autoPlay showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop dynamicHeight={"90vh"}>
                    <div className='relative h-[60vh]'>
                        <img className='h-[60vh] object-cover' src="/images/home/carousel-1.jpg" alt='img-1' />

                    </div>

                    <div className='relative h-[60vh]'>
                        <img className='h-[60vh] object-cover' src="/images/home/carousel-2.jpg" alt='img-2' />

                    </div>

                    <div className='relative h-[60vh]'>
                        <img className='h-[60vh] object-cover' src="/images/home/carousel-3.jpg" alt='img-3' />
                    </div>
                </Car>

                <Floater
                    title={title}
                    subTitle={subTitle}
                />

            </div>

            {/* courses */}
            <div className="flex">
                <CourseItem style={{
                    background:
                        " linear-gradient(0deg, rgba(162, 37, 49, 0.91), rgba(162, 37, 49, 0.91)), url(/images/home/course-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                }}

                >
                    Bible & Theology <br /> Courses
                    <Line />
                </CourseItem>

                <CourseItem style={{
                    background:
                        " linear-gradient(0deg, rgba(162, 37, 49, 0.91), rgba(162, 37, 49, 0.91)), url(/images/home/course-2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

                >
                    Bachelor of Arts <br /> (Intercurtural Studies)
                    <Line />

                </CourseItem>

                <CourseItem style={{
                    background:
                        " linear-gradient(0deg, rgba(162, 37, 49, 0.91), rgba(162, 37, 49, 0.91)), url(/images/home/course-3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

                >
                    Christian Education <br /> Courses
                    <Line />

                </CourseItem>

                <CourseItem style={{
                    background:
                        " linear-gradient(0deg, rgba(162, 37, 49, 0.91), rgba(162, 37, 49, 0.91)), url(/images/home/course-4.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

                >
                    Christian Ministry <br /> Courses
                </CourseItem>
            </div>
        </div>
    )
}

export default Carousel
