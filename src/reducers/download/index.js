import * as Types from '../../actions/actionTypes.js';

const initialState = {
    downloadPath: 'H:\\download\\'
};

export default function download(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_GAMEKEY:
            state.downloadPath = action.data.downloadPath
            return { ...state}

        default:
            return state;
    }
}