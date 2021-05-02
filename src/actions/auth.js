import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { toast } from 'react-toastify';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  MAIL_FAILED,
  RESET_PASSWORD_MAIL,
  NEW_PASSWORD_MAIL,
} from "./types";

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5000/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register user
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());

    localStorage.setItem('user', JSON.stringify(res.data));

  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Register user with google
export const registerWithGoogle = ({ password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ password });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/register-with-google",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());

    localStorage.setItem('user', JSON.stringify(res.data));

  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Register with facebook
export const registerWithFacebook = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/facebook",
      data,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());

    localStorage.setItem('user', JSON.stringify(res.data));

  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};



//Send reset password mail
export const resetPassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/reset-password",
      body,
      config
    );


    dispatch({
      type: RESET_PASSWORD_MAIL,
    });

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }
    dispatch({
      type: MAIL_FAILED,
    });
  }


};

//Send new password mail
export const setNewPassword = (password, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ password, token });

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/new-password",
      body,
      config
    );


    dispatch({
      type: NEW_PASSWORD_MAIL,
    });

    toast.success("Password changed succefully", {
      position: toast.POSITION.BOTTOM_LEFT
    });

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }
    dispatch({
      type: MAIL_FAILED,
    });
  }


};

//Register user
export const registerWithLinkedin = ({ email, password, link, cookie }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password, link, cookie });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/users/linkedin",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());


  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT
        });
      });
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
