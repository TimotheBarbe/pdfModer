import React, {PureComponent} from "react";
import {Document, Page} from "react-pdf";
import {isEmpty} from "../../utils/Uint8ArrayUtils";
import PdfLoaderContainer from "../loader/PdfLoaderContainer";
import {IPdfInfo} from "../../state/models";
import {WithStyles} from "@material-ui/core";

interface IPdfPreviewProps extends WithStyles {
    pdf: IPdfInfo;
}


export default class PdfPreview extends PureComponent<IPdfPreviewProps> {

    public render() {
        const {pdf, classes} = this.props;
        const noPdf = isEmpty(pdf);
        const indexes = Array.from(Array(pdf.pageCount).keys())

        return (
            <React.Fragment>
                {noPdf && <PdfLoaderContainer/>}
                {!noPdf && <Document file={{data: pdf.data}}>
                    {indexes.map((index) => <Page width={611} className={classes.page} pageIndex={index}/>)}
                </Document>}
            </React.Fragment>
        )
    }
}