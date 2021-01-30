import * as Types from '../../actions/actionTypes.js';

const initialState = {
    history: [
        {
            adress: '/default',
            state: {},
        }
    ],
    flag: 0,
    length: 0,
};

export default function browser(state = initialState, action) {
    switch (action.type) {
        case Types.PAGE_GOBACK:
            return { ...state, flag: state.flag - 1 }
        case Types.PAGE_GO:
            return { ...state, flag: state.flag + 1 }
        //PageUpdate这个动作的data含有
        //第一，用户将要访问的页面，以及页面的相关信息
        //比如我们项目的游戏详情页的路由都是/GameBase/Detail，只能通过store中的gid区分游戏详情页
        //第二，还能保存用户即将离开的页面的一些信息
        //比如你离开当时，在页面所滚动的高度
        case Types.PAGE_UPDATE:
            let newHistory = state.history
            newHistory[state.flag + 1] = {
                adress: action.data.newAdress,
                state: action.data.newState
            }
            return {
                length: state.flag + 1,
                flag: state.flag + 1,
                history: newHistory,
            }
        default:
            return state;
    }
}