import React from 'react'
import Certificate from './icons/Certificate'
import Diploma from './icons/Diploma'
import Undergraduate from './icons/Undergraduate'
import Upcoming from './icons/Upcoming'
import ProgramItem from './ProgramItem'

const Floater = () => {
    return (
        <div className="flex justify-evenly absolute -top-32  right-0 left-0">

            <ProgramItem
                icon={<Undergraduate />}
                title={"Undergraduate Programs"}
                desc={"The college offers BA Degrees from Global University USA in Bible and Theology, Christian Education and Intercultural studies."}
            />

            <ProgramItem
                icon={<Diploma />}
                title={"Diploma Programs"}
                desc={"We offer Govt accredited diploma programs in christian ministry and theology, counseling  psychology and Theological Studies."}
            />

            <ProgramItem
                icon={<Certificate />}
                title={"Certificate Programs"}
                desc={"These are designed for leadership Development in the running ministry context."}
            />

            <ProgramItem
                icon={<Upcoming />}
                title={"Upcoming Programs"}
                desc={
                <ul>
                    <li>- Post graduate Diploma in Bible and theology.</li>
                    <li>- Masters in Ministerial studies.</li>
                    <li>- Church admin and management.</li>
                    <li>- Marriage and family therapy.</li>
                </ul>
                }
            />


        </div>
    )
}

export default Floater
