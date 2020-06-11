import {createAction} from "redux-actions";
import {IForm} from "../../../state/models";

const component = "form/";

export const ActionTypes = {
    set: component + "set",
    setRemove: component + "setRemove",
    setInsert: component + "setInsert",
    setTextColor: component + "text/setTextColor",
    setTextY: component + "text/setTextY",
    setTextX: component + "text/setTextX",
    setTextSize: component + "text/setTextSize",
    setTextRotate: component + "text/setTextRotate",
    setText: component + "text/setText",

};

export const setFormAction = createAction<IForm>(ActionTypes.set);

export const setFormRemoveAction = createAction<string>(ActionTypes.setRemove);
export const setFormInsertAction = createAction<string>(ActionTypes.setInsert);

export const setTextColorAction = createAction<string>(ActionTypes.setTextColor);
export const setTextYAction = createAction<number>(ActionTypes.setTextY);
export const setTextXAction = createAction<number>(ActionTypes.setTextX);
export const setTextSizeAction = createAction<number>(ActionTypes.setTextSize);
export const setTextRotateAction = createAction<number>(ActionTypes.setTextRotate);
export const setTextAction = createAction<string>(ActionTypes.setText);
