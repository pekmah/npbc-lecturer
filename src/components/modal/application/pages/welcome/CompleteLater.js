import React from 'react';

const CompleteLater = () => {
    return (
        <div className={"flex-1 my-auto"}>
            <h6 className={"c-medium font-bold text-c-blue px-3"}>Need help?</h6>

            <div className={"px-3 border-l border-l-gray-400 my-4 flex-1"}>
                <p className={"leading-6 text-sm"}>In case you abort the process, we will save your progress so you can
                    continue from where you left. it will be available for up to 30 days.</p>

                <p className={"leading-6 text-sm mt-2"}> Resume your application by searching for your name under
                    Admissions
                    in the homepage</p>

                <br/>

                <p className={"leading-6 text-sm"}> You will use this name to find your application</p>

                {/*   input     */}
                <div className={"my-2"}>
                    <h6 className={" font-bold"}>Your name</h6>

                    <div className={"flex p-1 border-b border-gray-400"}>
                        <input type="text" className={"py-2 flex-1 bg-inherit focus:outline-none"}/>
                        <button className={"text-sm font-bold py-2.5"}>Save</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CompleteLater;
