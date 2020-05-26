import React, {ChangeEvent, Component} from "react";
import {Button, TextField} from "@material-ui/core";
import {removePage, removePages} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import DeleteIcon from '@material-ui/icons/Delete';
import {getInterval, isInterval} from "../../../utils/stringUtils";


interface IPdfDeleteProps {
    pdf: IPdfInfo;
    remove: string;

    load: (data: IPdfInfo) => void;
    setRemove: (data: string) => void;
}

export default class PdfDeletePage extends Component<IPdfDeleteProps> {

    private remove = () => {
        const pos = this.props.remove;
        if (!isNaN(+pos)) {
            const position = +pos - 1
            removePage(this.props.pdf, position).then(this.props.load)
        } else if (isInterval(pos)) {
            const interval = getInterval(pos);
            const toRemove = Array.from(Array(interval[1]).keys()).slice(interval[0] - 1);
            removePages(this.props.pdf, toRemove).then(this.props.load)
        }
    }

    private setRemove = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        this.props.setRemove(event.target.value)

    private isDisabled = () => isEmpty(this.props.pdf) || (isNaN(+this.props.remove) && !isInterval(this.props.remove))

    public render() {
        const {pdf, remove} = this.props;
        return (
            <React.Fragment>
                <TextField
                    label={"Pages to delete"}
                    type={"text"}
                    value={remove}
                    onChange={this.setRemove}
                    placeholder={"ex: 5-8 or 8"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="outlined" color="primary" onClick={this.remove}
                        style={{margin: "0 10px 10px 0"}} disabled={this.isDisabled()}
                        startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
            </React.Fragment>
        )
    }
}