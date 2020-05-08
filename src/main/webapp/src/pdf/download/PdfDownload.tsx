import React, {PureComponent} from "react";
import download from "downloadjs";
import {Button} from "@material-ui/core";
import {isEmpty} from "../../utils/Uint8ArrayUtils";

interface IPdfPreviewProps {
    pdf: Uint8Array;
}

export default class PdfDownload extends PureComponent<IPdfPreviewProps> {

    private download = () => {
        download(this.props.pdf, "download.pdf", "application/pdf");
    }

    public render() {
        return (
            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={this.download} style={{margin: "0 10px 10px 0"}}
                        disabled={isEmpty(this.props.pdf)}>
                    Download
                </Button>
            </React.Fragment>
        )
    }
}