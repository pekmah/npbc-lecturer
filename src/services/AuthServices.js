import { makeRequest } from "./AxiosServices";
import { GET_REQUEST, POST_REQUEST } from "@/configs/Globals";
import endpoints from "./endpoints";
import axios from "axios";

export const loginStudent = async ({ email, password }) => {
  const url = "/api/auth/login/student";

  const { data } = await axios.post("/api/auth/login/student", {
    email,
    password,
  });

  return data;
};

export const recoverPassword = async (email) => {
  const url = new URL(endpoints.password_reset);

  url.searchParams.append("email", email);

  const { data } = await makeRequest(POST_REQUEST, url.href);

  return data;
};

export const getProfile = async () => {
  const { data } = await makeRequest(GET_REQUEST, endpoints.me);

  return data;
};

/**
 * fetches school details i.e. semester...
 * @returns {Promise<import("axios").AxiosResponse<any>>}
 */
export const getSemesterDetails = async () => {
  const { data } = await makeRequest(GET_REQUEST, endpoints.me);

  return data?.semester || {};
};
