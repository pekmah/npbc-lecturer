import React from 'react';

const AccountsTable = () => {
    return (
        <table className={"w-10/12 border border-[#ffffff50]"}>
            <thead className={"bg-[#ffffff15] "}>
            <tr>
                <td className={"p-2"}>Account Name</td>
                <td className={"p-2"}>Bank</td>
                <td className={"p-2"}>Account Number</td>
                <td className={"p-2"}>Branch</td>
            </tr>
            </thead>
            <tbody>
            {account_list?.map((item, key) => (
                <tr key={key} className={"border-t border-t-[#ffffff10]"}>
                    {Object.keys(item)?.map((val, key) => (
                        <td key={key} className={"p-2 text-sm"}>{item[val]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default AccountsTable;

/**
 * @typedef {{name:string, bank:string, account_number:string, branch:string}} Account
 */

/**
 *
 * @type {Account[]}
 */
const account_list = [
    {
        name: "NPBC",
        bank: "Kenya Commercial bank",
        account_number: "000000000000",
        branch: "Nairobi"
    },
    {
        name: "NPBC",
        bank: "Equity",
        account_number: "111111111111",
        branch: "Nairobi"
    },
    {
        name: "NPBC",
        bank: "Absa Bank",
        account_number: "222222222222",
        branch: "Nairobi"
    },
]
