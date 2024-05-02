import { GET_REQUEST, POST_REQUEST } from "@/configs/Globals";
import { makeRequest } from "./AxiosServices";
import endpoints from "./endpoints";

export const getAttendance = async (user_id = "", semester_id) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.attendance}?user=${user_id}${
      semester_id ? `&semester=${semester_id}` : ""
    }`
  );

  return data;
};

export const getSemesterUnits = async (semester_id) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.units}?${semester_id ? `&semester=${semester_id}` : ""}`
  );

  return data;
};

export const getOpenAttendances = async () => {
  const { data } = await makeRequest(GET_REQUEST, endpoints.open_attendance);
  return data;
};

/**
 * Mark a unit as attended
 * @param {unit:number} unit
 */
export const markUnitAsAttended = async (unit) => {
  const { data } = await makeRequest(POST_REQUEST, endpoints.attendance, {
    unit,
  });
  return data;
};
