export interface IPdfInfo {
    data: Uint8Array;
    pageCount: number;
    selectedPage: number;
}

export interface IForm {
    remove: string;
    insert: string;
}

export interface IStoreState {
    pdf: IPdfInfo;
    form: IForm;
}
