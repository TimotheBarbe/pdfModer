import React, {PureComponent} from "react";
import {Document, Page} from "react-pdf";
import Dropzone from "react-dropzone";
import {PDFDocument} from "pdf-lib";

interface IPdfLoaderProps {
    loadPdf: (data: Uint8Array) => void
}

export default class PdfLoader extends PureComponent<IPdfLoaderProps> {

    async loadPdf(existingPdfBytes: string | ArrayBuffer) {
        const doc = await PDFDocument.load(existingPdfBytes)
        return await doc.save()
    }

    private read = (files: File[]) => {
        const file = files[0]
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = reader.result
            if (binaryStr != null) this.loadPdf(binaryStr).then(r => this.props.loadPdf(r))
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