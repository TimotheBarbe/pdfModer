export interface IPdfInfo {
    data: Uint8Array;
    pageCount: number;
    selectedPage: number;
}

export interface ITextOption {
    color: string;
//    font
//    lineHeight
//    maxWidth
    rotate: number;
    size: number;
    x: number;
    y: number;
    text: string;
}

export interface IForm {
    remove: string;
    insert: string;
    textOption: ITextOption;
}

export interface IStoreState {
    pdf: IPdfInfo;
    form: IForm;
}

