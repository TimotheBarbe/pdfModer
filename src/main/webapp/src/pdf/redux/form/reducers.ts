import {ActionTypes} from "./actions";
import {Action, handleActions} from "redux-actions";
import {IForm} from "../../../state/models";
import update from "immutability-helper";
import {act} from "react-dom/test-utils";

export const setFormReducer = handleActions<any, any>(
    {
        [ActionTypes.set]: (state: IForm, action: Action<IForm>) => {
            return action.payload as IForm;
        },
        [ActionTypes.setRemove]: (state: IForm, action: Action<string>) => {
            return update(state, {remove: {$set: action.payload}}) as IForm
        }
    },
    {remove: ""}
);
