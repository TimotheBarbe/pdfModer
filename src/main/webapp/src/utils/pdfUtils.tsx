import {PDFDocument} from "pdf-lib";


export async function insertPage(state: Uint8Array, index: number) {
    const doc = await PDFDocument.load(state);
    doc.insertPage(index);
    return doc.save();
}