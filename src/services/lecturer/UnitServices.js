import { GET_REQUEST } from "@/configs/Globals";
import endpoints from "../endpoints";
import { makeRequest } from "../AxiosServices";

const getUnits = async (userId) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.units}?user=${userId}`
  );

  return data;
};

const getUserTimetable = async (userId) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.timetable}?user=${userId}`
  );

  return data;
};

const getAllUnitsAttendance = async () => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.attendance_stats}`
  );

  return data;
};

const unitServices = { getUnits, getUserTimetable, getAllUnitsAttendance };

export default unitServices;
