import { createAction } from "redux-actions";

const component = "pdf/";

export const ActionTypes = {
  load: component + "load",
  // insertPage: component + "insertPage",
};

export const loadPdfAction = createAction<Uint8Array>(ActionTypes.load);
// export const insertPageAction = createAction<number>(ActionTypes.insertPage);