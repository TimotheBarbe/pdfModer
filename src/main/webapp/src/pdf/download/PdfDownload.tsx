import React, {PureComponent} from "react";
import download from "downloadjs";

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
                <p onClick={this.download}>Download</p>
            </React.Fragment>
        )
    }
}