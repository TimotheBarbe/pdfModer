export interface IPdfInfo {
    data: Uint8Array;
    pageCount: number;
    selectedPage: number;
}

export interface IStoreState {
    pdf: IPdfInfo;
}
