import {IPdfInfo} from "../state/models";

const intervalExp = new RegExp('^([0-9]+)-([0-9]+)$');

export const isInterval = (value: string) => {
    return intervalExp.test(value)
}

export const getInterval = (value: string) => {
    let exec = intervalExp.exec(value) as RegExpExecArray;
    return [+exec[1], +exec[2]]
}