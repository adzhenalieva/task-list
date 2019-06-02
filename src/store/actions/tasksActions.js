import axios from "../../axios-api";
import {push} from "connected-react-router";
import {NotificationManager} from 'react-notifications';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = "FETCH_FAILURE";

export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_FAILURE = "SEND_FAILURE";
export const SAVE_SORT_FIELD = "SAVE_SORT_FIELD";
export const SAVE_PAGE_NUMBER = "SAVE_PAGE_NUMBER";

export const fetchSuccess = data => {
    return {type: FETCH_SUCCESS, data};
};

const saveSort = data => {
    return {type: SAVE_SORT_FIELD, data};
};

const savePage = data => {
    return {type: SAVE_PAGE_NUMBER, data};
};

const fetchFailure = error => ({type: FETCH_FAILURE, error});

const sendSuccess = () => ({type: SEND_SUCCESS});

const sendFailure = error => ({type: SEND_FAILURE, error});

export const fetchTasks = (param) => {
    return (dispatch, getState) => {
       let state = getState();
        if (param && "sort_field" in param) {
            param = param['sort_field'];
            return axios.get('', {
                params: {
                    developer: "Aisalkyn",
                    sort_field: param,
                    page: state.tasks.page
                }
            }).then(
                response => {
                    dispatch(fetchSuccess(response.data.message.tasks));
                    dispatch(saveSort(param));
                },
                error => dispatch(fetchFailure(error))
            );

        } else if (param && "page" in param) {
            param = param['page'];
            return axios.get('', {
                params: {
                    developer: "Aisalkyn",
                    sort_field: state.tasks.sort_field,
                    page: param
                }
            }).then(
                response => {
                    dispatch(fetchSuccess(response.data.message.tasks));
                    dispatch(savePage(param))
                },
                error => dispatch(fetchFailure(error))
            );
        } else {
            return axios.get('', {
                params: {
                    developer: "Aisalkyn"
                }
            }).then(
                response => {
                    console.log(response.data.message);
                    dispatch(fetchSuccess(response.data.message.tasks))},
                error => dispatch(fetchFailure(error))
            );
        }

    };
};


export const sendTask = artistData => {
    return dispatch => {
        return axios.post('create?developer=Aisalkyn', artistData).then(
            () => {
                dispatch(sendSuccess());
                NotificationManager.success('Создано успешно');
                dispatch(push('/'));
            },
            error => {
                    dispatch(sendFailure(error));
                    NotificationManager.error('Ошибка')
            }
        )
    }
};