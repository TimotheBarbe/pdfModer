import React, {ChangeEvent, PureComponent} from "react";
import {Button, TextField} from "@material-ui/core";
import {insertPage} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import PlusIcon from '@material-ui/icons/';
import AddIcon from '@material-ui/icons/Add';

interface IPdfInsertProps {
    pdf: IPdfInfo;
    insert: string;

    load: (data: IPdfInfo) => void;
    setInsert: (data: string) => void;
}

export default class PdfInsertPage extends PureComponent<IPdfInsertProps> {

    private insert = () => {
        const pos = this.props.insert;
        if (!isNaN(+pos)) {
            insertPage(this.props.pdf, +pos - 1).then(this.props.load)
        }
    }

    private setInsert = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.props.setInsert(event.target.value)
    }

    public render() {
        const {insert} = this.props;
        return (
            <React.Fragment>
                <TextField
                    label="Before page"
                    type="text"
                    value={insert}
                    onChange={this.setInsert}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="outlined" color="primary" onClick={this.insert}
                        style={{margin: "0 10px 10px 0"}} disabled={isEmpty(this.props.pdf) || isNaN(+insert)}
                        startIcon={<AddIcon/>}>
                    Insert new page
                </Button>
            </React.Fragment>
        )
    }
}