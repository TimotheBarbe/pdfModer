import "./App.css";

import * as React from "react";
import {CssBaseline, Accordion, AccordionDetails, Grid, Typography} from "@material-ui/core";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PdfPreviewContainer from "../pdf/preview/PdfPreviewContainer";
import PdfDownloadContainer from "../pdf/download/PdfDownloadContainer";
import Scaffolder from "./Scaffolder";
import PdfInsertPageContainer from "../pdf/modify/insert/PdfInsertPageContainer";
import PdfDeletePageContainer from "../pdf/modify/delete/PdfDeletePageContainer";
import PdfInsertTextContainer from "../pdf/modify/text/PdfInsertTextContainer";
import PdfRotationPageContainer from "../pdf/modify/rotation/PdfRotationPageContainer";
import PdfInsertRectangleContainer from "../pdf/modify/rectangle/PdfInsertRectangleContainer";
import PdfMovePageContainer from "../pdf/modify/move/PdfMovePageContainer";
import PdfInsertImageContainer from "../pdf/modify/image/PdfInsertImageContainer";

const theme = createTheme({
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
                        <Grid item={true} xs={3}>
                            <PdfDownloadContainer/>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Insert page</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfInsertPageContainer/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Move</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfMovePageContainer/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Delete</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfDeletePageContainer/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Add text</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfInsertTextContainer/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Add image</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfInsertImageContainer/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Add rectangle</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfInsertRectangleContainer/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Rotate</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <PdfRotationPageContainer/>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item={true} xs={9}>
                            <PdfPreviewContainer/>
                        </Grid>
                    </Grid>
                </Scaffolder>
            </MuiThemeProvider>
        );
    }
}

export default App;
