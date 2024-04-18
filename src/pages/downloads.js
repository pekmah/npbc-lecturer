import React from "react";
import Layout from "@/layout";
import { Body, OtherMaterial, SideMenu } from "@/components";
import Table from "@/components/downloads/tables";

function Downloads() {
  return (
    <Layout>
      <div className={"relative min-h-[95vh] bg-[#092A5905]"}>
        {/*Side Menu*/}
        <SideMenu />

        {/*Main Body*/}
        <Body>
          {/*   Program Table     */}
          <Table
            title={"Program Pamphlets"}
            headerList={table_columns}
            data={program_Data}
          />

          {/*    Admission Form Table     */}
          <Table
            title={"Admission Forms"}
            headerList={table_columns}
            data={admission_Data}
          />

          {/*    Fees Structure Table     */}
          <Table
            title={"Fee Structure"}
            headerList={fee_table_columns}
            data={fee_Data}
          />

          {/*    Other Materials      */}
          <OtherMaterial />
        </Body>
      </div>
    </Layout>
  );
}

export default Downloads;

/** @typedef {{item:string, purpose:string, size: string}} Program */
/**
 * @type {Program[]} program_data
 * @desc Program Pamphlets data
 */
const fee_Data = [
  {
    item: "All programs Pamphlet",
    size: "1.5Mbs",
  },
  {
    item: "BA in Bible and Theology",
    size: "1.5Mbs",
  },
  {
    item: "BA in Christian Education",
    size: "1.5Mbs",
  },
  {
    item: "BA in Intercultural Studies",
    size: "433Kb",
  },
  {
    item: "Diploma in Christian Ministry",
    size: "1.5Mbs",
  },
  {
    item: "Diploma in Bible and Theologoy",
    size: "1.5Mbs",
  },
  {
    item: "Diploma in Counseling Psychology",
    size: "1.5Mbs",
  },
  {
    item: "Certificate in Bible and Theology",
    size: "1.5Mbs",
  },
];

/** @typedef {{item:string, purpose:string, size: string}} Program */
/**
 * @type {Program[]} program_data
 * @desc Program Pamphlets data
 */
const admission_Data = [
  {
    item: "All programs Pamphlet",
    purpose: "This contains all info about",
    size: "1.5Mbs",
  },
  {
    item: "BA in Bible and Theology",
    purpose: "This contains all info about",
    size: "345kb",
  },
  {
    item: "BA in Christian Education",
    purpose: "This contains all info about",
    size: "247kb",
  },
  {
    item: "BA in Intercultural Studies",
    purpose: "This contains all info about",
    size: "433Kb",
  },
  {
    item: "Diploma in Christian Ministry",
    purpose: "This contains all info about",
    size: "401kb",
  },
  {
    item: "Diploma in Bible and Theologoy",
    purpose: "This contains all info about",
    size: "298kb",
  },
  {
    item: "Diploma in Counseling Psychology",
    purpose: "This contains all info about",
    size: "314kb",
  },
  {
    item: "Certificate in Bible and Theology",
    purpose: "This contains all info about",
    size: "235kb",
  },
];

/** @typedef {{item:string, purpose:string, size: string}} Program */
/**
 * @type {Program[]} program_data
 * @desc Program Pamphlets data
 */
const program_Data = [
  {
    item: "All programs",
    purpose: "This contains all info about",
    size: "1.5Mbs",
  },
  {
    item: "BA in Bible and Theology",
    purpose: "This contains all info about",
    size: "345kb",
  },
  {
    item: "BA in Christian Education",
    purpose: "This contains all info about",
    size: "247kb",
  },
  {
    item: "BA in Intercultural Studies",
    purpose: "This contains all info about",
    size: "433Kb",
  },
  {
    item: "Diploma in Christian Ministry",
    purpose: "This contains all info about",
    size: "401kb",
  },
  {
    item: "Diploma in Bible and Theologoy",
    purpose: "This contains all info about",
    size: "298kb",
  },
  {
    item: "Diploma in Counseling Psychology",
    purpose: "This contains all info about",
    size: "314kb",
  },
  {
    item: "Certificate in Bible and Theology",
    purpose: "This contains all info about",
    size: "235kb",
  },
];

/**
 * @type {string[]}
 * @desc Table header for Admission forms and Program Pamphlets table
 */
const table_columns = ["Item", "Purpose", "size"];

/**
 *  * @type {string[]}
 *  * @desc Table header for Fee structure table
 */
const fee_table_columns = ["Item", "size"];
