import * as Types from '../../actions/actionTypes.js';

const initialState = {
    gamekey: 0,
};

export default function gameStatus(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_GAMEKEY:
            state.gamekey = action.data.newKey
            return { ...state}

        default:
            return state;
    }
}