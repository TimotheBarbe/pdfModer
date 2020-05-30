import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {IForm} from "../../../state/models";
import update from "immutability-helper";

export const setFormReducer = handleActions<any, any>(
    {
        [ActionTypes.set]: (state: IForm, action: Action<IForm>) => {
            return action.payload as IForm;
        },
        [ActionTypes.setRemove]: (state: IForm, action: Action<string>) => {
            return update(state, {remove: {$set: action.payload}}) as IForm
        },
        [ActionTypes.setInsert]: (state: IForm, action: Action<string>) => {
            return update(state, {insert: {$set: action.payload}}) as IForm
        }
    },
    {remove: "", insert: "1"} as IForm
);
