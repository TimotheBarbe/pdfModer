import * as React from "react";
import {AppBar, createStyles, Grid, Paper, Theme, Toolbar, Typography, withStyles, WithStyles} from "@material-ui/core";

const styles = (theme: Theme) =>
    createStyles({
        content: {
            height: "calc(100%-64px)",
            padding: 40,
        }
    })

class Scaffolder extends React.PureComponent<WithStyles> {

    public render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar elevation={0} position={"static"}>
                    <Toolbar>
                        <Typography variant="h6">
                            pdfModer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Scaffolder);
