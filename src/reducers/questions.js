import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    CREATE_REPLY,
    UPVOTE,
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
    ADD_VIEW,
    SEARCH_QUESTIONS,
    SORT_QUESTIONS,
    FILTER_QUESTIONS,
    SORT_ANSWERS_VOTES,
    DOWNVOTE_ANSWER, DOWNVOTE_REPLY, UPVOTE_REPLY,
} from "../actions/types";

const initialState = {
    questions: [],
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
        case UPVOTE:
            return {
                ...state,
                questions: state.questions.map((q) => q._id === payload.idQ ? {...q, upVotes: payload.upVotes} : q)
                ,
                loading: false,
            };
        case CANCEL_UPVOTE:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case DOWNVOTE:
            return {
                ...state,
                question: payload,
                loading: false,
            };
        case CANCEL_DOWNVOTE:
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
