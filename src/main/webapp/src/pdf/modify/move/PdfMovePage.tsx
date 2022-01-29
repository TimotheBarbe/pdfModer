import React, {PureComponent} from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {movePage} from "../../../utils/pdfUtils";
import {IMoveOption, IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import {setString} from "../../../utils/formUtils";
import update from "immutability-helper";


interface IPdfMoveProps {
    pdf: IPdfInfo;
    move: IMoveOption;

    load: (data: IPdfInfo) => void;
    setMove: (data: IMoveOption) => void;
}

export default class PdfMovePage extends PureComponent<IPdfMoveProps> {

    private setMoveFrom = (data: string) => {
        const move = update(this.props.move, {from: {$set: data}}) as IMoveOption;
        this.props.setMove(move)
    };

    private setMoveTo = (data: string) => {
        const move = update(this.props.move, {to: {$set: data}}) as IMoveOption;
        this.props.setMove(move)
    };

    private move = () => {
        movePage(this.props.pdf, +this.props.move.from - 1, +this.props.move.to - 1).then(this.props.load)
    }

    private isDisabled = () => {
        const isNotValidNumber = this.isValidNumber(this.props.move.from) || this.isValidNumber(this.props.move.to);
        return isEmpty(this.props.pdf) || isNotValidNumber || this.props.move.from == this.props.move.to
    }

    private isValidNumber(value: string) {
        return isNaN(+value) || +value < 1 || +value > this.props.pdf.pageCount;
    }

    public render() {
        const {pdf, move, setMove} = this.props;
        return (
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={4}>
                    <TextField
                        label={"Move page"}
                        type="number"
                        value={move.from}
                        onChange={setString(this.setMoveFrom)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item={true} xs={4}>
                    <TextField
                        label={"to position"}
                        type="number"
                        value={move.to}
                        onChange={setString(this.setMoveTo)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item={true} xs={4}>
                    <Button variant="outlined" color="primary" onClick={this.move}
                            style={{margin: "0 10px 10px 0"}} disabled={this.isDisabled()}
                            startIcon={<TrendingFlatIcon/>}>
                        Move
                    </Button>
                </Grid>
            </Grid>
        )
    }
}