import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    CREATE_REPLY,
    DOWNVOTE_QUESTION,
    SOLUTION,
    YOUTUBE_REC,
    UPVOTE_QUESTION,
    CREATE_ANSWER_REPORT,
    DELETE_QUESTION,
    DELETE_ANSWER,
    DELETE_REPLY,
    SORT_ANSWERS,
    UPVOTE_ANSWER,
    ADD_VIEW,
    GET_FOLLOWED_QUESTIONS,
    SEARCH_QUESTIONS,
    FOLLOW_QUESTION,
    UNFOLLOW_QUESTION,
    SORT_QUESTIONS,
    FILTER_QUESTIONS,
    SORT_ANSWERS_VOTES,
    DOWNVOTE_ANSWER, DOWNVOTE_REPLY, UPVOTE_REPLY,
} from "../actions/types";

const initialState = {
    questions: [],
    videos: [],
    question: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case GET_FOLLOWED_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case SORT_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case FILTER_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case SEARCH_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case GET_QUESTION_BY_ID:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case FOLLOW_QUESTION:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case UNFOLLOW_QUESTION:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case CREATE_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case CREATE_ANSWER:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case CREATE_REPLY:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case SOLUTION:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case YOUTUBE_REC:
            return {
                ...state,
                videos: payload,
                loading: false,
            };
        case UPVOTE_QUESTION:
            return {
                ...state,
                questions: state.questions.map((question) =>
                    question._id === payload.id ? {
                        ...question,
                        upVotes: payload.upVotes,
                        downVotes: payload.downVotes,
                    } : question
                ),
                loading: false,
            };
        case DOWNVOTE_QUESTION:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case CREATE_ANSWER_REPORT:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case DELETE_QUESTION:
            return {
                ...state,
                questions: payload,
                loading: false,
            };
        case DELETE_ANSWER:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case DELETE_REPLY:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case SORT_ANSWERS:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case SORT_ANSWERS_VOTES:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case UPVOTE_ANSWER:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case DOWNVOTE_ANSWER:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case DOWNVOTE_REPLY:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case UPVOTE_REPLY:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case ADD_VIEW:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        default:
            return state;
    }
}
