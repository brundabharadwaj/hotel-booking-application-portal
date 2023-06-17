import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { RootState } from "./store";
import {
  FAILED,
  PENDING,
  SUCCESS,
  TOKENS,
} from "../constants/textConstant";
import { END_POINTS } from "../constants/endPoints";
import {
  plainEncrypt,
  removeSessionStorageItem,
  setSessionStorage,
} from "./../constants/sessions";
import { CONFIG } from "../constants/config";

axios.defaults.withCredentials = true;

// State interface
export interface AuthState {
  status: any;
  user: any;
}

// Initial values of state
const initialState: AuthState = {
  status: {
    state: "",
    errorMessage: "",
  },
  user: {
    userId: "",
    userName: "",
    userEmail: "",
    userPhone: ""
  },
};

export const signin = createAsyncThunk("user/signin", async (user: any) => {
  const response = await axios.post(`${CONFIG.API}/${END_POINTS.LOGIN_USER}`, user);
  return response.data;
});

export const register = createAsyncThunk("user/signup", async (user: any) => {
  const response = await axios.post(`${CONFIG.API}/${END_POINTS.REGISTER_USER}`, user);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDataFromSessions: (state, action) => {
      state.user = action.payload;
    },
    overrideLogout: (state) => {
      state.user = initialState.user;
      removeSessionStorageItem(TOKENS.sessionStorageToken);
    },
  },
  extraReducers: (builder) => {
    builder
      // ! REGISTER
      .addCase(register.pending, (state) => {
        state.status.state = PENDING;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status.state = SUCCESS;
        state.status.errorMessage = action.payload.message;
      })
      .addCase(register.rejected, (state, action: any) => {
        state.status.state = FAILED;
      })
      // ! SIGNIN
      .addCase(signin.pending, (state) => {
        state.status.state = PENDING;
      })
      .addCase(signin.fulfilled, (state, action) => {
        if(action.payload.status === 0){
          state.status.state = FAILED;
          state.status.errorMessage = action.payload.message;
        } else {
          state.status.state = SUCCESS;
          Cookies.set(TOKENS.cookieStorageToken, plainEncrypt(state.user.userId));
          state.status.errorMessage = action.payload.message;
        }
      })
      .addCase(signin.rejected, (state, action: any) => {
        state.status.state = FAILED;
      })
  },
});

export const { setUserDataFromSessions, overrideLogout } = authSlice.actions;

export const authState = (state: RootState) => state.auth;

export default authSlice.reducer;
