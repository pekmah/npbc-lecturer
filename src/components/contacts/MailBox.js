import React, { useState } from "react";
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
import Spinner from "@/components/general/Spinner";
import axios from "axios";

function MailBox(props) {
  // name,email,phone,subject,message
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e?.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);

    try {
      axios
        .post("/api/contact", state)
        .then(() => {
          alert("Email sent.");
          setLoading(false);
        })
        .catch((err) => {
          console.log("SEND MAIL ERROR: ", err?.message);
          alert("Email Not sent " + err?.message);
          setLoading(false);
        });
    } catch (e) {
      setLoading(false);
      console.log("MAIL SEND ERROR.");
      window.alert("Email not sent.", e?.message);
    }
  };
  return (
    <div className={"text-c-blue  pb-8 md:pb-20 md:py-20 bg-slate-100 "}>
      <div
        className={
          "w-full md:w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-10"
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
              onSubmit={handleSubmit}
            >
              <MailInput
                key={1}
                name={"name"}
                value={state?.name}
                onChange={handleChange}
                required
                title={"Your Name"}
              />
              <MailInput
                key={2}
                name={"phone"}
                value={state?.phone}
                onChange={handleChange}
                type={"number"}
                title={"Phone Number"}
              />
              <MailInput
                key={3}
                name={"email"}
                value={state?.email}
                onChange={handleChange}
                type={"email"}
                required
                title={"Email"}
              />
              <MailInput
                key={4}
                name={"subject"}
                value={state?.subject}
                onChange={handleChange}
                required
                title={"Message Subject"}
              />
              <MailTextArea
                name={"message"}
                value={state?.message}
                required
                onChange={handleChange}
              />

              {/*    Submit form button*/}
              <div
                className={
                  "py-1 flex justify-center md:justify-end w-full text-white"
                }
              >
                <Button
                  className={`bg-c-red h-10 px-10 text-sm font-semibold ${
                    loading && "opacity-50 cursor-not-allowed"
                  }`}
                  text={"Submit Message"}
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      className={"flex-row text-white"}
                      size={"w-6 h-6"}
                      text={"sending"}
                    />
                  ) : (
                    "Send message"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailBox;
