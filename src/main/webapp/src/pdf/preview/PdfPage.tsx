import React, {PureComponent} from "react";
import {Page} from "react-pdf";
import {IconButton, WithStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {IPdfInfo} from "../../state/models";
import {removePage} from "../../utils/pdfUtils";

interface IPdfPageProps extends WithStyles {
    selectPage: (index: number) => void;
    load: (data: IPdfInfo) => void;
    pdf: IPdfInfo;

    index: number;
    selected: boolean;
    scale: number;
}


export default class PdfPage extends PureComponent<IPdfPageProps> {
    private selectPage = (event: React.MouseEvent<any>) => this.props.selectPage(this.props.index)
    private removePage = (event: React.MouseEvent<any>) => removePage(this.props.pdf, this.props.index).then(this.props.load)

    public render() {
        const {index, classes, scale, selected} = this.props;

        return (
            <div onClick={this.selectPage}>
                <Page className={selected ? classes.selected : ""} width={420} height={594} scale={scale}
                      pageIndex={index}/>
                {index}
                <IconButton aria-label="delete" className={classes.margin} onClick={this.removePage}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </div>
        )
    }
}