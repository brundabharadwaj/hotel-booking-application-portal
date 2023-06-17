import axios from "axios";
import Cookies from "js-cookie"
import { TOKENS } from "../constants/textConstant";
import { CONFIG } from "../constants/config";
import { removeSessionStorageItem } from "../constants/sessions";
import { END_POINTS } from "../constants/endPoints";

export const logout = async () => {
  Cookies.remove(TOKENS.cookieStorageToken);
  removeSessionStorageItem(TOKENS.sessionStorageToken);

  await axios.post(`${CONFIG.API}/${END_POINTS.LOGOUT_USER}`);
}