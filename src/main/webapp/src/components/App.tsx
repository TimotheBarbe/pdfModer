import "./App.css";

import * as React from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import PdfPreviewContainer from "../pdf/preview/PdfPreviewContainer";
import PdfLoaderContainer from "../pdf/loader/PdfLoaderContainer";
import PdfDownloadContainer from "../pdf/download/PdfDownloadContainer";
import Scaffolder from "./Scaffolder";

const theme = createMuiTheme({
    palette: {
        primary: {main: "#ee3f3f"},
        secondary: {main: "#a09f9f"}
        // type: 'dark'
    }
});

class App extends React.PureComponent {

    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Scaffolder>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={4}>
                            <PdfLoaderContainer/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <PdfPreviewContainer/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <PdfDownloadContainer/>
                        </Grid>
                    </Grid>
                </Scaffolder>
            </MuiThemeProvider>
        );
    }
}

export default App;
