import * as Types from '../actionTypes';

export const loadingOpen = () => ({
    type: Types.LOAD_OPEN,
});

export const loadingClose = () => ({
    type: Types.LOAD_CLOSE,
});

export const setUserInfo = () => ({
    type: Types.SET_USER_INFO,
});