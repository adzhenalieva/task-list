import {
    FETCH_FAILURE,
    FETCH_SUCCESS, SAVE_PAGE_NUMBER, SAVE_SORT_FIELD,
    SEND_FAILURE
} from "../actions/tasksActions";

const initialState = {
    tasks: [],
    page: 1,
    error: null,
    sort_field: ''
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                tasks: action.data,
            };
        case SAVE_SORT_FIELD:
            return {
                ...state,
                sort_field: action.data,

            };
        case SAVE_PAGE_NUMBER:
            return {
                ...state,
                page: action.data,

            };
        case SEND_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default tasksReducer;