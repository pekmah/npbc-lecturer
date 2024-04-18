// This is a build of the Downloads table structure
import React from 'react';
import {Button} from "@/components";
import {MdOutlineFileDownload} from "react-icons/md"; /**
 * @typedef {{title:string, headerList:Array<string>, data:Obect[]}} Props
 */

/**
 * @typedef {{title:string, headerList:Array<string>, data:Obect[]}} Props
 */

/**
 * @return {JSX.Element}
 * @param {Props} props
 */
function Table({ title, headerList, data }) {
  return (
    <div className={"w-full "}>
      {/*Title*/}
      <div
        className={"py-3 px-1 rounded-sm border-gray-300 border text-c-blue"}
      >
        <h3 className={"c-xl font-semibold"}>{title}</h3>
      </div>
      {/*Table Body*/}
      <table className=" text-c-blue w-full">
        <thead>
          <tr className={"bg-bg-blue"}>
            {headerList?.map((item, key) => (
              <th
                key={key}
                className={`text-left py-2 px-1 w-${headerList?.length + 1}`}
              >
                {item}
              </th>
            ))}

            <th className={`text-left py-2 px-1 w-${headerList?.length + 1}`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, key) => (
            <tr key={key} className={"border border-line-gray font-medium"}>
              {headerList.map((cKey, key) => (
                <td key={key} className={`text-sm py-3 px-1`}>
                  {item[cKey?.toLowerCase()]}
                </td>
              ))}
              {/*    Actions column    */}
              <td className={`flex justify-between items-center my-auto `}>
                <Button className={"bg-none text-gray-500 text-sm"}>
                  Open in browser
                </Button>

                <Button className={"px-2 bg-none"}>
                  <MdOutlineFileDownload className={"text-2xl"} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
