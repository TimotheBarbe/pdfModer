import React, {PureComponent} from "react";
import {Page} from "react-pdf";
import {IconButton, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {IPdfInfo} from "../../state/models";
import {removePage} from "../../utils/pdfUtils";

interface IPdfPageProps extends WithStyles {
    selectPage: (index: number) => void;
    load: (data: IPdfInfo) => void;

    pageCount: number;
    pdf: IPdfInfo;

    index: number;
    selected: boolean;
    scale: number;
}


export default class PdfPage extends PureComponent<IPdfPageProps> {
    private selectPage = (event: React.MouseEvent<any>) => this.props.selectPage(this.props.index)
    private removePage = (event: React.MouseEvent<any>) => removePage(this.props.pdf, this.props.index)
        .then(this.props.load)

    public render() {
        const {index, classes, scale, selected, pageCount} = this.props;

        return (
            <div onClick={this.selectPage} className={selected ? classes.selected : classes.main}>
                <div className={classes.top}>
                    <div className={classes.center}>
                        {(index + 1).toLocaleString()}/{pageCount.toLocaleString()}
                    </div>
                    <IconButton aria-label="delete" className={classes.right} onClick={this.removePage}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
                <Page className={classes.page} scale={scale} width={595}
                      pageIndex={index} renderAnnotationLayer={false}/>
            </div>
        )
    }
}