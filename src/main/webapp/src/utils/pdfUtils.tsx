import {degrees, PDFDocument} from "pdf-lib";
import {IPdfInfo, IRectangleOption, ITextOption} from "../state/models";
import update from 'immutability-helper';
import {isEmpty} from "./Uint8ArrayUtils";
import {toRgb} from "./stringUtils";

export async function createBlank(): Promise<IPdfInfo> {
    const doc = await PDFDocument.create()
    doc.addPage()
    const data = await doc.save();
    return {data, pageCount: 1, selectedPage: 0} as IPdfInfo
}

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

export async function movePage(state: IPdfInfo, from: number, to: number): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    const page = doc.getPage(from);
    if (from < to) {
        doc.removePage(from);
        doc.insertPage(to, page);
    } else {
        doc.insertPage(to, page);
        doc.removePage(from + 1);
    }
    const data = await doc.save();
    return update(state, {data: {$set: data}}) as IPdfInfo
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

export async function drawRectangle(state: IPdfInfo, option: IRectangleOption): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    const page = doc.getPage(state.selectedPage);
    const {rotate, x, y, width, height, color, opacity} = option
    page.drawRectangle({x, y, rotate: degrees(rotate), color: toRgb(color), width, height, borderWidth: 0, opacity})
    const data = await doc.save();
    return update(state, {data: {$set: data}})
}

export async function rotatePage(state: IPdfInfo, angle: number): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    const page = doc.getPage(state.selectedPage);
    page.setRotation(degrees(page.getRotation().angle + angle))
    const data = await doc.save();
    return update(state, {data: {$set: data}})
}