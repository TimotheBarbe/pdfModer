import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {combineReducers} from "redux";
import {View} from "../../../state/models";


export const setViewReducer = handleActions<any, any>(
    {
        [ActionTypes.setView]: (state: View, action: Action<View>) => {
            return action.payload as View
        },
    },
    "zoom" as View
);

export const setDisplayReducer = combineReducers({
    view: setViewReducer,
})


