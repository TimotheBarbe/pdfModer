import React, {PureComponent} from "react";
import Dropzone from "react-dropzone";
import {IPdfInfo} from "../../state/models";
import {WithStyles} from "@material-ui/core";
import {loadAndMerge} from "../../utils/pdfUtils";
import {loadFile} from "../../utils/fileUtils";

interface IPdfLoaderProps extends WithStyles {
    load: (data: IPdfInfo) => void;
    pdf: IPdfInfo;
}

export default class PdfLoader extends PureComponent<IPdfLoaderProps> {

    private read = (files: File[]) => {
        const onload = (reader: FileReader) => {
            const binaryStr = reader.result
            if (binaryStr != null) {
                loadAndMerge(binaryStr, this.props.pdf).then(r => this.props.load(r))
            }
        }
        const [file] = files
        loadFile(onload, file)
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
                                <p>Drag 'n' drop your PDF here, or click to select a file</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </React.Fragment>
        )
    }
}