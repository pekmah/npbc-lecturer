import React from 'react';
import {Button} from "@/components";

function NotFound({}) {
    return (
        <div
            className={"text-c-blue flex flex-col w-[45%] justify-center items-center py-4 px-8 text-center gap-3 border border-gray-300"}>
            {/*    title    */}
            <p className={"c-normal leading-6 font-semibold"}>
                Not finding what you are looking for?
                <br/>
                There are no more files here.
            </p>

            {/*    Buttons      */}
            <div className={"flex gap-10"}>
                <Button className={"c-normal text-gray-400"}>
                    Contact support
                </Button>

                <Button className={"bg-bg-blue c-normal py-0 h-7"}>
                    Go to courses
                </Button>
            </div>

        </div>
    );
}

export default NotFound;
