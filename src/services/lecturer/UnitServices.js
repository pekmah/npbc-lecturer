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

const unitServices = { getUnits };

export default unitServices;
