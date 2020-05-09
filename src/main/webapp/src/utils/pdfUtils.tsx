import {PDFDocument} from "pdf-lib";
import {IPdfInfo} from "../state/models";


export async function insertPage(state: IPdfInfo, index: number): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    doc.insertPage(index);
    let data = await doc.save();
    return {data, pageCount: state.pageCount + 1};
}