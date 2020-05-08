import {combineReducers} from "redux";
import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";

export const setTestReducer = handleActions<any, any>(
    {
        [ActionTypes.loadPdf]: (state: Uint8Array, action: Action<any>) => {
            return action.payload as Uint8Array;
        }
    },
    new Uint8Array(0)
);
