/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components";

const CampusEvents = () => {
  return (
    <section className={"px-4 py-8 bg-[#092A5914] text-c-blue"}>
      {/*   title     */}
      <div className={"flex gap-4 items-center"}>
        {/*    title    */}
        <h6 className={"text-xl md:c-h7 font-bold"}>Campus Events</h6>

        {/*    line     */}
        <hr className={"flex-1 bg-gray-200 h-1 rounded-full"} />

        {/*    more button  */}
        <Button text={"More"} className={"text-gray-500 font-medium"} />
      </div>

      {/*    grid display     */}
      <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
        {/*main news pane */}
        <div className={"flex flex-col md:row-span-2 md:col-span-2 relative"}>
          <UpcomingLabel />
          {/*    image    */}
          <img
            src="/images/about/news/news-1.jpg"
            alt="news-1"
            className={"md:h-[520px] object-cover object-center w-full"}
          />

          {/*    caption  */}
          <div
            className={
              "flex text-sm text-[#7D7C7C] font-semibold gap-3 py-3 items-center"
            }
          >
            <p>Registrar&apos; office</p>

            <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"} />

            <p>3 days ago</p>
          </div>

          <h4 className={"text-lg md:c-h7 font-semibold"}>
            {" "}
            The Nairobi Pentecostal Bible College officially becomes an
            accredited training institution
          </h4>
        </div>

        <div className={" row-span-1 relative"}>
          <UpcomingLabel />
          {/*    image    */}
          <img
            src="/images/about/news/news-2.jpg"
            alt="news-1"
            className={"h-[200px] object-cover object-center w-full"}
          />

          {/*    caption  */}
          <div
            className={
              "flex text-sm text-[#7D7C7C] font-semibold gap-3 py-3 items-center"
            }
          >
            <p>Dean of students</p>

            <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"} />

            <p> 15 Mar 2023 </p>
          </div>

          <h4 className={"c-large leading-7 font-semibold"}>
            Student portals have been activated. You can now login and set up
            your profile
          </h4>
        </div>
        <div className={" row-span-1 relative"}>
          <PassedLabel />
          {/*    image    */}
          <img
            src="/images/about/news/news-3.jpg"
            alt="news-1"
            className={"h-[200px] object-cover object-center w-full"}
          />

          {/*    caption  */}
          <div
            className={
              "flex  text-sm text-[#7D7C7C] font-semibold gap-3 py-3 items-center"
            }
          >
            <p>Registrar&apos; office</p>

            <div className={"w-1.5 h-1.5 rounded-full bg-gray-500"} />

            <p> 24 Jan 2023 </p>
          </div>

          <h4 className={"c-large leading-7 font-semibold"}>
            NPBC launches the new 5 floor building for active use as lecture
            hall and offices
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CampusEvents;

const UpcomingLabel = () => (
  <div
    className={
      "absolute top-2 right-2 px-5 md:px-8 bg-white py-2 rounded-full font-semibold text-sm md:text-base text-c-red"
    }
  >
    Upcoming
  </div>
);
const PassedLabel = () => (
  <div
    className={
      "absolute top-2 right-2 px-8 bg-white py-2 rounded-full font-semibold text-gray-500"
    }
  >
    Passed
  </div>
);
