import React from 'react';
import TestimonialItem from "@/components/courses/course/testimonials/TestimonialItem";
import Lecturer from "@/components/courses/course/testimonials/Lecturer";

const CourseTestimonials = () => {
    return (
        <div className={"text-c-blue bg-white flex py-14"}>
            <div className={"w-1/4"}/>

            <div className={"w-3/4"}>
                {/*Testimonials*/}
                <div>
                    <h5 className={"c-h7"}> Hear what <span className={"text-c-red"}>alumni students</span> had to say
                        about
                        the course
                    </h5>

                    <div className={"flex gap-8 py-6"}>
                        {/*    Testimonial items    */}
                        <TestimonialItem/>
                        <TestimonialItem/>
                    </div>

                    <div className={"flex gap-8 justify-center"}>
                        <div className={"h-3 w-3 rounded-full bg-gray-300"}/>
                        <div className={"h-3 w-3 rounded-full bg-c-red"}/>
                        <div className={"h-3 w-3 rounded-full bg-gray-300"}/>
                    </div>
                </div>

                <div className={"h-24"}/>

                {/*    Lecturers    */}
                <div>
                    <h5 className={"c-h7"}> We have a first-class <span
                        className={"text-c-red"}>Lecturers team </span> to handle your course
                    </h5>

                    <div className={"flex py-5"}>
                        <Lecturer/>
                        <Lecturer/>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CourseTestimonials;
