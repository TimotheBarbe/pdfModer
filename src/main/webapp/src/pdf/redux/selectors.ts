import {IStoreState} from "../../state/models";

export const pdfSelector = (state: IStoreState) => state.pdf;
export const pdfDataSelector = (state: IStoreState) => pdfSelector(state).data;
export const pdfPageCountSelector = (state: IStoreState) => pdfSelector(state).pageCount;
export const pdfSelectedPageSelector = (state: IStoreState) => pdfSelector(state).selectedPage;
