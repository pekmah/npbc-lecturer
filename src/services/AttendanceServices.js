import { GET_REQUEST } from "@/configs/Globals";
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
