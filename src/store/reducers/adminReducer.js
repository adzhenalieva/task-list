import {FAILURE} from "../actions/adminActions";


const initialState = {
    error: null

};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default adminReducer;