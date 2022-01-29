import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {combineReducers} from "redux";
import {IMoveOption, IRectangleOption, ITextOption} from "../../../state/models";
import update from "immutability-helper";


export const setRemoveReducer = handleActions<any, any>(
    {
        [ActionTypes.setRemove]: (state: string, action: Action<string>) => {
            return action.payload
        },
    },
    ""
);

export const setMoveReducer = handleActions<any, any>(
    {
        [ActionTypes.setMove]: (state: string, action: Action<IMoveOption>) => {
            return action.payload
        },
    },
    {from: "", to: ""} as IMoveOption
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

export const setRectangleOptionReducer = handleActions<any, any>(
    {
        [ActionTypes.setRectangleRotate]: (state: IRectangleOption, action: Action<number>) => {
            return update(state, {rotate: {$set: action.payload}})
        },
        [ActionTypes.setRectangleX]: (state: IRectangleOption, action: Action<number>) => {
            return update(state, {x: {$set: action.payload}})
        },
        [ActionTypes.setRectangleY]: (state: IRectangleOption, action: Action<number>) => {
            return update(state, {y: {$set: action.payload}})
        },
        [ActionTypes.setRectangleWidth]: (state: IRectangleOption, action: Action<number>) => {
            return update(state, {width: {$set: action.payload}})
        },
        [ActionTypes.setRectangleHeight]: (state: IRectangleOption, action: Action<number>) => {
            return update(state, {height: {$set: action.payload}})
        },
        [ActionTypes.setRectangleColor]: (state: IRectangleOption, action: Action<string>) => {
            return update(state, {color: {$set: action.payload}})
        },
        [ActionTypes.setRectangleOpacity]: (state: IRectangleOption, action: Action<number>) => {
            return update(state, {opacity: {$set: action.payload}})
        },
    },
    {rotate: 0, x: 0, y: 0, width: 10, height: 10, color: "", opacity: 1} as IRectangleOption
);

export const setFormReducer = combineReducers({
    remove: setRemoveReducer,
    move: setMoveReducer,
    insert: setInsertReducer,
    textOption: setTextOptionReducer,
    rectangleOption: setRectangleOptionReducer
})


