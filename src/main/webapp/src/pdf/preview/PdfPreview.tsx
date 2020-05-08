import React, {PureComponent} from "react";
import {Document, Page} from "react-pdf";

interface IPdfPreviewProps {
    pdf: Uint8Array;
}

export default class PdfPreview extends PureComponent<IPdfPreviewProps> {

    public render() {
        return (
            <React.Fragment>
                preview
                {this.props.pdf && <Document file={{data: this.props.pdf}}>
                    <Page pageNumber={1}/>
                </Document>}
            </React.Fragment>
        )
    }
}