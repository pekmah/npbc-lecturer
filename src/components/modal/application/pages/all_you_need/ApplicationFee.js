import React from 'react';

const ApplicationFee = () => {
    return (
        <div className={"flex-1 flex flex-col"}>
            <h6 className={"c-medium font-bold text-c-blue px-3"}>Application Fee</h6>

            <div className={"px-3 border-l border-l-gray-400 my-4 flex-1"}>
                <p className={"leading-6 text-sm"}>For each program should be sent through the college till number 43934
                    with a SIM card registered with your name.</p>
                <br/>

                <p className={"leading-6 text-sm"}>You will pay later in the Payment step for this process. The
                    application fees are as follows:</p>
                <br/>

                <div className={"flex justify-between mb-2"}>
                    <p className={"leading-6 text-sm"}>Academic Transcripts and Certificates</p>
                    <span className={"leading-6 text-sm"}>kshs 500</span>

                </div>


                <div className={"flex justify-between"}>
                    <p className={"leading-6 text-sm"}>Undergraduate and Postgraduate</p>
                    <span className={"leading-6 text-sm"}>kshs 3,000</span>

                </div>
                <br/>


            </div>
        </div>
    );
};

export default ApplicationFee;
