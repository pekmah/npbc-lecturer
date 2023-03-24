/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Car } from 'react-responsive-carousel';

const Carousel = () => {
    return (
        <div className="h-[60vh]">
            <Car autoPlay showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop dynamicHeight={"90vh"}>
                <div className=''>
                    <img className='h-[60vh] object-cover' src="/images/home/carousel-1.jpg" alt='img-1' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className=''>
                    <img className='h-[60vh] object-cover' src="/images/home/carousel-2.jpg" alt='img-2' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className=''>
                    <img className='h-[60vh] object-cover' src="/images/home/carousel-3.jpg" alt='img-3' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Car>
        </div>
    )
}

export default Carousel