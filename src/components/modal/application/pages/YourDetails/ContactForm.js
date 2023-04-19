import React from 'react';

const ContactForm = () => {
    return (
        <div className={"p-5 border border-gray-300"}>
            <h6 className={"font-bold text-lg"}>Personal Details</h6>

            {/*    form     */}
            <form className={"grid grid-cols-3 gap-x-4 gap-y-6 text-c-blue"} action="">
                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>First Name</h6>

                    <input className={"mt-1 bg-inherit w-full h-10 border-b border-gray-400"}/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
