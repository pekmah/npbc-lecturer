import React from 'react';
import SideMenu from "@/components/about/history/SideMenu";
import Statistics from "@/components/about/history/Statistics";
import MileStones from "@/components/about/history/MileStones";

const History = () => {
    return (
        <div className={"bg-c-blue p-12 flex"}>
            {/*Side Menu*/}
            <SideMenu/>

            {/*    Main Body    */}
            <div className={"text-white py-2 w-3/4"}>
                <h6 className={"c-large font-semibold "}>History</h6>

                {/*    Paragraph       */}
                <p className={"text-sm my-2"}>
                    We desire to be the training centre of choice among our target denominations and churches by
                    providing the best training skills that are relevant to society. We desire to be the training centre
                    of choice among our target denominations and churches by providing the best training skills that are
                    relevant to society.
                </p>

                {/*    Our Statistics*/}
                <Statistics/>

                {/*    milestones   */}
                <MileStones/>
            </div>
        </div>
    );
};

export default History;
