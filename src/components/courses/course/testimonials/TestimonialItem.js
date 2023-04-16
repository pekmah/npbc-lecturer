import React from 'react';
import {RiDoubleQuotesR} from "react-icons/ri";

const TestimonialItem = () => {
    return (
        <div>
            <RiDoubleQuotesR className={"text-2xl text-c-blue"}/>

            <p className={"font-medium my-4"}>
                In 2017, the Nairobi Pentecostal Bible College was officially recognized by the commission as a credible
                institution to train graduate students with a Bachelor of Arts in Bible and Theology.
            </p>

            {/*    user section    */}
            <div className={"flex gap-3 items-center mt-3"}>
                {/*    image    */}
                <div className={"rounded-full h-16 w-16 overflow-hidden"}>
                    <img className={"object-cover object-left-bottom h-48 pb-16"}
                         src={"/images/admission/intakes-1.jpg"}/>
                </div>
                {/*    details*/}
                <div>
                    <h6 className={"c-large font-bold"}> Bishop James Michael</h6>

                    <div className={"flex items-center gap-3 py-1"}>
                        <h6 className={"c-medium"}>FGCK Taita Taveta</h6>
                        <div className={"h-2 w-2 bg-c-blue rounded-full"}/>
                        <h6 className={"c-medium"}>2022</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
