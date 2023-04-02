import React from 'react';
import {Button} from "@/components";
import {MdOutlineFileDownload} from "react-icons/md";

/**
 * @param {string} title
 * @return {JSX.Element}
 * @constructor
 */
function OtherMaterialItem({title}) {
    return (
        <div className={"text-c-blue flex w-[45%]"}>
            {/*    image    */}
            <img className={"h-24 w-24"} src={"/images/downloads/download-1.jpg"}/>

            {/*    Details    */}
            <div className={"p-2"}>
                {/*    title    */}
                <h6 className={"c-lg font-semibold"}>
                    {title}
                </h6>

                {/*    Description      */}
                <p className={"text-[13px]"}>
                    This contains all information about each of the courses we offer
                </p>


                {/*    Buttons    */}
                <div className={"flex justify-end gap-4"}>
                    <Button className={"c-normal font-medium text-gray-500"}>
                        Open in browser
                    </Button>

                    <Button className={"bg-bg-blue c-normal py-0 h-7 flex gap-1 items-center"}>
                        Download <MdOutlineFileDownload className={"text-2xl"}/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OtherMaterialItem;
