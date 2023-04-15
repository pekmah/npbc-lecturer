import React from 'react';

const CourseFeeTable = () => {
    return (
        <table className={"w-full border border-[#ffffff50]"}>
            <thead className={"bg-[#ffffff15] "}>
            <tr>
                <td className={"p-2"}>Account Name</td>
                <td className={"p-2"}>Year 1</td>
                <td className={"p-2"}>Year 2</td>
                <td className={"p-2"}>Year 3</td>
                <td className={"p-2"}>Year 4</td>
            </tr>
            </thead>
            <tbody>
            {fee_list?.map((item, key) => (
                <tr key={key}
                    className={`border-t border-t-[#ffffff10] ${key === fee_list.length - 1 && "bg-[#ffffff60]"}`}>
                    {Object.keys(item)?.map((val, key) => (
                        <td key={key} className={"p-2 text-sm"}>{(item[val])}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CourseFeeTable;

/**
 * @typedef {{name:string, year_1:string, year_2:string, year_3:string, year_4:string}} Account
 */

/**
 *
 * @type {Account[]}
 */
const fee_list = [
    {
        name: "Activity Fees(Payable once)",
        year_1: "500.00",
        year_2: "500.00",
        year_3: "500.00",
        year_4: "500.00"
    }, {
        name: "Application Fees(Payable once)",
        year_1: "500.00",
        year_2: "500.00",
        year_3: "500.00",
        year_4: "500.00"
    }, {
        name: "Quality Assurance",
        year_1: "500.00",
        year_2: "500.00",
        year_3: "500.00",
        year_4: "500.00"
    }, {
        name: "Examination Fees",
        year_1: "500.00",
        year_2: "500.00",
        year_3: "500.00",
        year_4: "500.00"
    }, {
        name: "ICT Fees",
        year_1: "500.00",
        year_2: "500.00",
        year_3: "500.00",
        year_4: "500.00"
    }, {
        name: "Total",
        year_1: "500.00",
        year_2: "500.00",
        year_3: "500.00",
        year_4: "500.00"
    },

]
