import React, {PureComponent} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {IPdfInfo, IRectangleOption} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import AddIcon from '@material-ui/icons/Add';
import {setNumber, setString} from "../../../utils/formUtils";
import {drawRectangle} from "../../../utils/pdfUtils";

interface IPdfInsertRectangleProps extends IRectangleOption {
    pdf: IPdfInfo;
    load: (data: IPdfInfo) => void;
    setRectangleRotate: (data: number) => void;
    setRectangleY: (data: number) => void;
    setRectangleX: (data: number) => void;
    setRectangleWidth: (data: number) => void;
    setRectangleHeight: (data: number) => void;
    setRectangleColor: (data: string) => void;
    setRectangleOpacity: (data: number) => void;
}

export default class PdfInsertRectangle extends PureComponent<IPdfInsertRectangleProps> {

    private insert = () => {
        drawRectangle(this.props.pdf, this.props).then(this.props.load)
    }

    public render() {
        const {
            y, setRectangleY, x, setRectangleX, width, setRectangleWidth, rotate, setRectangleRotate,
            height, setRectangleHeight, color, setRectangleColor, opacity, setRectangleOpacity
        } = this.props;
        return (
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Y"
                        type="number"
                        placeholder={"ex: 200"}
                        value={y}
                        onChange={setNumber(setRectangleY)}
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
                        onChange={setNumber(setRectangleX)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Width"
                        type="number"
                        placeholder={"ex: 14"}
                        value={width}
                        onChange={setNumber(setRectangleWidth)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={6}>
                    <TextField
                        label="Height"
                        type="number"
                        placeholder={"ex: 14"}
                        value={height}
                        onChange={setNumber(setRectangleHeight)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={4}>
                    <TextField
                        label="Rotate"
                        type="number"
                        placeholder={"ex: 14"}
                        value={rotate}
                        onChange={setNumber(setRectangleRotate)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: "0"}}
                    />
                </Grid>
                <Grid item={true} xs={4}>
                    <TextField
                        label="Opacity"
                        type="number"
                        placeholder={"ex: 0.5"}
                        value={opacity}
                        onChange={setNumber(setRectangleOpacity)}
                        InputLabelProps={{shrink: true}}
                        inputProps={{min: 0, step: 0.1, max: 1}}
                    />
                </Grid>
                <Grid item={true} xs={4}>
                    <input type="color" id="head" name="head" value={color} onChange={setString(setRectangleColor)}/>
                </Grid>
                <Grid item={true} xs={4}>
                    <Button variant="outlined" color="primary" onClick={this.insert}
                            style={{margin: "0 10px 10px 0"}} disabled={isEmpty(this.props.pdf)}
                            startIcon={<AddIcon/>}>
                        Draw Rectangle
                    </Button>
                </Grid>
            </Grid>
        )
    }
}