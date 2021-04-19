import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
} from "../actions/types";

export default function (state = [], action) {
    const {type, payload} = action;
    switch (type) {
        case GET_QUESTIONS:
            return payload;
        case CREATE_QUESTIONS:
            return [...state, payload];
        default:
            return state;
    }
}
