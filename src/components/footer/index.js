import React from 'react'
import { Button } from '../general'

const Footer = () => {
    return (
        <div className='text-white '

        >
            {/* image */}
            <div className="text-center h-40 c-h3 p-3 flex flex-col gap-5 items-center justify-center"
                style={{
                    background:
                        " linear-gradient(0deg, rgba(9, 42, 89, 0.66), rgba(9, 42, 89, 0.66)), url(/images/footer/npbc-footer.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <p>Become a student at <br /> NPBC</p>

                <Button className={"bg-white text-c-blue c-normal px-10 font-semibold"}>Apply Today</Button>
            </div>
            {/* links */}
            <div className="flex bg-c-blue text-xs justify-evenly py-14">

                <NPBC />

                <Explore />

                <QuickLinks />

                <Research />
            </div>
        </div>
    )
}

export default Footer

const NPBC = () => (
    <div>
        <h6 className="c-large mb-4">NPBC</h6>
        {/* Location */}
        <div className="block leading-6">
            <p className="font-semibold">Location:</p>
            <p>Garden Estate Off Thika Road Office</p>
        </div>

        {/* Hours */}
        <div className="block leading-6 tex">
            <p className="font-semibold">Hours:</p>
            <p>8.00am - 5:00pm</p>
        </div>

        {/* Telephone */}
        <div className="block leading-6 tex">
            <p className="font-semibold">Telephone:</p>
            <p>0754 569 687</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p className="font-semibold">Email:</p>
            <p>admin@npbc.co.ke</p>
        </div>
    </div>
)

const Explore = () => (
    <div>
        <h6 className="c-large mb-4">Explore</h6>
        {/* Location */}
        <div className="block leading-6">
            <p>History & Mission</p>
        </div>

        {/* Hours */}
        <div className="block leading-6 tex">
            <p>Staff and Faculty</p>
        </div>

        {/* Telephone */}
        <div className="block leading-6 tex">
            <p>Downloads</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p>Community</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p>Social Media</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p>Employment</p>
        </div>
    </div>
)

const QuickLinks = () => (
    <div>
        <h6 className="c-large mb-4">QUICK LINKS</h6>
        {/* Location */}
        <div className="block leading-6">
            <p>Admissions</p>
        </div>

        {/* Hours */}
        <div className="block leading-6 tex">
            <p>Student Life</p>
        </div>

        {/* Telephone */}
        <div className="block leading-6 tex">
            <p>Staff Mail</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p>NPBC Online</p>
        </div>
    </div>
)

const Research = () => (
    <div>
        <h6 className="c-large mb-4">RESEARCH</h6>
        {/* Location */}
        <div className="block leading-6">
            <p>NPBC Online</p>
        </div>

        {/* Hours */}
        <div className="block leading-6 tex">
            <p>Reflection Blog</p>
        </div>

        {/* Telephone */}
        <div className="block leading-6 tex">
            <p>Community Engagement</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p>News and Events</p>
        </div>

        {/* Email */}
        <div className="block leading-6 tex">
            <p>Research Projects</p>
        </div>
    </div>
)