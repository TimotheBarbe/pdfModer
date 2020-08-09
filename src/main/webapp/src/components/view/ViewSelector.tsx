import React, {PureComponent} from "react";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ViewListIcon from '@material-ui/icons/ViewList';
import {View} from "../../state/models";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {Typography, WithStyles} from "@material-ui/core";

interface IViewSelectorProps extends WithStyles {
    view: View;

    setView: (index: View) => void;
}

export default class ViewSelector extends PureComponent<IViewSelectorProps> {

    private handleAlignment = (event: React.MouseEvent<HTMLElement>, view: View | null) => {
        if (view && view !== this.props.view) this.props.setView(view);
    };

    public render() {
        const {view, classes} = this.props;
        return (
            <div className={classes.group}>
                <Typography variant="subtitle1" className={classes.text}>
                    View
                </Typography>
                <ToggleButtonGroup
                    value={view}
                    exclusive={true}
                    onChange={this.handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="global" aria-label="global" color={"inherit"}>
                        <ViewListIcon/>
                    </ToggleButton>
                    <ToggleButton value="zoom" aria-label="zoom" color={"inherit"}>
                        <ZoomInIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>

            </div>
        )
    }
}