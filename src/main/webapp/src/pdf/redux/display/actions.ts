import {createAction} from "redux-actions";
import {View} from "../../../state/models";

const component = "display/";

export const ActionTypes = {
    setView: component + "setView",
};

export const setDisplayViewAction = createAction<View>(ActionTypes.setView);
