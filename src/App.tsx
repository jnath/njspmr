
import React, { Component } from "react";

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { TouchTapEvent } from 'material-ui';

interface AppState {
    open: boolean
}

export default class App extends Component<any, AppState> {

    constructor(props:AppState) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () =>  this.setState({open: false});

    render() {
        return (
            <header>
                <AppBar onLeftIconButtonTouchTap={this.handleToggle}/>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    >
                    <MenuItem href="" onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </header>
        )
    }
}