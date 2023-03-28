/* eslint-disable @next/next/no-img-element */
import { Carousel as Car } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Floater from './Floater';

const Carousel = ({
    title = "",
    subTitle = "",
    children
}) => {
    return (
        <div className="block relative">
            <div className="h-[70vh] relative">
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

            {
                children
            }
        </div>
    )
}

export default Carousel
