import { GET_REQUEST } from "@/configs/Globals";
import { makeRequest } from "./AxiosServices";
import endpoints from "./endpoints";

/**
 * gets the timetable for a specific semester
 * @param {number} semester //semester id
 * @returns
 */
export const getSemesterTimetable = async (semester) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.timetable}?semester=${semester}`
  );

  return data;
};
