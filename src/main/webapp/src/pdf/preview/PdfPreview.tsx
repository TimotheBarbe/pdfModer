import React, {PureComponent} from "react";
import {Document} from "react-pdf";
import {isEmpty} from "../../utils/Uint8ArrayUtils";
import PdfLoaderContainer from "../loader/PdfLoaderContainer";
import {IPdfInfo} from "../../state/models";
import {Grid, IconButton, WithStyles} from "@material-ui/core";
import PdfPageContainer from "./PdfPageContainer";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface IPdfPreviewProps extends WithStyles {
    pdf: IPdfInfo;
    selectedPage: number;

    selectPage: (index: number) => void;
}


export default class PdfPreview extends PureComponent<IPdfPreviewProps> {
    private selectPage = (index: number) => (event: React.MouseEvent<any>) => this.props.selectPage(index)

    public render() {
        const {pdf, selectedPage, classes} = this.props;
        const noPdf = isEmpty(pdf);

        const before = Array.from(Array(pdf.selectedPage).keys()).slice(-2)
        const after = Array.from(Array(pdf.pageCount).keys()).slice(selectedPage, selectedPage + 3)

        return (
            <React.Fragment>
                {noPdf && <PdfLoaderContainer/>}
                {!noPdf && <Document file={{data: pdf.data}}>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={2}>
                            <IconButton aria-label="previous" disabled={selectedPage <= 0}
                                        onClick={this.selectPage(selectedPage - 1)}>
                                <ArrowBackIcon fontSize="small"/>
                            </IconButton>
                            {before.map((index) => (
                                    index !== selectedPage &&
                                    <PdfPageContainer key={index} selected={false} index={index} scale={0.2}/>
                                )
                            )}
                        </Grid>
                        <Grid item={true} xs={8}>
                            <div className={classes.content}>
                                <PdfPageContainer selected={true} index={selectedPage} scale={1}/>
                            </div>
                        </Grid>
                        <Grid item={true} xs={2}>
                            <IconButton aria-label="next" disabled={selectedPage >= pdf.pageCount - 1}
                                        onClick={this.selectPage(selectedPage + 1)}>
                                <ArrowForwardIcon fontSize="small"/>
                            </IconButton>
                            {after.map((index) => (
                                    index !== selectedPage &&
                                    <PdfPageContainer key={index} selected={false} index={index} scale={0.2}/>
                                )
                            )}
                        </Grid>
                    </Grid>
                </Document>}
            </React.Fragment>
        )
    }
}