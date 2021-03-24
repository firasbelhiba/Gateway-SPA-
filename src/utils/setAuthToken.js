// this is a function that takes in a token if the token is there then it's going to add it to the header if not it s going to delete it from the header

import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else {
        delete axios.defaults.headers.common['x-auth-token'];
    }

}

export default setAuthToken;