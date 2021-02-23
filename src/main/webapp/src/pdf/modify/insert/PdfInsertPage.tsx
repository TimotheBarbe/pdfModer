import React, {PureComponent} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {insertPage} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import AddIcon from '@material-ui/icons/Add';
import PdfLoaderContainer from "../../loader/PdfLoaderContainer";
import {setString} from "../../../utils/formUtils";

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

    private isDisabled = () => {
        const isNotValidNumber = isNaN(+this.props.insert) || +this.props.insert < 1;
        return isEmpty(this.props.pdf) || (isNotValidNumber)
    }

    public render() {
        const {insert, setInsert} = this.props;
        return (
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={12}>
                    <TextField
                        label="Before page"
                        type="text"
                        value={insert}
                        onChange={setString(setInsert)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant="outlined" color="primary" onClick={this.insert}
                            style={{margin: "0 10px 10px 0"}} disabled={this.isDisabled()}
                            startIcon={<AddIcon/>}>
                        new page
                    </Button>
                </Grid>
                <Grid item={true} xs={12}>
                    Insert doc
                    <PdfLoaderContainer/>
                </Grid>
            </Grid>
        )
    }
}