export const getEmpty = () => {
    return new Uint8Array(0);
}

export const isEmpty = (bytes: Uint8Array) => {
    return bytes.byteLength === 0;
}