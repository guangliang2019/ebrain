import * as Types from '../../actions/actionTypes.js';

const initialState = {
    AllPause: 0,
    index: 0,
    Done: [
        {
            ifDone: 0,
            used: 0,
        }
    ],
};

export default function download(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_DOWNLOAD:
            let allpause = action.data.AllPause
            return {
                AllPause: allpause,
                index: state.index,
                Done: state.Done,
                used: state.used,
            }
        case Types.UPDATE_IFDONE:
            let done = state.Done
            done[action.data.Index].ifDone = 1
            return {
                AllPause: state.AllPause,
                Done: done,
                index: state.index,
            }
        case Types.ADD_IFDONE:
            let newdone = state.Done
            newdone[state.index + 1] = {
                ifDone: 0,
                used: 0,
            }
            let newindex = state.index + 1
            return {
                AllPause: state.AllPause,
                index: newindex,
                Done: newdone,
            }
        default:
            return state;
    }
}