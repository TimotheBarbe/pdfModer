import React, {PureComponent} from "react";
import Dropzone from "react-dropzone";
import {PDFDocument} from "pdf-lib";
import {IPdfInfo} from "../../state/models";

interface IPdfLoaderProps {
    load: (data: IPdfInfo) => void
}

export default class PdfLoader extends PureComponent<IPdfLoaderProps> {

    async toInfo(existingPdfBytes: string | ArrayBuffer): Promise<IPdfInfo> {
        const doc = await PDFDocument.load(existingPdfBytes)
        let pageCount = doc.getPageCount();
        const data = await doc.save();
        return {data, pageCount}
    }

    private read = (files: File[]) => {
        const file = files[0]
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = reader.result
            if (binaryStr != null) this.toInfo(binaryStr).then(r => this.props.load(r))
        }
        reader.readAsArrayBuffer(file)
    };

    public render() {
        return (
            <React.Fragment>
                loader
                <Dropzone onDrop={acceptedFiles => this.read(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </React.Fragment>
        )
    }
}