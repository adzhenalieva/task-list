import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
} from "../actions/usersActions";

const initialState = {
    user: null,
    loginError: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                loginError: null,
            };
        case LOGIN_USER_FAILURE:
            return {...state,
                loginError: action.error};
        default:
            return state;
    }
};
export default usersReducer;