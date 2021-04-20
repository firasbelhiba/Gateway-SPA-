import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    CREATE_REPLY,
} from "../actions/types";

const initialState = {
    questions: [],
    question: null,
    loading: true,
    error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
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
            return [...state, payload];
        case CREATE_ANSWER:
            return [...state, payload];
        case CREATE_REPLY:
            return [...state, payload];
        default:
            return state;
    }
}
