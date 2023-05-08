import React from 'react';
import Header from "./Header";

/**
 * @param {boolean} isOpen display/hide modal
 * @param {JSX.Element} children
 * @param {number} currentModal
 * @param {function} switchModal
 * @param {function} handleHide() hide modal on close
 * @return {JSX.Element}
 * @constructor
 */
const Layout = ({isOpen, children, handleHide, currentModal, switchModal}) => {

    return (
        <div className={"fixed top-0 right-0 bottom-0 left-0 z-50 bg-[#00000090] max-h-screen p-4 max-w-screen"}>
            <div className={"bg-slate-50 h-full w-full overflow-y-scroll"}>
                <Header currentModal={currentModal} switchModal={switchModal}/>

                {/*layout body*/}
                {children}
            </div>


        </div>
    );
};

export default Layout;
