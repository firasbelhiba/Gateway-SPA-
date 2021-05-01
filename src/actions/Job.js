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