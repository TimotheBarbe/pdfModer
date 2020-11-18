import {IStoreState} from "../../../state/models";

export const pdfWithVersionSelector = (state: IStoreState) => state.pdf
export const pdfSelector = (state: IStoreState) => pdfWithVersionSelector(state).versions[pdfWithVersionSelector(state).position];
export const pdfSelectorCanPrevious = (state: IStoreState) => pdfWithVersionSelector(state).position > 0;
export const pdfSelectorCanNext = (state: IStoreState) => pdfWithVersionSelector(state).position < pdfWithVersionSelector(state).versions.length - 1;
export const pdfDataSelector = (state: IStoreState) => pdfSelector(state).data;
export const pdfPageCountSelector = (state: IStoreState) => pdfSelector(state).pageCount;
export const pdfSelectedPageSelector = (state: IStoreState) => pdfSelector(state).selectedPage;
