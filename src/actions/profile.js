import axios from 'axios';
import { setAlert } from './alert';

import {
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE
} from './types';

// Get profile from the logged in user
export const getCurrentProfile = () => async dispatch => {

    try {
        const res = await axios.get('http://localhost:5000/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

};


// Create or update a profile 
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('http://localhost:5000/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

        if (!edit) {
            history.push('/me');
        }

    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(e => dispatch(setAlert(e.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Add Experience 
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addExperience = (formData, history) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('http://localhost:5000/api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });

        dispatch(setAlert('Experience Added'));

        history.push('/myprofile');


    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(e => dispatch(setAlert(e.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

};

// Add Education 
// we add history in parameters because we want to redirect to the dashboard after we finish adding
export const addEducation = (formData, history) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('http://localhost:5000/api/profile/education', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data,
        });

        dispatch(setAlert('Education Added'));

        history.push('/myprofile');


    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(e => dispatch(setAlert(e.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }

};
