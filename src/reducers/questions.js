import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    CREATE_REPLY,
    UPVOTE,
    SOLUTION,
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
                question: payload,
                loading: false,
            };
        default:
            return state;
    }
}
