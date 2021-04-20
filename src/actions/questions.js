import axios from "axios";
import {setAlert} from "./alert";
import {getCurrentProfile} from "./profile";
import {
    GET_QUESTIONS,
    CREATE_QUESTIONS,
    GET_QUESTION_BY_ID,
    CREATE_ANSWER,
    QUESTION_ERROR,
    CREATE_REPLY, SOLUTION,
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
        console.log('fesfes')
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
};

export const createReply = (Data, idQ, idA) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        console.log(idQ)
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
        console.log(error);
    }
};

export const markSolution = (idQ, idA) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:5000/api/q_and_a/${idQ}/solve/${idA}`);
        dispatch({
            type: SOLUTION,
            payload: { idQ, idA ,solution: data },
        });
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {

            },
        });
    }
};
