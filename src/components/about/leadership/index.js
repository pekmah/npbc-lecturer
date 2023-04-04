import React from 'react';
import LeadershipItem from "@/components/about/leadership/LeadershipItem";
import Intake from "@/components/about/leadership/Intake";

const Leadership = () => {
    return (
        <div className={" p-8 flex bg-white text-c-blue"}>
            {/*Side Menu*/}
            <div className={"w-1/4"}/>

            {/*    Main Body    */}
            <div className={" py-2 w-3/4"}>
                <h3 className={"c-h7 font-bold"}>Our Leadership</h3>

                <div className={"my-12 flex flex-wrap gap-10"}>
                    {/*Leadership item*/}
                    <LeadershipItem/>
                    <LeadershipItem/>
                    <LeadershipItem/>
                    <LeadershipItem/>
                </div>
                {/*    Intake  */}
                <Intake/>
            </div>

        </div>
    );
};

export default Leadership;
