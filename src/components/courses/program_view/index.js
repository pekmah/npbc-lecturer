import React from 'react';
import Table from "./Table";

function ProgramView(props) {
    return (
        <div className={"p-3 px-3 md:px-6"}>
            <div className={"flex flex-col md:flex-row mb-4 gap-y-2"}>
                <div className={"md:flex-[0.4]"}>
                    <h4 className={"text-xl text-c-blue font-semibold"}>Program Brief View</h4>
                </div>

                <div className={"font-medium md:font-semibold text-sm text-c-blue flex-1"}>
                    This table shows all our programs with brief details for a unified view that makes comparison easy
                    and convenient. All extra details on every course are available and can be accessed by choosing
                    course from the table or the above groupings
                </div>
            </div>


            <div className={"max-w-[100vw] overflow-x-scroll"}>
            {/*Table*/}
            <Table
                headerList={table_columns}
                data={table_data}
            />
            </div>
        </div>
    );
}

export default ProgramView;

/**
 * @type {string[]}
 */
const table_columns = [
    "Program Name",
    "Target Group",
    "Credit Hours",
    "Enrollment Criteria",
    "Duration",
    "Fees per course"
]

/**
 * @typedef {{program:string, target:string, hours:string, criteria: string, duration: string, fees:string}} ProgramRow
 */

/**
 * @type {ProgramRow[]}
 */
const table_data = [
    {
        program: "Bachelor of Arts in Bible and Theology",
        target: "Church Ministers and Administrators",
        hours: "120",
        criteria: "C+ or Diploma in Bible and Theology",
        duration: "4 years or 2 years after Diploma",
        fees: "Ksh 7500"
    },
    {
        program: "Bachelor of Arts in Christian Education",
        target: "Trainers and curriculum workers",
        hours: "120",
        criteria: "C+ or Diploma in Bible and Theology",
        duration: "4 years or 2 years after Diploma",
        fees: "ksh 7500"
    },
    {
        program: "Bachelor of Arts in Intercultural Studies",
        target: "Missionaries",
        hours: "120",
        criteria: "C+ or Diploma in Bible and Theology",
        duration: "4 years or 2 years after Diploma",
        fees: "ksh 7500"
    },
    {
        program: "Diploma in Christian ministry",
        target: "Christian Ministers and \n Workers in the Church and Para Church Organisations and Ministries",
        hours: "240",
        criteria: "KCSE C- (Minus) or KCE division II, KACE one (1) Principal or an equivalent qualification or Certificate of Experiential Learning or KNQF 5",
        duration: "2 years",
        fees: "ksh 1500"
    },
    {
        program: "Diploma in Bible and Theology",
        target: "Christian Ministers and Workers in the Church and Para Church Orgamisations and Ministries",
        hours: "240",
        criteria: "Open",
        duration: "2 years",
        fees: "ksh 2000",
    },
    {
        program: "Diploma in Counselling Psychology",
        target: "Counselors and Care givers",
        hours: "240",
        criteria: "Open",
        duration: "2 years",
        fees: "ksh 2000",
    },
    {
        program: "Certificate in Bible and Theology",
        target: "Christian Ministers and Workers in the Church and Para Church Orgamisations and Ministries",
        hours: "120",
        criteria: "Open",
        duration: "1 year",
        fees: "ksh 1100",
    }
]
