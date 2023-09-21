export const loadFile = (onload: (reader: FileReader) => void, file: File): void => {
    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => onload(reader as FileReader)
    reader.readAsArrayBuffer(file)
}