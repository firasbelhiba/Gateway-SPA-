import axios from "axios";
import { setAlert } from "./alert";
import {loadUser} from './auth'
import {
  GET_JOBS,
  JOB_ERROR,
  UPDATE_LIKE,
  DELETE_JOB,
  ADD_JOB,
  GET_JOB,
  UPDATE_JOB,
  SET_CURRENT,
  SET_LOADING,
  CLEAR_CURRENT,
  SET_ACTIVE,
  UPDATE_SAVE_JOB,
  ADD_VIEWS,
  SET_DISACTIVE,
  ADD_COMME,
  DELETE_COMMENT,
  SEARCH_PRICE,
  SEARCH_JOB_TYPE,
  SEARCH_COUNTRY,
  SEARCH_AVAILABILITY,
  SEARCH_SKILLS,
  GET_JOBS_BY_USER,
  ADD_CANDIDATE,
  DELETE_CANDIDATE,
  JOB_APPLY,
  SET_ACTIVE_REPORT,
  SET_DISACTIVE_REPORT,
  ADD_REP,
  SET_ACTIVE_MAIL,
  SET_DISACTIVE_MAIL,
  ADD_MAIL
  
} from "./types";

// Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };

 //get Jobs 
export const getJobs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('http://localhost:5000/api/jobs');
      const data = await res.json();
  
      dispatch({
        type: GET_JOBS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  //Add likes
export const addLike = (id) => async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/jobs/like/${id}`);
      
      dispatch({
        type: UPDATE_LIKE,
        payload: { id, likes: res.data },
      });
    } catch (error) {
      dispatch({
        type: JOB_ERROR,
        
      });
    }
  };

  //Add candidature
export const addCandidature = (id) => async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/jobs/candidat/${id}`);
      
      dispatch({
        type: ADD_CANDIDATE,
        payload: { id, candidates: res.data },
      });
    } catch (error) {
      dispatch({
        type: JOB_ERROR,
        
      });
    }
  };

  //Add apply
export const applyJob = (id) => async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/jobs/applied/${id}`);
      
      dispatch({
        type: JOB_APPLY,
        payload: { id, appliedTo: res.data },
      });
    } catch (error) {
      dispatch({
        type: JOB_ERROR,
        
      });
    }
  };

  //Add VIEWS
export const addViews = (id) => async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/jobs/views/${id}`);
      
      dispatch({
        type: ADD_VIEWS,
        payload: { id, views: res.data },
      });
    } catch (error) {
      dispatch({
        type: JOB_ERROR,
        
      });
    }
  };

  // Delete JOB from server
export const deleteJob = id => async dispatch => {
    try {
      setLoading();
  
      const res = await axios.delete(`http://localhost:5000/api/jobs/${id}`);
  
      dispatch({
        type: DELETE_JOB,
        payload: id,a:res.data
      });
    } catch (err) {
      dispatch({
        type: JOB_ERROR,
        payload: err.response.statusText
      });
    }
  };


  
// Add new job
export const addJob = (formData) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/jobs/",
        formData,
        config
      );
      dispatch({
        type: ADD_JOB,
        payload: res.data,
      });
      dispatch(getJobs())
      dispatch(loadUser())
    } catch (error) {
      dispatch({
        type: JOB_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

  export const updateJob = (formData) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/api/jobs/${formData._id}`,
        formData,
        config
      );
      dispatch({
        type: UPDATE_JOB,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: JOB_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

  // Set current log
export const setCurrent = job => {
    return {
      type: SET_CURRENT,
      payload: job
    };
};

// Clear current job
export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };

   // Set active to true
   export const setActive = () => {
    return {
      type: SET_ACTIVE
    };
  };

   // Set active to true
   export const setActiveMail = () => {
    return {
      type: SET_ACTIVE_MAIL
    };
  };

  export const setActiveReport = () => {
    return {
      type: SET_ACTIVE_REPORT
    };
  };

 // Set disactive to true
     export const setDisactive = () => {
        return {
          type: SET_DISACTIVE
        };
      };