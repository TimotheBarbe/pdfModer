import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {getEmpty} from "../../../utils/Uint8ArrayUtils";
import {IPdfInfo, IPdfWithVersion} from "../../../state/models";
import update from "immutability-helper";

export const setPdfReducer = handleActions<any, any>(
    {
        [ActionTypes.load]: (state: IPdfWithVersion, action: Action<IPdfInfo>) => {
            return update(state, {
                versions: {$splice: [[state.position + 1, state.versions.length, action.payload as IPdfInfo]]},
                position: {$set: state.position + 1}
            })
        },
        [ActionTypes.selectPage]: (state: IPdfWithVersion, action: Action<number>) => {
            const position = state.position
            return update(state, {versions: {[position]: {selectedPage: {$set: action.payload}}}})
        },
        [ActionTypes.changeVersion]: (state: IPdfWithVersion, action: Action<number>) => {
            const position = state.position
            return update(state, {position: {$set: position + action.payload}})
        },
    },
    {versions: [getEmpty()], position: 0} as IPdfWithVersion
);
