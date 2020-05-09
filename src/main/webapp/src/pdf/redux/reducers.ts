import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {getEmpty} from "../../utils/Uint8ArrayUtils";

export const setPdfReducer = handleActions<any, any>(
    {
        [ActionTypes.load]: (state: Uint8Array, action: Action<Uint8Array>) => {
            return action.payload as Uint8Array;
        },
        // [ActionTypes.insertPage]: (state: Uint8Array, action: Action<number>) => {
        //     return extracted(state, action.payload);
        // }
    },
    getEmpty()
);
