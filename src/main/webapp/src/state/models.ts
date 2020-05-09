export interface IPdfInfo {
    data: Uint8Array;
    pageCount: number
}

export interface IStoreState {
    pdf: IPdfInfo;
}
