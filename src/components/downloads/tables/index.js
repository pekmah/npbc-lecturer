// This is a build of the Downloads table structure
import React from "react";
import { Table } from "antd";

/**
 * @typedef {{title:string, headerList:Array<string>, data:Obect[]}} Props
 */

/**
 * @return {JSX.Element}
 * @param {Props} props
 */
function CTable({ title, columns, data }) {
  return (
    <div className={"w-full "}>
      {/*Title*/}
      <div
        className={"py-3 px-1 rounded-sm border-gray-300 border text-c-blue"}
      >
        <h3 className={"c-xl font-semibold"}>{title}</h3>
      </div>
      {/*Table Body*/}
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default CTable;
