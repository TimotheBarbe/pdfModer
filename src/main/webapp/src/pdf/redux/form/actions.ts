import {createAction} from "redux-actions";
import {IForm} from "../../../state/models";

const component = "form/";

export const ActionTypes = {
    set: component + "set",
    setRemove: component + "setRemove",
};

export const setFormAction = createAction<IForm>(ActionTypes.set);
export const setFormRemoveAction = createAction<string>(ActionTypes.setRemove);
