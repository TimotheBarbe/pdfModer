import React, {PureComponent} from "react";
import {Page} from "react-pdf";
import {WithStyles} from "@material-ui/core";

interface IPdfPageProps extends WithStyles {
    selectPage: (index: number) => void;

    index: number;
    selected: boolean;
    scale: number;
}


export default class PdfPage extends PureComponent<IPdfPageProps> {
    private selectPage = (event: React.MouseEvent<any>) => this.props.selectPage(this.props.index)

    public render() {
        const {index, classes, scale, selected} = this.props;

        return (
            <div onClick={this.selectPage}>
                <Page className={selected ? classes.selected : ""} width={420} height={594} scale={scale}
                      pageIndex={index}/>
                {index}
            </div>
        )
    }
}