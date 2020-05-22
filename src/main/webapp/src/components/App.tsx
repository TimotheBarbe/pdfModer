import "./App.css";

import * as React from "react";
import {CssBaseline, ExpansionPanel, ExpansionPanelDetails, Grid, Typography} from "@material-ui/core";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PdfPreviewContainer from "../pdf/preview/PdfPreviewContainer";
import PdfDownloadContainer from "../pdf/download/PdfDownloadContainer";
import Scaffolder from "./Scaffolder";
import PdfInsertContainer from "../pdf/modify/PdfInsertPageContainer";

const theme = createMuiTheme({
    palette: {
        primary: {main: "#ee3f3f"},
        secondary: {main: "#a09f9f"},
        // type: 'dark',
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
                            <PdfDownloadContainer/>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Insert page</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <PdfInsertContainer index={1}/>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <PdfPreviewContainer/>
                        </Grid>
                    </Grid>
                </Scaffolder>
            </MuiThemeProvider>
        );
    }
}

export default App;