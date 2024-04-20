import axios, { AxiosResponse } from "axios";
import {
  DELETE_REQUEST,
  GET_REQUEST,
  PATCH_REQUEST,
  POST_REQUEST,
  PUT_REQUEST,
} from "@/configs/Globals";

export const ENDPOINT = process.env.NEXT_PUBLIC_BASE_URL;

export const PrivateAxiosUtility = axios.create({
  baseURL: `${ENDPOINT}`,
  timeout: 600000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosUtility = axios.create({
  baseURL: `${ENDPOINT}`,
  timeout: 600000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 *
 * Success function is optional so as to maintain support for callback functions and also allow async await for getting
 * responses
 *
 */
export const makeRequest = async (
  method: string,
  url: string,
  data?: object
): Promise<AxiosResponse> => {
  /* let domain = getSubdomain();
       domain = domain != null ? `https://${domain}/api/v1/` : DOMAIN;
       axios.defaults.baseURL = domain;*/

  //make sure url starts with "/"
  if (!url.startsWith("/")) {
    url = `/${url}`;
  }

  let response;

  switch (method) {
    case GET_REQUEST:
      response = await axios.get(url);
      break;
    case POST_REQUEST:
      response = await axios.post(url, data);
      break;
    case DELETE_REQUEST:
      response = await axios.delete(url, data);
      break;
    case PUT_REQUEST:
      response = await axios.put(url, data);
      break;
    case PATCH_REQUEST:
      response = await axios.patch(url, data);
      break;
    default:
      break;
  }

  return response;
};

// PrivateAxiosUtility.interceptors.request.use(async (req) => {
//   const state = await JSON.parse(localStorage?.getItem("_token"));
//   let token;
//   // check if access-token exists
//   if (state["access-token"]) {
//     token = state["access-token"];
//     req.headers.Authorization = `Bearer ${token}`;
//   } else {
//     window.location.href = "/";
//   }

//   const user = jwt_decode(token);
//   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

//   if (!isExpired) return req;
//   // Refresh token request
//   let prevTokens = state;
//   const response = await axios.post(`${ENDPOINT}/api/v1/auth/token/refresh/`, {
//     refresh: state.refresh_token,
//   });
//   prevTokens["access-token"] = response?.access;
//   // update new token to local storage
//   localStorage.setItem("_token", JSON.stringify(prevTokens));
//   const { data } = response;
//   // inject new token to local storage
//   req.headers.Authorization = `Bearer ${data["access"]}`;

//   return req;
// });

export default AxiosUtility;
