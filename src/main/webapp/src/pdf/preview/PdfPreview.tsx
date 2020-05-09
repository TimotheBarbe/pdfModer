import React, {PureComponent} from "react";
import {Document, Page} from "react-pdf";
import {isEmpty} from "../../utils/Uint8ArrayUtils";
import PdfLoaderContainer from "../loader/PdfLoaderContainer";

interface IPdfPreviewProps {
    pdf: Uint8Array;
}

export default class PdfPreview extends PureComponent<IPdfPreviewProps> {

    public render() {
        const noPdf = isEmpty(this.props.pdf);
        return (
            <React.Fragment>
                {noPdf && <PdfLoaderContainer/>}
                {!noPdf && <Document file={{data: this.props.pdf}}>
                    <Page pageNumber={1}/>
                </Document>}
            </React.Fragment>
        )
    }
}