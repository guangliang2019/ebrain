import * as Types from '../actionTypes';

// export const pageGoback = () => ({
//     type: Types.PAGE_GOBACK,
// });

// export const pageGo = () => ({
//     type: Types.PAGE_GO,
// });

// export const pageUpdate = () => ({
//     type: Types.PAGE_UPDATE,
// });

//全局栈
export const updateStackGo = () =>({
    type:Types.UPDATE_STACK_GO,
});

export const updateStackBack = () =>({
    type:Types.UPDATE_STACK_BACK,
});