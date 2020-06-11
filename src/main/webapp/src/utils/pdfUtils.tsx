import {degrees, PDFDocument} from "pdf-lib";
import {IPdfInfo, ITextOption} from "../state/models";
import update from 'immutability-helper';
import {isEmpty} from "./Uint8ArrayUtils";
import {toRgb} from "./stringUtils";

export async function insertPage(state: IPdfInfo, index: number): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    doc.insertPage(index);
    const data = await doc.save();
    return update(state, {data: {$set: data}, pageCount: {$set: state.pageCount + 1}, selectedPage: {$set: index}})
}

export async function removePage(state: IPdfInfo, index: number): Promise<IPdfInfo> {
    return removePages(state, [index]);
}

/**
 * @param indexes must be ordered !
 */
export async function removePages(state: IPdfInfo, indexes: number[]): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    for (const index of indexes.reverse()) {
        doc.removePage(index);
    }
    const data = await doc.save();
    return {data, pageCount: state.pageCount - indexes.length, selectedPage: state.selectedPage}
}

export async function loadPdf(toLoad: string | ArrayBuffer): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(toLoad)
    const pageCount = doc.getPageCount();
    const data = await doc.save();
    return {data, pageCount, selectedPage: 0}
}

export async function mergePdf(start: IPdfInfo, end: IPdfInfo): Promise<IPdfInfo> {
    if (isEmpty(start)) return end;
    const startDoc = await PDFDocument.load(start.data);
    const endDoc = await PDFDocument.load(end.data);
    const contentPages = await startDoc.copyPages(endDoc, endDoc.getPageIndices());
    for (const page of contentPages) {
        startDoc.addPage(page);
    }
    const data = await startDoc.save();
    return {data, pageCount: start.pageCount + end.pageCount, selectedPage: start.selectedPage}
}

export async function loadAndMerge(toLoad: string | ArrayBuffer, start: IPdfInfo): Promise<IPdfInfo> {
    return loadPdf(toLoad).then(end => mergePdf(start, end))
}

export async function drawText(state: IPdfInfo, option: ITextOption): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    const page = doc.getPage(state.selectedPage);
    const {color, rotate, size, x, y, text} = option
    page.drawText(text, {x, y, rotate: degrees(rotate), size, color: toRgb(color), lineHeight: size})
    const data = await doc.save();
    return update(state, {data: {$set: data}})
}
