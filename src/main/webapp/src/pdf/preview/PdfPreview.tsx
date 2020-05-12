import React, {PureComponent} from "react";
import {Document, Outline, Page} from "react-pdf";
import {isEmpty} from "../../utils/Uint8ArrayUtils";
import PdfLoaderContainer from "../loader/PdfLoaderContainer";
import {IPdfInfo} from "../../state/models";
import {WithStyles} from "@material-ui/core";

interface IPdfPreviewProps extends WithStyles {
    pdf: IPdfInfo;
    selectedPage: number;
    selectPage: (index: number) => void;

    width: number;
    height: number;
}


export default class PdfPreview extends PureComponent<IPdfPreviewProps> {
    private selectPage = (index: number) => (event: React.MouseEvent<any>) => this.props.selectPage(index)

    public render() {
        const {pdf, classes, width, height, selectedPage, selectPage} = this.props;
        const noPdf = isEmpty(pdf);
        const indexes = Array.from(Array(pdf.pageCount).keys())

        return (
            <React.Fragment>
                {noPdf && <PdfLoaderContainer/>}
                {!noPdf && <Document file={{data: pdf.data}}>
                    <div><Page width={width} height={height} className={classes.page} pageIndex={selectedPage}/></div>
                    {indexes.map((index) => (
                        index !== selectedPage &&
                        <div onClick={this.selectPage(index)}><Page width={width} height={height} scale={0.5}
                                                                    pageIndex={index}/></div>)
                    )}
                </Document>}
            </React.Fragment>
        )
    }
}