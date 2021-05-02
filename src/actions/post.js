import axios from "axios";
import { setAlert } from "./alert";
import { getCurrentProfile, Notify } from "./profile";
import { toast } from "react-toastify";

import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_REPORT,
  VIEWED,
  SEND_POST_MAIL,
  UPDATE_POST,
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

    toast.success("You liked this post ! ", {
      position: toast.POSITION.BOTTOM_LEFT,
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
    toast.success("Post is deleted !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
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
      //const body = JSON.stringify({ title, text, category, image });

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

    toast.success("Post added successfully!!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  } catch (error) {

    toast.error(error, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
//Add comment
export const addComment = (formData, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts/comment/${id}`,
      formData,
      config
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment added", "success"));
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

//Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/posts/comment/${postId}/${commentId}`
    );
    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });
    toast.success("Comment is deleted !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  } catch (e) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Add report
export const addReport = (formData, id, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts/report/${id}`,
      formData,
      config
    );
    dispatch({
      type: ADD_REPORT,
      payload: res.data,
    });

    history.push("/forum");
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

//Add views
export const addViews = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/posts/view/${id}`);
    dispatch({
      type: VIEWED,
      payload: { id, views: res.data },
    });

    dispatch(getPost(id));
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

//Update Post
export const updatePost = (data, id, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    //const body = JSON.stringify({ title, text, category, image });

    const res = await axios.put(
      `http://localhost:5000/api/posts/${id}`,
      data,
      config
    );
    dispatch({
      type: UPDATE_POST,
      payload: res.data,
    });
    history.push("/forum");
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

//Send Post Mail
export const sendPostMail = (formData, id, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `http://localhost:5000/api/posts/mail/${id}`,
      formData,
      config
    );
    dispatch({
      type: SEND_POST_MAIL,
    });
    history.push("/forum");
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
