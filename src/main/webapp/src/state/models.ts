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

export interface IRectangleOption {
    x: number,
    y: number,
    width: number,
    height: number,
    rotate: number,
    // borderWidth: number,
    // borderColor: grayscale(0.5),
    color: string,
    opacity: number,
    // borderOpacity: 0.75,
}


export interface IForm {
    remove: string;
    insert: string;
    textOption: ITextOption;
    rectangleOption: IRectangleOption;
}

export interface IPdfWithVersion {
    versions: IPdfInfo[];
    position: number;
}

export type View = "global" | "zoom";

export interface IDisplay {
    view: View
}

export interface IStoreState {
    pdf: IPdfWithVersion;
    form: IForm;
    display: IDisplay
}

