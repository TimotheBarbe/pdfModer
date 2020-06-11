import React, {ChangeEvent, Component} from "react";
import {Button, TextField} from "@material-ui/core";
import {removePage, removePages} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import {isEmpty} from "../../../utils/Uint8ArrayUtils";
import DeleteIcon from '@material-ui/icons/Delete';
import {getInterval, isInterval} from "../../../utils/stringUtils";
import {setString} from "../../../utils/formUtils";


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

    private isDisabled = () => {
        const isNotValidNumber = isNaN(+this.props.remove) || +this.props.remove < 1;
        return isEmpty(this.props.pdf) || (isNotValidNumber && !isInterval(this.props.remove))
    }

    public render() {
        const {pdf, remove, setRemove} = this.props;
        return (
            <React.Fragment>
                <TextField
                    label={"Pages to delete"}
                    type={"text"}
                    value={remove}
                    onChange={setString(setRemove)}
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