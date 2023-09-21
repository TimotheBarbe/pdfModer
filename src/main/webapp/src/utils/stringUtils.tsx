import {rgb} from "pdf-lib";
import {ImageFormat} from "../state/models";

const intervalExp = new RegExp('^([0-9]+)-([0-9]+)$');

export const isInterval = (value: string) => {
    return intervalExp.test(value)
}

export const getInterval = (value: string) => {
    let exec = intervalExp.exec(value) as RegExpExecArray;
    return [+exec[1], +exec[2]]
}

export const toRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    function getValue(v: string) {
        return parseInt(v, 16) / 255;
    }

    return result ? rgb(getValue(result[1]), getValue(result[2]), getValue(result[3])) : rgb(0, 0, 0);
}

export const getImageFormat = (type: string): ImageFormat => {
    if (type.endsWith("png")) return "png"
    if (type.endsWith("jpg")) return "jpg"
    if (type.endsWith("jpeg")) return "jpg"
    return "unknown"
}