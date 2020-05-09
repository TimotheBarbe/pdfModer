import {createAction} from "redux-actions";
import {IPdfInfo} from "../../state/models";

const component = "pdf/";

export const ActionTypes = {
    load: component + "load",
};

export const loadPdfAction = createAction<IPdfInfo>(ActionTypes.load);