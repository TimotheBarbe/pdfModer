import {IPdfInfo} from "../state/models";

export const getEmpty = (): IPdfInfo => {
    return {data: new Uint8Array(0), pageCount: 0};
}

export const isEmpty = (pdf: IPdfInfo) => {
    return pdf.pageCount === 0;
}