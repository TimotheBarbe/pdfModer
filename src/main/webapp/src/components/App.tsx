import * as React from "react";
import PdfPreviewContainer from "../pdf/preview/PdfPreviewContainer";
import PdfLoaderContainer from "../pdf/loader/PdfLoaderContainer";
import PdfDownloadContainer from "../pdf/download/PdfDownloadContainer";


class App extends React.PureComponent {

    public render() {
        return (
            <React.Fragment>
                <PdfLoaderContainer/>
                <PdfDownloadContainer/>
                <PdfPreviewContainer/>
            </React.Fragment>
        );
    }
}

export default App;
