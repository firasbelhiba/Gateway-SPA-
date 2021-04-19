import axios from "axios";
import {setAlert} from "./alert";
import {getCurrentProfile} from "./profile";
import {GET_QUESTIONS, CREATE_QUESTIONS} from "./types";

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
        dispatch({
            type: 'ERROR',
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
};
