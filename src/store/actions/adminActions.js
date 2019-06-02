import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "connected-react-router";


export const SUCCESS = 'SUCCESS';
export const FAILURE = "FAILURE";


const success = () => ({type: SUCCESS});

const failure = error => ({type: FAILURE, error});

export const editTask = (data, id) => {

    return dispatch => {
        return axios.post('/edit/' + id +'?developer=Aisalkyn', data).then(
            () => {
                dispatch(success());
                NotificationManager.success('Отредактировано');
                dispatch(push('/'));
            },
            error => {
                    dispatch(failure(error));
                NotificationManager.error('Ошибка');
            }
        )
    }
};