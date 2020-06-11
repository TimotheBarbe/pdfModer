import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {combineReducers} from "redux";
import {ITextOption} from "../../../state/models";
import update from "immutability-helper";


export const setRemoveReducer = handleActions<any, any>(
    {
        [ActionTypes.setRemove]: (state: string, action: Action<string>) => {
            return action.payload
        },
    },
    ""
);

export const setInsertReducer = handleActions<any, any>(
    {
        [ActionTypes.setInsert]: (state: string, action: Action<string>) => {
            return action.payload
        },
    },
    ""
);

export const setTextOptionReducer = handleActions<any, any>(
    {
        [ActionTypes.setTextColor]: (state: ITextOption, action: Action<string>) => {
            return update(state, {color: {$set: action.payload}})
        },
        [ActionTypes.setTextRotate]: (state: ITextOption, action: Action<number>) => {
            return update(state, {rotate: {$set: action.payload}})
        },
        [ActionTypes.setTextSize]: (state: ITextOption, action: Action<number>) => {
            return update(state, {size: {$set: action.payload}})
        },
        [ActionTypes.setTextX]: (state: ITextOption, action: Action<number>) => {
            return update(state, {x: {$set: action.payload}})
        },
        [ActionTypes.setTextY]: (state: ITextOption, action: Action<number>) => {
            return update(state, {y: {$set: action.payload}})
        },
        [ActionTypes.setText]: (state: ITextOption, action: Action<string>) => {
            return update(state, {text: {$set: action.payload}})
        },
    },
    {color: "", rotate: 0, size: 12, x: 0, y: 0, text: ""} as ITextOption
);

export const setFormReducer = combineReducers({
    remove: setRemoveReducer,
    insert: setInsertReducer,
    textOption: setTextOptionReducer
})


