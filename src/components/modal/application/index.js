import React, { useState } from "react";
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
const ApplicationModal = ({ isOpen, handleCloseModal }) => {
  /**
   * @type {number} currentModal
   */
  const [currentModal, setCurrentModal] = useState(0);

  /**
   * @param {number} current
   * @returns {void}
   * @description switches current modal
   */
  const handleSelectModal = (current) => {
    setCurrentModal(current);
  };

  /**
   * @returns {void}
   * @description Switches to previous modal
   */
  const switchToPreviousModal = () => {
    if (currentModal > 0) {
      setCurrentModal(currentModal - 1);
    }
  };

  /**
   * @returns {void}
   * @description Switches to next modal
   */
  const switchToNextModal = () => {
    if (currentModal < 7) {
      setCurrentModal(currentModal + 1);
    }
  };

  /**
   * @description returns modal element based on current modal nav item
   * @return {JSX.Element}
   */
  const renderBody = () => {
    switch (currentModal) {
      case 1:
        return (
          <AllYouNeed
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
          />
        );

      case 2:
        return (
          <Courses
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
          />
        );
      case 3:
        return (
          <YourDetails
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
          />
        );
      case 4:
        return (
          <Payment
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
          />
        );
      case 5:
        return (
          <PreviewApplication
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
          />
        );
      case 6:
        return (
          <Finish
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
          />
        );
      default:
        return (
          <Welcome
            handleCloseModal={handleCloseModal}
            switchToNext={switchToNextModal}
            switchToPrevious={switchToPreviousModal}
            switchModal={handleSelectModal}
          />
        );
    }
  };

  return (
    <Layout
      isOpen={isOpen}
      currentModal={currentModal}
      switchModal={handleSelectModal}
    >
      <div className={"text-black px-2 py-6 md:p-10 h-full flex  "}>
        {renderBody()}
      </div>
    </Layout>
  );
};

export default ApplicationModal;

const modal_list = ["Welcome"];
