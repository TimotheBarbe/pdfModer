import React, {PureComponent} from "react";
import {IPdfInfo} from "../../state/models";
import {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {createBlank} from "../../utils/pdfUtils";

interface IPdfCreateBlankDocProps {
    load: (data: IPdfInfo) => void;
}

export default class PdfCreateBlankDoc extends PureComponent<IPdfCreateBlankDocProps> {

    private createNew = () => {
        createBlank().then(this.props.load)
    }

    public render() {
        return (
            <Button variant="outlined" color="primary"
                    style={{margin: "0 10px 10px 0"}} onClick={this.createNew}
                    startIcon={<AddIcon/>}>
                Create blank PDF
            </Button>
        )
    }
}