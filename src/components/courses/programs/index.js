import React from 'react'
import Floater from './Floater'
import CourseItem from './CourseItem'


const Programs = () => {
    return (
        <section className='text-c-blue bg-c-blue p-2 md:p-5 relative py-8'>
            <div className='h-32 md:h-40 mb-5'/>

            <Floater/>

            {/** Programs */}
            <div id={"undergraduate"} className="px-2 md:px-6 py-2 md:py-6 bg-[#FFFFFF14] border border-[#FFFFFF14] my-2">
                {/**Title */}
                <h6 className='text-xl font-semibold text-white mb-3'>Undergraduate Programs</h6>

                <div className="flex flex-col md:flex-row md:justify-between gap-y-5">
                    <CourseItem
                        title={"Bachelor of Art in Bible & Theology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/babt"}
                    />

                    <CourseItem
                        title={"Bachelor of Arts in Christian Education"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/babt"}
                    />

                    <CourseItem
                        title={"Bachelor of Arts in Intercultural studies."}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/babt"}
                    />
                </div>
            </div>

            {/* Diploma courses */}
            <div id={"diploma"} className="px-2 md:px-6 py-2 md:py-6 bg-[#FFFFFF14] border border-[#FFFFFF14] my-2">
                {/**Title */}
                <h6 className='text-xl font-semibold text-white mb-3'>Diploma Programs</h6>

                <div className="flex flex-col md:flex-row md:justify-between gap-y-5">
                    <CourseItem
                        title={"Diploma in Christian Ministry"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/dcm"}
                    />

                    <CourseItem
                        title={"Diploma in Bible Theology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/dbt"}
                    />

                    <CourseItem
                        title={"Diploma in Counseling Psychology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/dcp"}
                    />
                </div>
            </div>

            {/** Certificate Programs */}
            <div id={"certificate"} className="px-2 md:px-6 py-2 md:py-6 bg-[#FFFFFF14] border border-[#FFFFFF14] my-2">
                {/**Title */}
                <h6 className='text-xl font-semibold text-white mb-3'>Certificate Programs</h6>

                <div className="flex justify-between flex-wrap gap-y-6">
                    <CourseItem
                        title={"Certificate in Christian ministry."}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/cbt"}
                    />

                    <CourseItem
                        title={"Certificate in Youth Ministry."}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses"}
                    />

                    <CourseItem
                        title={"Certificate in Women Ministry."}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Programs
