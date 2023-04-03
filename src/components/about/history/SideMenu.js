import React from 'react';
import MenuItem from "@/components/about/history/MenuItem";

const SideMenu = () => {
    return (
        <div className={"w-2/6 bg-none flex flex-col items-start"}>

            <ul>
                {/*Menu items*/}
                <MenuItem isCurrent name={"History"}/>
                <MenuItem name={"Accredition"}/>
                <MenuItem name={"Mission & Vision"}/>
                <MenuItem name={"Philosophy & Core Values"}/>
                <MenuItem name={"Our Goals"}/>
                <MenuItem name={"Leadership"}/>
                <MenuItem name={"Partners"}/>

            </ul>


        </div>
    );
};

export default SideMenu;
