import axios from 'axios';

export const FETCH_ADVICE_START = "FETCH_ADVICE_START";
export const FETCH_ADVICE_SUCCESS = "FETCH_ADVICE_SUCCESS";
export const FETCH_ADVICE_FAILURE = "FETCH_ADVICE_FAILURE";

export const fetchAdvice = () => dispatch => {
    dispatch({ type: FETCH_ADVICE_START });
    axios
        .get(`https://api.adviceslip.com/advice`)
        .then( res => {
            console.log(res.data.slip.advice);
            dispatch({ type: FETCH_ADVICE_SUCCESS, payload: res.data.slip.advice })
        })
        .catch(err => console.log(err)) 
};