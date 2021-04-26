import axios from "axios";
import { setAlert } from "./alert";
import { loadUser } from "./auth";
import { toast } from "react-toastify";

import { getPosts } from "./post";

import {
  CLEAR_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_REPOS,
  AVATAR_UPDATED,
  COVER_UPDATED,
  SHARE_POST,
  GET_PROFILES,
  DELETE_SHARE,
  GET_THIS_PROFILE,
  FOLLOW,
  UNFOLLOW,
  SAVED_POST,
  POST_HIDDEN,
  UNHIDE_POST,
  PASSWORD_CHANGED,
  NOTIFY,
  NEW_NOTIFICATION,
  REMOVE_NOTIFICATION,
  PROFILE_VIEWED,
  UNSAVED_POST,
  GET_SUGGESTIONS,
} from "./types";

// Get profile from the logged in user
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update a profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/profile",
      formData,
      config
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created"));

    if (!edit) {
      history.push("/me");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Experience
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "http://localhost:5000/api/profile/experience",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    toast.success("Experience added with success ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Education
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "http://localhost:5000/api/profile/education",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    toast.success("Education added with success ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Volunteer
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addVolunteer = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "http://localhost:5000/api/profile/volunteer",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    toast.success("Volunteer experience added with success ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Certification
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addCertification = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      "http://localhost:5000/api/profile/certification",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    toast.success("Certification added with success ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/profile/experience/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience removed"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/profile/education/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education removed"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete volunteer
export const deleteVolunteer = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/profile/volunteer/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Volunteer removed"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete certification
export const deleteCertification = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/profile/certification/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Certification removed"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Experience
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const updateExperience = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:5000/api/profile/experience/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience updated"));

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Education
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const updateEducation = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:5000/api/profile/education/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education updated"));

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Volunteer
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const updateVolunteer = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:5000/api/profile/volunteer/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Volunteer experience updated"));

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update Certification
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const updateCertification = (formData, history, id) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `http://localhost:5000/api/profile/certification/${id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Certification updated"));

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(setAlert(e.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get Github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/profile/github/${username}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update profile picture
export const updateProfilePicture = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/profile/upload",
      formData,
      config
    );

    dispatch({
      type: AVATAR_UPDATED,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update updateCoverPicture
export const updateCoverPicture = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/profile/cover",
      formData,
      config
    );

    dispatch({
      type: COVER_UPDATED,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//@author Ghada Khedri
//Share post
export const sharePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/shared/${id}`);

    dispatch({
      type: SHARE_POST,
      payload: res.data,
    });
    dispatch(getCurrentProfile());
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Get profile by ID
export const getProfileById = (id) => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get(`http://localhost:5000/api/profile/user/${id}`);

    dispatch({
      type: GET_THIS_PROFILE,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get all profiles
export const getAllProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("http://localhost:5000/api/profile");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response, status: err.response },
    });
  }
};

//@author Ghada Khedri
//Delete Share
export const deleteShare = (id, idShare) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/posts/shared/${id}/${idShare}`
    );

    dispatch({
      type: DELETE_SHARE,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Follow a profile
export const follow = (id, user_id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/profile/follow/${id}`
    );

    dispatch({
      type: FOLLOW,
      payload: res.data,
    });

    dispatch(getProfileById(user_id));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Unfollow a profile
export const unfollow = (id, user_id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/profile/unfollow/${id}`
    );

    dispatch({
      type: UNFOLLOW,
      payload: res.data,
    });

    dispatch(getProfileById(user_id));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//@author Ghada Khedri
//Save post
export const savePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/save/${id}`);

    dispatch({
      type: SAVED_POST,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//@author Ghada Khedri
//Unsave post
export const unsavePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/posts/unsaved/${id}`
    );

    dispatch({
      type: UNSAVED_POST,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//@author Ghada Khedri
//Hide post
export const hidePost = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/hide/${id}`);

    dispatch(getCurrentProfile());

    dispatch({
      type: POST_HIDDEN,
      payload: res.data,
    });

    dispatch(getPosts());
    dispatch(getPosts());
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//@author Ghada Khedri
//unhide post
export const deleteHide = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/posts/unhide/${id}`
    );

    dispatch(getCurrentProfile());

    dispatch({
      type: UNHIDE_POST,
      payload: res.data,
    });

    dispatch(getPosts());
    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Portfolio
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addPortfolio = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/api/profile/portfolio",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    toast.success("Portfolio item added with success ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    history.push("/myprofile");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Change password
export const changePassword = (oldPassword, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ oldPassword, password });

    const res = await axios.post(
      "http://localhost:5000/api/auth/change-password",
      body,
      config
    );

    dispatch({
      type: PASSWORD_CHANGED,
      payload: res.data,
    });

    toast.success(res.data.message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => {
        toast.error(e.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Notify me
export const notifyMe = (message) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ message });

    const res = await axios.post(
      "http://localhost:5000/api/profile/notify-me",
      body,
      config
    );

    dispatch({
      type: NOTIFY,
      payload: res.data,
    });

    dispatch(getCurrentProfile());

    toast.info("New notification added ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

// Notify other user
export const notifyOtherUser = (message, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ message });

    const res = await axios.post(
      `http://localhost:5000/api/profile/notify-other-user/${id}`,
      body,
      config
    );

    dispatch({
      type: NOTIFY,
      payload: res.data,
    });

    dispatch(getCurrentProfile());
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

//view porfile
export const viewProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/profile/view/${id}`);

    dispatch({
      type: PROFILE_VIEWED,
      payload: res.data,
    });
    dispatch(getCurrentProfile());
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Get profile suggestions for new friends 
export const getSuggestions = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/suggestion");

    dispatch({
      type: GET_SUGGESTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
