import Input from '@/components/general/Input'
import React from 'react'

const NextOfKin = () => {
    return (
        <div className={"p-5 border border-gray-300"}>
            <h6 className={"font-bold text-lg mb-2"}>Next of Kin</h6>

            {/*    form     */}
            <form className={"grid grid-cols-3 gap-x-4 gap-y-6 text-c-blue"} action="">
                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>First Name</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Second Name & Surname</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Relationship</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Phone Number</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Email</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>National ID/Passport</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Nationality</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Country/Region</h6>

                    <Input />
                </div>

                <div className={""}>
                    {/*    label    */}
                    <h6 className={"font-medium"}>Town</h6>

                    <Input />
                </div>
            </form>
        </div>
    )
}

export default NextOfKin