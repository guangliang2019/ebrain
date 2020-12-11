import * as Types from '../../actions/actionTypes.js';

const initialState = {
    token: '',
};


export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case Types.SET_USER_INFO:
            return { ...state, ...action.data };
        default:
            return state;
    }
};