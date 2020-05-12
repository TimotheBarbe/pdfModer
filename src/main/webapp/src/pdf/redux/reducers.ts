import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {getEmpty} from "../../utils/Uint8ArrayUtils";
import {IPdfInfo} from "../../state/models";
import update from "immutability-helper";

export const setPdfReducer = handleActions<any, any>(
    {
        [ActionTypes.load]: (state: IPdfInfo, action: Action<IPdfInfo>) => {
            return action.payload as IPdfInfo;
        },
        [ActionTypes.selectPage]: (state: IPdfInfo, action: Action<number>) => {
            return update(state, {selectedPage: {$set: action.payload}})
        }
    },
    getEmpty()
);
