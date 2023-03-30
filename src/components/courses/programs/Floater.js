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
                desc={"Graduate with a Bachelor of Arts in the program your choose. This program is meant for those who have completed their secondary school studies and attained a minimum of C+ in KCSE"}
            />

            <ProgramItem
                icon={<Diploma />}
                title={"Diploma Programs"}
                desc={"Graduate with a Bachelor of Arts in the program your choose. This program is meant for those who have completed their secondary school studies and attained a minimum of C+ in KCSE"}
            />

            <ProgramItem
                icon={<Certificate />}
                title={"Certificate Programs"}
                desc={"Graduate with a Bachelor of Arts in the program your choose. This program is meant for those who have completed their secondary school studies and attained a minimum of C+ in KCSE"}
            />

            <ProgramItem
                icon={<Upcoming />}
                title={"Upcoming Programs"}
                desc={"Graduate with a Bachelor of Arts in the program your choose. This program is meant for those who have completed their secondary school studies and attained a minimum of C+ in KCSE"}
            />


        </div>
    )
}

export default Floater
