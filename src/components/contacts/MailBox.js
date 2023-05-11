import React from "react";
import MailInput from "@/components/contacts/MailInput";
import { Button } from "@/components";
import { SlCallIn } from "react-icons/sl";
import {
  MdOutlineFacebook,
  MdOutlineMailOutline,
  MdOutlineWhatsapp,
} from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import MailTextArea from "@/components/contacts/MailTextArea";

function MailBox(props) {
  return (
    <div
      className={
        "text-c-blue pb-8 md:pb-20 md:py-20 flex flex-col-reverse md:flex-row bg-slate-100 gap-10"
      }
    >
      <div className={"md:flex-[0.4] flex flex-col items-end "}>
        {/*    Easy contact     */}
        <div className={"w-full md:min-w-[50%] px-5 md:px-0"}>
          <h4 className={"c-xl font-bold mb-1"}>Easy Contact</h4>
          <div className={"flex flex-col gap-4 py-2"}>
            <Button
              className={
                "text-c-red flex text-sm items-center gap-2 bg-white font-medium"
              }
            >
              <SlCallIn /> 0754 569 687
            </Button>

            <Button
              className={
                "text-c-red flex text-sm items-center gap-2 bg-white font-medium"
              }
            >
              <MdOutlineWhatsapp className={"text-lg"} /> 0754 569 687
            </Button>
          </div>

          {/*    Email    */}
          <h4 className={"c-xl font-bold mb-1 mt-3"}>Email</h4>
          <div className={"flex flex-col gap-4 py-2"}>
            <Button
              className={
                "text-c-red flex text-sm items-center gap-2 bg-white font-medium"
              }
            >
              <MdOutlineMailOutline /> admin@npbc.co.ke
            </Button>
          </div>

          {/*    Find us    */}
          <h4 className={"c-xl font-bold mb-1 mt-3"}>Find Us</h4>
          <div className={"flex flex-col gap-4 py-2"}>
            <Button
              className={
                "text-c-red flex text-sm items-center gap-2 bg-white font-medium"
              }
            >
              <FiMapPin /> Show in map
            </Button>
          </div>

          <h4 className={"c-xl font-bold mb-1 mt-3"}>Social Media</h4>
          {/*    Social Media     */}
          <div
            className={
              "flex w-full justify-start gap-6 md:justify-between text-c-blue my-3"
            }
          >
            {/*    Linked In    */}
            <GrLinkedin className={"text-2xl"} />
            {/*    Twitter    */}
            <FaTwitter className={"text-2xl"} />
            {/*    Facebook    */}
            <MdOutlineFacebook className={"text-2xl"} />
            {/*    Instagram    */}
            <FaInstagram className={"text-2xl"} />
          </div>
        </div>
      </div>

      {/*    mail Form   */}
      <div className={"flex-1 flex justify-start"}>
        <div className={"w-full md:w-11/12 bg-white p-3"}>
          <h4 className={"c-xl font-bold mb-2"}>Send us a message</h4>

          <form
            className={
              "flex flex-col md:flex-row md:flex-wrap py-4 gap-5 gap-y-4 md:gap-y-8"
            }
          >
            <MailInput title={"Your Name"} />
            <MailInput title={"Phone Number"} />
            <MailInput title={"Email"} />
            <MailInput title={"Message Subject"} />
            <MailTextArea />

            {/*    Submit form button*/}
            <div
              className={
                "py-1 flex justify-center md:justify-end w-full text-white"
              }
            >
              <Button
                className={"bg-c-red h-10 px-10 text-sm font-semibold"}
                text={"Submit Message"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MailBox;
