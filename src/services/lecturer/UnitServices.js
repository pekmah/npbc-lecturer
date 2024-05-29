import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST } from "@/configs/Globals";
import endpoints from "../endpoints";
import { makeRequest } from "../AxiosServices";
import moment from "moment";

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

const getUnitsToOpenAttendanceFor = async () => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.open_attendance}`
  );

  return data;
};

/**
 * Opens attendance for a unit
 * @param {{unit:number}} unitData unit id passed in the request body
 * @returns {Promise<{AxiosResponse<any>}>}
 */
const openUnitAttendance = async (unitData) => {
  const { data } = await makeRequest(
    POST_REQUEST,
    `${endpoints.open_attendance}`,
    unitData
  );

  return data;
};

/**
 * Closes attendance for a unit
 * @param {number} unitId unit id
 * @returns {Promise<{AxiosResponse<any>}>}
 */
const closeUnitAttendance = async (unitId) => {
  const { data } = await makeRequest(
    DELETE_REQUEST,
    `${endpoints.open_attendance}?unit=${unitId}`,
    {}
  );

  return data;
};

/**
 * Fetch students attended a unit
 * @param {number} unitId unit id
 * @returns {Promise<{AxiosResponse<any>}>}
 */
const fetchUnitAttendees = async (unitId) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${
      endpoints.attendance
    }?unit=${unitId}&dont_paginate=true&date=${moment().format("YYYY-MM-DD")}`,
    {}
  );

  return data;
};

/**
 * Delete student's class attendance
 * @param {number} attendanceId attendance id
 * @returns {Promise<{AxiosResponse<any>}>}
 */
const deleteStudentUnitAttendance = async (attendanceId) => {
  const { data } = await makeRequest(
    DELETE_REQUEST,
    `${endpoints.attendance}${attendanceId}`
  );

  return data;
};

const unitServices = {
  getUnits,
  getUserTimetable,
  getAllUnitsAttendance,
  getUnitsToOpenAttendanceFor,
  openUnitAttendance,
  closeUnitAttendance,
  fetchUnitAttendees,
  deleteStudentUnitAttendance,
};

export default unitServices;
