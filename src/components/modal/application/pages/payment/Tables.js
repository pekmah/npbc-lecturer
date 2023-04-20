import React from 'react'

const Tables = () => {
    return (
        <div className={"flex-[2] text-c-blue flex flex-col gap-4 p-5 border border-gray-300"}>
            <h6 className={"font-bold text-lg"}>Payment Information</h6>

            <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-semibold dark:border-neutral-500 bg-[#092A5914]">
                    <tr>
                        <th scope="col" class="px-6 py-4">Name</th>
                        <th scope="col" class="px-6 py-4">Amount</th>
                        <th scope="col" class="px-6 py-4">Mpesa Number</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="font-medium bg-[#092A5903]">
                        <td class="whitespace-nowrap px-6 py-4">John Doe</td>
                        <td class="whitespace-nowrap px-6 py-4">ksh 500</td>
                        <td class="whitespace-nowrap px-6 py-4">0712345678</td>
                    </tr>
                </tbody>
            </table>

            <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-semibold dark:border-neutral-500 bg-[#092A5914]">
                    <tr>
                        <th scope="col" class="px-6 py-4">Recipient</th>
                        <th scope="col" class="px-6 py-4">Till Number</th>
                        <th scope="col" class="px-6 py-4">Purpose</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="font-medium bg-[#092A5903]">
                        <td class="whitespace-nowrap px-6 py-4">Nairobi Pentecostal Bible College</td>
                        <td class="whitespace-nowrap px-6 py-4">43934</td>
                        <td class="whitespace-nowrap px-6 py-4">Application Fee for Diploma in Bible Theology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tables