import React, {PureComponent} from "react";
import Dropzone from "react-dropzone";
import {PDFDocument} from "pdf-lib";
import {IPdfInfo} from "../../state/models";
import {WithStyles} from "@material-ui/core";
import {loadAndMerge, loadPdf, mergePdf} from "../../utils/pdfUtils";

interface IPdfLoaderProps extends WithStyles {
    load: (data: IPdfInfo) => void;
    pdf: IPdfInfo;
}

export default class PdfLoader extends PureComponent<IPdfLoaderProps> {

    private read = (files: File[]) => {
        const file = files[0]
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = reader.result
            if (binaryStr != null) loadAndMerge(binaryStr, this.props.pdf).then(r => this.props.load(r))
        }
        reader.readAsArrayBuffer(file)
    };

    public render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Dropzone onDrop={acceptedFiles => this.read(acceptedFiles)} accept={".pdf"} multiple={false}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps({className: classes.dropzone})}>
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