/* eslint-disable @next/next/no-img-element */
import { Carousel as Car } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Floater from "./Floater";

/**
 *
 * @param title
 * @param {JSX.Element} subTitle
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const Carousel = ({ title = "", subTitle = "", children }) => {
  return (
    <div className="block relative">
      <div className="h-[70vh] ">
        <Car
          autoPlay
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          dynamicHeight={"90vh"}
        >
          <div className="relative h-[70vh]">
            <img
              className="h-[70vh] object-center object-cover"
              src="/images/home/carousel-1.webp"
              alt="img-1"
            />

            <Floater title={title} subTitle={subTitle} />
          </div>

          <div className="relative h-[70vh]">
            <img
              className="h-[70vh] object-center object-cover"
              src="/images/home/carousel-2.webp"
              alt="img-2"
            />

            <Floater
              title={"Mission"}
              subTitle={
                <p className={"text-left"}>
                  We exist to bring maturity to church and transformation to
                  society through equipped leadership based on Christian values
                  and principles by training people in their area of calling.
                </p>
              }
            />
          </div>

          <div className="relative h-[70vh]">
            <img
              className="h-[70vh] object-top object-cover"
              src="/images/home/carousel-5.webp"
              alt="img-3"
            />

            <Floater
              title={"Vision"}
              subTitle={
                <p className={"text-left"}>
                  To be a center of choice among our target churches and groups
                  by providing the best training skills that are relevant to
                  society
                </p>
              }
            />
          </div>
        </Car>
      </div>

      {children}
    </div>
  );
};

export default Carousel;
