import {PDFDocument} from "pdf-lib";
import {IPdfInfo} from "../state/models";
import update from 'immutability-helper';

export async function insertPage(state: IPdfInfo, index: number): Promise<IPdfInfo> {
    const doc = await PDFDocument.load(state.data);
    doc.insertPage(index);
    let data = await doc.save();
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
    for (let index of indexes.reverse()) {
        doc.removePage(index);
    }
    let data = await doc.save();
    return update(state, {data: {$set: data}, pageCount: {$set: state.pageCount - (indexes.length)}})
}
