import axios from "axios";

import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    UPVOTE,
    CREATE_REPLY,
    SOLUTION,
    CANCEL_UPVOTE,
    DOWNVOTE,
    CANCEL_DOWNVOTE,
    CREATE_ANSWER_REPORT,
    DELETE_QUESTION,
    DELETE_ANSWER,
    DELETE_REPLY,
    SORT_ANSWERS,
    UPVOTE_ANSWER,
    DOWNVOTE_ANSWER,
    DOWNVOTE_REPLY,
    UPVOTE_REPLY,
    ADD_VIEW,
    SEARCH_QUESTIONS,
    FILTER_QUESTIONS,
    SORT_QUESTIONS,
    SORT_ANSWERS_VOTES,
} from "./types";

export const getQuestion = () => async (dispatch) => {
    try {
        const {data} = await axios.get("http://localhost:5000/api/q_and_a/");

        dispatch({
            type: GET_QUESTIONS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
            payload: {msg: e.response.statusText, status: e.response.status},
        });
    }
};

export const createQuestion = (Data) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(
            "http://localhost:5000/api/q_and_a/add",
            Data,
            config
        );
        dispatch({
            type: CREATE_QUESTIONS,
            payload: data,
        });
        console.log(data);
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const getQuestionById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/${id}`);

        dispatch({
            type: GET_QUESTION_BY_ID,
            payload: data,
        });
        console.log(data)
    } catch (e) {
        dispatch({
            type: 'ERROR',
            payload: {msg: e.response.statusText, status: e.response.status},
        });
    }
}

export const createAnswer = (Data, id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(
            `http://localhost:5000/api/q_and_a/answer/${id}`,
            Data,
            config
        );
        dispatch({
            type: CREATE_ANSWER,
            payload: data,
        });
        console.log('fesfes');
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const createReply = (Data, idQ, idA) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(
            `http://localhost:5000/api/q_and_a/${idQ}/reply/${idA}`,
            Data,
            config
        );
        dispatch({
            type: CREATE_REPLY,
            payload: data,
        });
        console.log('fesfes');
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const markSolution = (idQ, idA) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/solve/${idA}`);
        dispatch({
            type: SOLUTION,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const createVote = (idQ, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/upVote/${idU}`);
        dispatch({
            type: UPVOTE,
            payload: {idQ, upVotes: data},
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};
export const CancelVote = (idQ, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/cancelUpVote/${idU}`);
        dispatch({
            type: CANCEL_UPVOTE,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};
export const createDownVote = (idQ, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/downVote/${idU}`);
        dispatch({
            type: DOWNVOTE,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};
export const CancelDownVote = (idQ, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/cancelDownVote/${idU}`);
        dispatch({
            type: CANCEL_DOWNVOTE,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const createAnswerReport = (Data, idQ, idA) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/answerReport/${idA}`,
            Data,
            config
        );
        dispatch({
            type: CREATE_ANSWER_REPORT,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const deleteQuestion = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`http://localhost:5000/api/q_and_a/delete/${id}`);
        dispatch({
            type: DELETE_QUESTION,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const deleteAnswer = (idQ, idA) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/deleteAnswer/${idA}`);
        dispatch({
            type: DELETE_ANSWER,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const deleteReply = (idQ, idA, idR) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/deleteReply/${idA}/${idR}`);
        dispatch({
            type: DELETE_REPLY,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const sort = (idQ, sort) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/${idQ}/${sort}/sortAnswers`);
        dispatch({
            type: SORT_ANSWERS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const sortByVotes = (idQ) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/${idQ}/sortByVotesAnswers`);
        dispatch({
            type: SORT_ANSWERS_VOTES,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const upvoteAnswer = (idQ, idA, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/${idA}/upVoteAnswer/${idU}`);
        dispatch({
            type: UPVOTE_ANSWER,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};
export const downvoteAnswer = (idQ, idA, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/${idA}/downVoteAnswer/${idU}`);
        dispatch({
            type: DOWNVOTE_ANSWER,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const upvoteReply = (idQ, idA, idR, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/${idA}/${idR}/upVoteReply/${idU}`);
        dispatch({
            type: UPVOTE_REPLY,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const downvoteReply = (idQ, idA, idR, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/${idA}/${idR}/downVoteReply/${idU}`);
        dispatch({
            type: DOWNVOTE_REPLY,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const addView = (idQ) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/addView`);
        dispatch({
            type: ADD_VIEW,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const sortQuestion = (sort) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/sortQuestions/${sort}`);
        dispatch({
            type: SORT_QUESTIONS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const filterQuestion = (tag) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/filterQuestions/${tag}`);
        dispatch({
            type: FILTER_QUESTIONS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const searchQuestion = (text) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/searchQuestions/${text}`);
        dispatch({
            type: SEARCH_QUESTIONS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};
