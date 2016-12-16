import React, {Component} from 'react';
import {changePaperHeight, changePaperWidth, changePaperTop} from '../../actions/index.js';
import {connect} from 'react-redux';

class LoginComponent extends Component {
  
    componentDidMount(){
        this.props.changePaperHeight("60%");
        this.props.changePaperWidth("30%");
        this.props.changePaperTop("20vh");
    }

    render() {
        return (
            <div className="loginContainer">
                <h2>Welcome Back</h2>   
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  changePaperHeight: (height) => dispatch(changePaperHeight(height)),
  changePaperWidth: (width) => dispatch(changePaperWidth(width)),
  changePaperTop: (top) => dispatch(changePaperTop(top))
})


export default connect(null, mapDispatchToProps)(LoginComponent);