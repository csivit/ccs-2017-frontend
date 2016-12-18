import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import typeface from '../../typeface-black.svg';
import './Dashboard.css';

const AppBarStyle = {
    'height': '10%'
}


class DashBoardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }
      
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
            <AppBar
                style={AppBarStyle}
                title="Tech Question Paper"
                onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            docked={false}
            width={300}>
                <img className="typefaceMenu" src={typeface} alt="typeface"></img>
                <MenuItem onTouchTap={this.handleClose}>Choose a Track</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Edit Profile</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Submit Feedback</MenuItem>
                <MenuItem className="LogoutButton" onTouchTap={this.handleClose}>Logout</MenuItem>
            </Drawer>
            {this.props.children}
            </div>
        );
    }
}

export default DashBoardComponent;