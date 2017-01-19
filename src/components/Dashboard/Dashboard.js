import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import typeface from '../../typeface-black.svg';
import './Dashboard.css';
import {logoutUser} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const AppBarStyle = {
    'height': '10%'
}


class DashBoardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};

        this.onLogout = this.onLogout.bind(this);
    }
    
    onLogout(){
        this.props.logoutUser();
        this.props.router.push('/');
    } 
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
            <AppBar
                style={AppBarStyle}
                title={this.props.appHeader}
                onLeftIconButtonTouchTap={this.handleToggle}
                iconElementRight={<FlatButton label="Logout" onTouchTap={this.onLogout}/>}
            />
            <Drawer
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            docked={false}
            width={300}>
                <img className="typefaceMenu" src={typeface} alt="typeface"></img>
                <MenuItem containerElement={<Link to="/app" />} onTouchTap={this.handleClose}>Choose a Track</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Edit Profile</MenuItem>
                <MenuItem containerElement={<Link to="/app/feedback" />} onTouchTap={this.handleClose}>Submit Feedback</MenuItem>
            </Drawer>
            {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthenticated,
    appHeader: state.appHeader
})

const mapDispatchToProps = dispatch =>({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardComponent);