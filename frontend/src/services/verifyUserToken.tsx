import axios from "axios";
import { END_POINTS } from "../constants/endPoints";
import { CONFIG } from "../constants/config";

export const verifyUserToken = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(`${CONFIG.API}/${END_POINTS.VALIDATE_USER_TOKEN}`);

  return response.data.status === 1 ? true : false;
}