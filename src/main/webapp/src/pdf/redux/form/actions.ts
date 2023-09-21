import {createAction} from "redux-actions";
import {IForm, ImageFormat, IMoveOption} from "../../../state/models";

const component = "form/";

export const ActionTypes = {
    set: component + "set",
    setRemove: component + "setRemove",
    setMove: component + "setMove",
    setInsert: component + "setInsert",

    setTextColor: component + "text/setTextColor",
    setTextY: component + "text/setTextY",
    setTextX: component + "text/setTextX",
    setTextSize: component + "text/setTextSize",
    setTextRotate: component + "text/setTextRotate",
    setText: component + "text/setText",

    setImageData: component + "image/setImageData",
    setImageFormat: component + "image/setImageFormat",
    setImageX: component + "image/setImageX",
    setImageY: component + "image/setImageY",
    setImageRotate: component + "image/setImageRotate",
    setImageScale: component + "image/setImageScale",

    setRectangleY: component + "rectangle/setRectangleY",
    setRectangleX: component + "rectangle/setRectangleX",
    setRectangleRotate: component + "rectangle/setRectangleRotate",
    setRectangleHeight: component + "rectangle/setRectangleHeight",
    setRectangleWidth: component + "rectangle/setRectangleWidth",
    setRectangleColor: component + "rectangle/setRectangleColor",
    setRectangleOpacity: component + "rectangle/setRectangleOpacity",

};

export const setFormAction = createAction<IForm>(ActionTypes.set);

export const setFormRemoveAction = createAction<string>(ActionTypes.setRemove);
export const setFormMoveAction = createAction<IMoveOption>(ActionTypes.setMove);
export const setFormInsertAction = createAction<string>(ActionTypes.setInsert);

export const setTextColorAction = createAction<string>(ActionTypes.setTextColor);
export const setTextYAction = createAction<number>(ActionTypes.setTextY);
export const setTextXAction = createAction<number>(ActionTypes.setTextX);
export const setTextSizeAction = createAction<number>(ActionTypes.setTextSize);
export const setTextRotateAction = createAction<number>(ActionTypes.setTextRotate);
export const setTextAction = createAction<string>(ActionTypes.setText);

export const setImageData = createAction<Uint8Array>(ActionTypes.setImageData);
export const setImageFormat = createAction<ImageFormat>(ActionTypes.setImageFormat);
export const setImageX = createAction<number>(ActionTypes.setImageX);
export const setImageY = createAction<number>(ActionTypes.setImageY);
export const setImageRotate = createAction<number>(ActionTypes.setImageRotate);
export const setImageScale = createAction<number>(ActionTypes.setImageScale);

export const setRectangleYAction = createAction<number>(ActionTypes.setRectangleY);
export const setRectangleXAction = createAction<number>(ActionTypes.setRectangleX);
export const setRectangleHeightAction = createAction<number>(ActionTypes.setRectangleHeight);
export const setRectangleWidthAction = createAction<number>(ActionTypes.setRectangleWidth);
export const setRectangleRotateAction = createAction<number>(ActionTypes.setRectangleRotate);
export const setRectangleColorAction = createAction<string>(ActionTypes.setRectangleColor);
export const setRectangleOpacityAction = createAction<number>(ActionTypes.setRectangleOpacity);
