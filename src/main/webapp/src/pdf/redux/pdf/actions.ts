import {createAction} from "redux-actions";
import {IPdfInfo} from "../../../state/models";

const component = "pdf/";

export const ActionTypes = {
    load: component + "load",
    selectPage: component + "select",
    changeVersion: component + "previousVersion"
};

export const loadPdfAction = createAction<IPdfInfo>(ActionTypes.load);
export const selectPageAction = createAction<number>(ActionTypes.selectPage);
export const changeVersion = createAction<number>(ActionTypes.changeVersion);