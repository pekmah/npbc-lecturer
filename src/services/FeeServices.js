import { GET_REQUEST } from "@/configs/Globals";
import { makeRequest } from "./AxiosServices";
import endpoints from "./endpoints";

export const getFees = async () => {
  const { data } = await makeRequest(GET_REQUEST, endpoints.fee);

  return data;
};
