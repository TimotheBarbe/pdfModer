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

    setRectangleY: component + "Rectangle/setRectangleY",
    setRectangleX: component + "Rectangle/setRectangleX",
    setRectangleRotate: component + "Rectangle/setRectangleRotate",
    setRectangleHeight: component + "Rectangle/setRectangleHeight",
    setRectangleWidth: component + "Rectangle/setRectangleWidth",
    setRectangleColor: component + "Rectangle/setRectangleColor",

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

export const setRectangleYAction = createAction<number>(ActionTypes.setRectangleY);
export const setRectangleXAction = createAction<number>(ActionTypes.setRectangleX);
export const setRectangleHeightAction = createAction<number>(ActionTypes.setRectangleHeight);
export const setRectangleWidthAction = createAction<number>(ActionTypes.setRectangleWidth);
export const setRectangleRotateAction = createAction<number>(ActionTypes.setRectangleRotate);
export const setRectangleColorAction = createAction<string>(ActionTypes.setRectangleColor);
