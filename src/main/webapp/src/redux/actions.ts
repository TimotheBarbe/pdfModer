import { createAction } from "redux-actions";

const component = "pdf/";

export const ActionTypes = {
  loadPdf: component + "load",
};

export const loadPdfAction = createAction<Uint8Array>(ActionTypes.loadPdf);