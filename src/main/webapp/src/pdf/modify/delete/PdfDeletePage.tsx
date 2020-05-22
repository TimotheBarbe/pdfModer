import React, {Component, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {removePage} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import DeleteIcon from '@material-ui/icons/Delete';


interface IPdfDeleteProps {
    pdf: IPdfInfo;
    load: (data: IPdfInfo) => void;
}

export default class PdfDeletePage extends Component<IPdfDeleteProps> {


    private remove = () => {
        removePage(this.props.pdf, 0).then(this.props.load)
    }

    public render() {
        return (
            <React.Fragment>
                <TextField
                    label="Pages to delete"
                    type="text"
                    placeholder={"ex: 5-8 or 8"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="outlined" color="primary" onClick={this.remove}
                        style={{margin: "0 10px 10px 0"}} disabled={isEmpty(this.props.pdf)}
                        startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
            </React.Fragment>
        )
    }
}