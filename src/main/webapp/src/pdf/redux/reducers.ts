import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {getEmpty} from "../../utils/Uint8ArrayUtils";
import {IPdfInfo} from "../../state/models";

export const setPdfReducer = handleActions<any, any>(
    {
        [ActionTypes.load]: (state: IPdfInfo, action: Action<IPdfInfo>) => {
            return action.payload as IPdfInfo;
        },
        // [ActionTypes.insertPage]: (state: Uint8Array, action: Action<number>) => {
        //     return extracted(state, action.payload);
        // }
    },
    getEmpty()
);
