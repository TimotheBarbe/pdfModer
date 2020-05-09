import React, {PureComponent} from "react";
import {Button} from "@material-ui/core";
import {insertPage} from "../../utils/pdfUtils";
import {IPdfInfo} from "../../state/models";

interface IPdfInsertProps {
    pdf: IPdfInfo;
    load: (data: IPdfInfo) => void;
    index: number;
}

export default class PdfInsert extends PureComponent<IPdfInsertProps> {

    private insert = () => {
        insertPage(this.props.pdf, this.props.index).then(this.props.load)
    }

    public render() {
        return (
            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={this.insert}
                        style={{margin: "0 10px 10px 0"}}>
                    Insert
                </Button>
            </React.Fragment>
        )
    }
}