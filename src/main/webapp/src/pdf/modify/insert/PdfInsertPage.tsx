import React, {PureComponent} from "react";
import {Button, TextField} from "@material-ui/core";
import {insertPage} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";

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
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="outlined" color="primary" onClick={this.insert}
                        style={{margin: "0 10px 10px 0"}} disabled={isEmpty(this.props.pdf)}>
                    Insert new page
                </Button>
            </React.Fragment>
        )
    }
}