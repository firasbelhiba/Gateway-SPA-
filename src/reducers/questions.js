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
        default:
            return state;
    }
}
