import axios from "axios";

import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    UPVOTE_QUESTION,
    GET_FOLLOWED_QUESTIONS,
    CREATE_REPLY,
    SOLUTION,
    CANCEL_DOMAIN,
    CANCEL_NEWS,
    NEWS_REC_SKILLS,
    NEWS_REC,
    GET_DOMAINS,
    SAVE_NEWS,
    ADD_DOMAIN,
    DOWNVOTE_QUESTION,
    CREATE_ANSWER_REPORT,
    DELETE_QUESTION,
    DELETE_ANSWER,
    DELETE_REPLY,
    SORT_ANSWERS,
    UPVOTE_ANSWER,
    DOWNVOTE_ANSWER,
    DOWNVOTE_REPLY,
    UPVOTE_REPLY,
    UNFOLLOW_QUESTION,
    FOLLOW_QUESTION,
    ADD_VIEW,
    BLOG_REC,
    YOUTUBE_REC,
    SEARCH_QUESTIONS,
    FILTER_QUESTIONS,
    SORT_QUESTIONS,
    UPDATE_QUESTIONS,
    SORT_ANSWERS_VOTES, GET_SAVED_NEWS,
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

export const getFollowedQuestion = (idU) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/followed/${idU}`);

        dispatch({
            type: GET_FOLLOWED_QUESTIONS,
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
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const updateQuestion = (Data, id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(
            `http://localhost:5000/api/q_and_a/update/${id}`,
            Data,
            config
        );
        dispatch({
            type: UPDATE_QUESTIONS,
            payload: data,
        });
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
            type: UPVOTE_QUESTION,
            payload: {idQ, upVotes: data.upVotes, downVotes: data.downVotes},
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
            type: DOWNVOTE_QUESTION,
            payload: {idQ, upVotes: data.upVotes, downVotes: data.downVotes},
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

export const followQuestion = (idQ, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/followQuestion/${idU}`);
        dispatch({
            type: FOLLOW_QUESTION,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const unFollowQuestion = (idQ, idU) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/unFollowQuestion/${idU}`);
        dispatch({
            type: UNFOLLOW_QUESTION,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const youtubeRec = (search) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/youtubeRec/${search}`);
        dispatch({
            type: YOUTUBE_REC,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const blogRec = (search) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/blogRec/${search}`);
        dispatch({
            type: BLOG_REC,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const newsRec = (search) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/newsRec/${search}`);
        dispatch({
            type: NEWS_REC,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const newsRecSkills = (search) => async (dispatch) => {
    const Search = search.join(',') + ' web'
    console.log(Search);
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/newsRecSkills/${Search}`);
        dispatch({
            type: NEWS_REC_SKILLS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const saveNews = (Data, idU) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(
            `http://localhost:5000/api/q_and_a/saveNews/${idU}`,
            Data,
            config
        );
        dispatch({
            type: SAVE_NEWS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const cancelSaveNews = (idU, idN) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/cancelSaveNews/${idU}/${idN}`);
        dispatch({
            type: CANCEL_NEWS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const getNewsSaved = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/getNewsSaved/${id}`);
        dispatch({
            type: GET_SAVED_NEWS,
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

export const addDomain = (Data, idU) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const {data} = await axios.post(
            `http://localhost:5000/api/q_and_a/addDomain/${idU}`,
            Data,
            config
        );
        dispatch({
            type: ADD_DOMAIN,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};

export const getDomains = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/q_and_a/getDomains/${id}`);
        dispatch({
            type: GET_DOMAINS,
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

export const cancelDomains = (idU, category) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/cancelDomains/${idU}/${category}`);
        dispatch({
            type: CANCEL_DOMAIN,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {msg: error.response.statusText, status: error.response.status},
        });
    }
};
