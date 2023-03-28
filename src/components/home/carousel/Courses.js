import React from 'react'
import CourseItem from './CourseItem'
import Line from './Line'

const Courses = () => {
    return (
        < div className="flex" >
            {/* courses */}
            <CourseItem style={{
                background:
                    " linear-gradient(0deg, rgba(162, 37, 49,0.50), rgba(162, 37, 49,0.50)), url(/images/home/course-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
            }}

            >
                Bible & Theology <br /> Courses
                <Line />
            </CourseItem>

            <CourseItem style={{
                background:
                    " linear-gradient(0deg, rgba(162, 37, 49,0.50), rgba(162, 37, 49,0.50)), url(/images/home/course-2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

            >
                Bachelor of Arts <br /> (Intercurtural Studies)
                <Line />

            </CourseItem>

            <CourseItem style={{
                background:
                    " linear-gradient(0deg, rgba(162, 37, 49,0.50), rgba(162, 37, 49,0.50)), url(/images/home/course-3.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

            >
                Christian Education <br /> Courses
                <Line />

            </CourseItem>

            <CourseItem style={{
                background:
                    " linear-gradient(0deg, rgba(162, 37, 49,0.50), rgba(162, 37, 49,0.50)), url(/images/home/course-4.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

            >
                Christian Ministry <br /> Courses
            </CourseItem>
        </div >
    )
}

export default Courses