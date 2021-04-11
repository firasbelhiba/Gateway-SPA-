import axios from "axios";
import { setAlert } from "./alert";
import { getCurrentProfile } from "./profile";
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
} from "./types";

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });

    dispatch(getCurrentProfile());

  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Add likes
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Remove likes
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    dispatch(setAlert("Post removed", "success"));
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/posts/",
      formData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
