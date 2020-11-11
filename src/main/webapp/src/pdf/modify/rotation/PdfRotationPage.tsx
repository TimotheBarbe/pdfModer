import React, {PureComponent} from "react";
import {Button, Grid} from "@material-ui/core";
import {rotatePage} from "../../../utils/pdfUtils";
import {IPdfInfo} from "../../../state/models";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import {isEmpty} from "../../../utils/Uint8ArrayUtils";

interface IPdfRotationProps {
    pdf: IPdfInfo;

    load: (data: IPdfInfo) => void;
}

export default class PdfRotationPage extends PureComponent<IPdfRotationProps> {

    private rotate = (angle: number) => () => {
        rotatePage(this.props.pdf, angle).then(this.props.load)
    }

    private isDisabled = () => {
        return isEmpty(this.props.pdf);
    }

    public render() {
        return (
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={12}>
                    <Button variant="outlined" color="primary" onClick={this.rotate(-90)}
                            style={{margin: "0 10px 10px 0"}} disabled={this.isDisabled()}
                            startIcon={<RotateLeftIcon/>}>
                        rotate left
                    </Button>
                    <Button variant="outlined" color="primary" onClick={this.rotate(90)}
                            style={{margin: "0 10px 10px 0"}} disabled={this.isDisabled()}
                            endIcon={<RotateRightIcon/>}>
                        rotate right
                    </Button>
                </Grid>
            </Grid>
        )
    }
}