import React from 'react'
import QualificationItem from './QualificationItem'

const Qualifications = () => {
    return (
        <div className='py-16 bg-bg-blue flex'>
            <div className="flex-[0.6] flex justify-center" data-aos="fade-right">
                <h3 className='c-h6 font-semibold text-c-blue'>Course Qualifications</h3>
            </div>

            <div className="flex-1">
                <p className='c-medium font-medium text-c-blue px-3' data-aos="fade-left">
                    We have courses for everyone with any level of qualification and educational background At NPBC, we
                    are committed to providing a high-quality education in biblical studies and ministry training.
                    In order to ensure that our students are well-prepared for their future ministry work.
                </p>

                <div className="my-6 grid grid-cols-2 relative gap-x-16 gap-y-8 pr-10">
                    <QualificationItem
                        title={"Undergraduate"}
                        desc={
                            <>
                                All undergraduate courses require a KCSE grade of C+
                                or Diploma in Bible and Theology and go for Ksh 7,500
                                <br/>
                                <br/>
                                Find out the specific qualification needed in each particular course by selecting a
                                course you are interested in.
                            </>
                        }
                    />

                    <QualificationItem
                        title={"Diploma"}
                        desc={
                            <>
                                Diploma courses generally require C- or KCE division II, KACE one (1) Principal or an
                                equivalent qualification or Certificate of Experiential Learning or KNQF 5
                                <br/>
                                <br/>
                                The fee ranges from 1500Ksh to 2000 Ksh per course depending on the course you choose
                                but more specific details are found in the courses page.
                            </>
                        }
                    />

                    <QualificationItem
                        title={"Diploma"}
                        desc={
                            <>
                                Certificate courses are open to everyone with any level of qualification at a fee of Ksh
                                1,100
                                <br/>
                                <br/>
                                Find out the specific qualification needed in each particular course by selecting a
                                course you are interested in.
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Qualifications
