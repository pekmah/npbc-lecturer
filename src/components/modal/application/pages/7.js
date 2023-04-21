import React from 'react';
import {Button} from "@/components";
import {BsArrowLeft} from "react-icons/bs";

const Finish = ({handleCloseModal, switchToPrevious}) => {
    return (
        <div className={"text-c-blue w-full"}>
            {/*    Details      */}
            <div className={"flex"}>
                <Button className={"p-3"} onClick={switchToPrevious}>
                    <BsArrowLeft className={"text-2xl"}/>
                </Button>

                <div className={"flex items-center flex-col flex-1 text-center"}>
                    <h4 className={"c-h5 font-bold w-2/3 mx-auto"}>You have successfully completed your application</h4>
                </div>


            </div>

            <div className={" gap-5 py-8 border-b border-gray-400 h-[60vh] flex flex-col justify-center items-center"}>
                {/*    Details section  */}
                <h6 className={"c-large font-bold w-2/3 mx-auto text-center "}>Thank you for taking your time to apply.
                    We will contact
                    you soon regarding
                    your application. Here is a digital signature to sign off your declaration.</h6>

                <div className={"flex gap-4 w-2/3 px-5"}>
                    <input type={"checkbox"}/>

                    <p>
                        I declare that the information given herein is true and accurate
                        to the best of my knowledge and fully understand that any information
                        found to be false would lead to automatic disqualification.
                    </p>
                </div>
            </div>

            {/*    buttons  */}
            <div className={"flex py-3"}>
                <Button className={"text-sm text-gray-500 font-bold"}>
                    Need Help?
                </Button>
                <div className={"flex gap-4 justify-end flex-1"}>
                    <Button onClick={handleCloseModal}
                            className={"bg-c-red-pale text-c-red py-3 px-14 text-sm font-semibold"} text={"close"}/>
                    <Button className={"bg-c-red outline-none text-white py-3 px-12 text-sm font-semibold"}
                            text={"Continue"}/>
                </div>
            </div>
        </div>
    );
};

export default Finish;
