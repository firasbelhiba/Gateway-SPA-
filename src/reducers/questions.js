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
    BLOG_REC,
    UPDATE_QUESTIONS,
    CANCEL_NEWS,
    NEWS_REC_SKILLS,
    NEWS_REC,
    ADD_DOMAIN,
    UPDATE_ANSWER,
    GET_SAVED_NEWS,
    SAVE_NEWS,
    CREATE_ANSWER_REPORT,
    DELETE_QUESTION,
    DELETE_ANSWER,
    DELETE_REPLY,
    CANCEL_DOMAIN,
    SORT_ANSWERS,
    UPVOTE_ANSWER,
    ADD_VIEW,
    GET_FOLLOWED_QUESTIONS,
    SEARCH_QUESTIONS,
    FOLLOW_QUESTION,
    UNFOLLOW_QUESTION,
    SORT_QUESTIONS,
    FILTER_QUESTIONS,
    GET_DOMAINS,
    SORT_ANSWERS_VOTES,
    DOWNVOTE_ANSWER, DOWNVOTE_REPLY, UPVOTE_REPLY,
} from "../actions/types";

const initialState = {
    questions: [],
    videos: {loading: true, videos: []},
    blogs: {loading: true, blogs: []},
    news: {loading: true, news: []},
    newsSkills: {loading: true, news: []},
    savedNews: {loading: true, news: []},
    domains: [],
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
                blogs: {loading: true, blogs: []},
                question: initialState.question,
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
        case UPDATE_QUESTIONS:
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
                videos: {loading: false, videos: payload},
            };
        case BLOG_REC:
            return {
                ...state,
                blogs: {loading: false, blogs: payload}
            };
        case NEWS_REC:
            return {
                ...state,
                news: {loading: false, news: payload}
            };
        case GET_SAVED_NEWS:
            return {
                ...state,
                savedNews: {loading: false, news: payload}
            };
        case CANCEL_NEWS:
            return {
                ...state,
                savedNews: {news: payload}
            };
        case SAVE_NEWS:
            return {
                ...state,
                savedNews: {news: payload}
            };
        case ADD_DOMAIN:
            return {
                ...state,
                domains: payload
            };
        case GET_DOMAINS:
            return {
                ...state,
                domains: payload
            };
        case CANCEL_DOMAIN:
            return {
                ...state,
                domains: payload
            };
        case NEWS_REC_SKILLS:
            return {
                ...state,
                newsSkills: {loading: false, news: payload}
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
        case UPDATE_ANSWER:
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
