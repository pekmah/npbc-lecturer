import React from 'react'

const Guidelines = () => {
    return (
        <div className={"flex-1 flex flex-col "}>
            <h6 className={"c-medium font-bold text-c-blue px-3"}>Guidelines</h6>

            <div className={"px-3 border-l border-l-gray-400 my-4 flex-1"}>
                {guideline_list?.map((item, key) => (
                    <p key={key} className={"leading-6 text-sm"}>{item}</p>
                ))}


            </div>
        </div>
    )
}

export default Guidelines

const guideline_list = [
    "1. This payment marks the completion of your application and is separate from the first term’s fees.",
    "2. The amount varies between courses (500 Ksh for diplomas and certificates and Ksh 3,000 for undergraduates and post graduate.",
    "3. We recommend paying using a sim card registered under your name although its not compulsory."
]


