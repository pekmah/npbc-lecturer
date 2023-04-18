import React, {useState} from 'react';
import Layout from "@/components/modal/application/Layout";
import Welcome from "@/components/modal/application/pages/1";
import AllYouNeed from "@/components/modal/application/pages/2";
import Courses from "@/components/modal/application/pages/3";
import YourDetails from "@/components/modal/application/pages/4";
import Payment from "@/components/modal/application/pages/5";
import PreviewApplication from "@/components/modal/application/pages/6";
import Finish from "@/components/modal/application/pages/7";


/**
 * @param {boolean} isOpen display/hide modal
 * @param {function} handleHide() hide modal on close
 * @return {JSX.Element}
 * @constructor
 */
const ApplicationModal = ({isOpen}) => {
    /**
     * @type {number} currentModal
     */
    const [currentModal, setCurrentModal] = useState(2);

    /**
     * @param {number} current
     * @returns {void}
     * @description switches current modal
     */
    const handleSelectModal = (current) => {
        setCurrentModal(current)
    }

    /**
     * @description returns modal element based on current modal nav item
     * @return {JSX.Element}
     */
    const renderBody = () => {
        switch (currentModal) {
            case 1:
                return <AllYouNeed/>

            case 2:
                return <Courses/>
            case 3:
                return <YourDetails/>
            case 4:
                return <Payment/>
            case 5:
                return <PreviewApplication/>
            case 6:
                return <Finish/>
            default:
                return <Welcome switchModal={handleSelectModal}/>


        }
    }

    return (
        <Layout isOpen={isOpen} currentModal={currentModal} switchModal={handleSelectModal}>
            <div className={"text-black p-10 h-full flex  "}>

                {
                    renderBody()
                }
            </div>
        </Layout>
    );
};

export default ApplicationModal;

const modal_list = [
    "Welcome"
]
