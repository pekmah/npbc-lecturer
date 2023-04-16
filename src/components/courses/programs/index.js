import React from 'react'
import Floater from './Floater'
import CourseItem from './CourseItem'


const Programs = () => {
    return (
        <section className='text-c-blue bg-c-blue p-5 relative py-8'>
            <div className='h-48 mb-5'/>

            <Floater/>

            {/** Programs */}
            <div className="px-6 py-6 bg-[#FFFFFF14] border border-[#FFFFFF14] my-2">
                {/**Title */}
                <h6 className='text-xl font-semibold text-white mb-3'>Undergraduate Programs</h6>

                <div className="flex grid-cols-3 justify-between">
                    <CourseItem
                        title={"Bachelor of Art in Bible & Theology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/babt"}
                    />

                    <CourseItem
                        title={"Bachelor of Art in Bible & Theology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/babt"}
                    />

                    <CourseItem
                        title={"Bachelor of Art in Bible & Theology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/babt"}
                    />
                </div>
            </div>

            {/* Diploma courses */}
            <div className="px-6 py-6 bg-[#FFFFFF14] border border-[#FFFFFF14] my-2">
                {/**Title */}
                <h6 className='text-xl font-semibold text-white mb-3'>Diploma Programs</h6>

                <div className="flex justify-between">
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
            <div className="px-6 py-6 bg-[#FFFFFF14] border border-[#FFFFFF14] my-2">
                {/**Title */}
                <h6 className='text-xl font-semibold text-white mb-3'>Certificate Programs</h6>

                <div className="flex justify-between flex-wrap gap-y-6">
                    <CourseItem
                        title={"Certificate in Bible & Theology"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        link={"courses/cbt"}
                    />

                    <CourseItem
                        title={"Certificate in Marriage & Family Therapy"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        isComingSoon
                        link={"courses"}
                    />

                    <CourseItem
                        title={"Certificate in Church Administration & Management"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        isComingSoon
                        link={"courses"}
                    />

                    <CourseItem
                        title={"Certificate in Children Ministry"}
                        desc={"Admission into a degree program at Global University will be based on the following minimum requirements"}
                        isComingSoon
                        link={"courses"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Programs
