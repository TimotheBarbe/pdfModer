import React, {PureComponent} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {drawText} from "../../../utils/pdfUtils";
import {IPdfInfo, ITextOption} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import AddIcon from '@material-ui/icons/Add';
import {setNumber, setString} from "../../../utils/formUtils";

interface IPdfInsertTextProps extends ITextOption {
    pdf: IPdfInfo;

    load: (data: IPdfInfo) => void;
    setTextColor: (data: string) => void;
    setTextY: (data: number) => void;
    setTextX: (data: number) => void;
    setTextSize: (data: number) => void;
    setTextRotate: (data: number) => void;
    setText: (data: string) => void;
}

export default class PdfInsertText extends PureComponent<IPdfInsertTextProps> {

    private insert = () => {
        drawText(this.props.pdf, this.props).then(this.props.load)
    }

    public render() {
        const {
            color, setTextColor, y, setTextY, x, setTextX, size, setTextSize, rotate, setTextRotate,
            text, setText
        } = this.props;
        return (
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={12}>
                    <TextField
                        label="Text"
                        type="text"
                        placeholder={"ex: draw some text"}
                        value={text}
                        onChange={setString(setText)}
                        InputLabelProps={{shrink: true}}
                        multiline={true}
                        rows={4}
                        variant={"outlined"}
                        fullWidth={true}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Y"
                        type="number"
                        placeholder={"ex: 200"}
                        value={y}
                        onChange={setNumber(setTextY)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="X"
                        type="number"
                        placeholder={"ex: 200"}
                        value={x}
                        onChange={setNumber(setTextX)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Size"
                        type="number"
                        placeholder={"ex: 14"}
                        value={size}
                        onChange={setNumber(setTextSize)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Rotate"
                        type="number"
                        placeholder={"ex: 14"}
                        value={rotate}
                        onChange={setNumber(setTextRotate)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Color"
                        type="text"
                        placeholder={"ex: #000000"}
                        value={color}
                        onChange={setString(setTextColor)}
                        InputLabelProps={{shrink: true}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <Button variant="outlined" color="primary" onClick={this.insert}
                            style={{margin: "0 10px 10px 0"}} disabled={isEmpty(this.props.pdf)}
                            startIcon={<AddIcon/>}>
                        Draw text
                    </Button>
                </Grid>
            </Grid>
        )
    }
}