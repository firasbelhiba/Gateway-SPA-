import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      //hedhi matensehech ya firas
      //    localStorage.setItem('user', JSON.stringify(payload));
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      //tensech ya firas trod el res ta3 el http req yraja3 token + user-password ;)
      localStorage.setItem("suggestions_friends", null);
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("stackoverflow", null);
      localStorage.setItem("tanitjob", null);
      localStorage.setItem("indeed", null);
      localStorage.setItem("freecourse", null);
      localStorage.setItem("edx", null);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("profiles");
      localStorage.removeItem("user");
      localStorage.removeItem("profile");
      localStorage.removeItem("this_profile");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
