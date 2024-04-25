import { GET_REQUEST } from "@/configs/Globals";
import { makeRequest } from "./AxiosServices";
import endpoints from "./endpoints";

/**
 * fetches exam types(cat,exam...)
 * @returns Promise<AxiosResponse<any>>
 */
export const getExamTypes = async () => {
  const { data } = await makeRequest(GET_REQUEST, `${endpoints.exam_types}`);

  return data;
};

/**
 * returns the exam results of a user
 * @param {number} user_id
 * @param {number} semester_id
 * @param {number?} year
 * @returns Promise<AxiosResponse<any>>
 */
export const getExamResults = async (
  user_id,
  semester_id,
  year = new Date().getFullYear(),
  unit = null
) => {
  const { data } = await makeRequest(
    GET_REQUEST,
    `${endpoints.exam_results}?user=${user_id}${
      semester_id ? `&semester=${semester_id}` : ""
    }&year=${year}&unit=${unit ? unit : ""}`
  );

  return data;
};
