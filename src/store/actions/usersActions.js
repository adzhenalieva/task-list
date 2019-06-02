import axios from '../../axios-api';
import {push} from 'connected-react-router';
import {NotificationManager} from "react-notifications";


export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";


const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});


export const loginUser = userData => {
    return dispatch => {
        return axios.post('/login?developer=Aisalkyn', userData).then(
            response => {
                dispatch(loginUserSuccess(response.data));
                NotificationManager.success('Logged in successfully');
                dispatch(push('/'));
            },
            error => {
                if(error.response && error.response.data){
                    dispatch(loginUserFailure(error.response.data.error))
                } else {
                    dispatch(loginUserFailure({global: 'No connection'}))
                }

            }
        )
    }
};

