import React, {PureComponent} from "react";
import {Document} from "react-pdf";
import {isEmpty} from "../../utils/Uint8ArrayUtils";
import PdfLoaderContainer from "../loader/PdfLoaderContainer";
import {IPdfInfo} from "../../state/models";
import {WithStyles} from "@material-ui/core";
import PdfPageContainer from "./PdfPageContainer";

interface IPdfPreviewProps extends WithStyles {
    pdf: IPdfInfo;
    selectedPage: number;
}


export default class PdfPreview extends PureComponent<IPdfPreviewProps> {

    public render() {
        const {pdf, selectedPage} = this.props;
        const noPdf = isEmpty(pdf);
        const indexes = Array.from(Array(pdf.pageCount).keys())

        return (
            <React.Fragment>
                {noPdf && <PdfLoaderContainer/>}
                {!noPdf && <Document file={{data: pdf.data}}>
                    <PdfPageContainer selected={true} index={selectedPage} scale={1}></PdfPageContainer>
                    {indexes.map((index) => (
                            index !== selectedPage &&
                            <PdfPageContainer selected={false} index={index} scale={0.5}></PdfPageContainer>
                        )
                    )}
                </Document>}
            </React.Fragment>
        )
    }
}