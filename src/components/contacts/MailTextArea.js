import React from 'react';

const MailTextArea = () => {
    return (
        <div className={"w-full"}>
            <h3 className={"font-semibold "}>
                Your message
            </h3>

            {/*<Form.control as={"textarea"}/>*/}
            <textarea className={"w-full mt-2 bg-inherit border-b border-gray-400 text-sm"} rows={"8"}/>
        </div>
    )
};

export default MailTextArea;
