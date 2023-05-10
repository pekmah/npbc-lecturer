import ReadMoreBtn from '@/components/home/questions/ReadMoreBtn'
import React from 'react'

const Questions = () => {
    return (
      <section id={"faqs"} className="px-0 md:px-14 py-0 md:py-10 bg-bg-blue">
        <div className="p-5 md:p-10 bg-white text-black" data-aos="fade-up">
          {/* title */}
          <h2 className="text-xl md:text-2xl font-semibold ">
            Questions asked about our admission
          </h2>

          {/* Questions */}
          <div className="flex my-1 md:my-6">
            {/* new students */}
            <div className="hidden md:block flex-[0.3] mt-3">
              <div className="flex">
                <div>
                  <span className="c-medium font-semibold">Finances Quiz</span>

                  <hr className="h-1 bg-c-red rounded-full" />
                </div>
              </div>

              <ul>
                <li className="text-sm my-4 text-gray-400 font-semibold">
                  Career Guidance
                </li>
                <li className="text-sm my-4 text-gray-400 font-semibold">
                  Application Status
                </li>
                <li className="text-sm my-4 text-gray-400 font-semibold">
                  Faculty Quizzes
                </li>
                <li className="text-sm my-4 text-gray-400 font-semibold">
                  Hostels and Residence
                </li>
                <li className="text-sm my-4 text-gray-400 font-semibold">
                  Campus Facilities
                </li>
              </ul>
            </div>
            {/* Questions */}
            <ul className=" flex-1">
              <li className="flex justify-between py-3 border-b border-gray-200">
                <span className="c-medium md:c-large leading-7 font-semibold">
                  Can I apply for financial aid?
                </span>

                <ReadMoreBtn />
              </li>
              <li className="flex justify-between py-3 border-b border-gray-200">
                <span className="c-medium md:c-large leading-7 font-semibold">
                  Can I visit the campus before I apply?
                </span>

                <ReadMoreBtn />
              </li>
              <li className="flex justify-between py-3 border-b border-gray-200">
                <span className="c-medium md:c-large leading-7 font-semibold">
                  What is the credit transfer policy?
                </span>

                <ReadMoreBtn />
              </li>
              <li className="flex justify-between py-3 border-b border-gray-200">
                <span className="c-medium md:c-large leading-7 font-semibold">
                  What is the deadline of fee payment in the semesters?
                </span>

                <ReadMoreBtn />
              </li>
              <li className="flex justify-between py-3 border-b border-gray-200">
                <span className="c-medium md:c-large leading-7 font-semibold">
                  What are the charges for supplementary exams?
                </span>

                <ReadMoreBtn />
              </li>
              <li className="flex justify-between py-3 border-b border-gray-200">
                <span className="c-medium md:c-large leading-7 font-semibold">
                  Do you receive bursary cheques or offer internal bursaries?
                </span>

                <ReadMoreBtn />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default Questions
