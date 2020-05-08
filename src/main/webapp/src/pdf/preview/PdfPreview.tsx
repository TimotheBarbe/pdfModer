import React, {PureComponent} from "react";
import {Document, Page} from "react-pdf";
import {isEmpty} from "../../utils/Uint8ArrayUtils";

interface IPdfPreviewProps {
    pdf: Uint8Array;
}

export default class PdfPreview extends PureComponent<IPdfPreviewProps> {

    public render() {
        return (
            <React.Fragment>
                preview
                {!isEmpty(this.props.pdf) && <Document file={{data: this.props.pdf}} >
                    <Page pageNumber={1} height={500} width={400}/>
                </Document>}
            </React.Fragment>
        )
    }
}