import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import typeface from '../../typeface-black.svg';
import {blue500} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {checkEmailRequest, changePaperHeight, changePaperWidth} from '../../actions/index.js';

const primaryColorBorder = {
  borderColor: blue500
}

class StartupComponent extends Component {

    constructor(props, context) {
    super(props, context);
    
    this.state = {
         email: ''
    }

    this.updateState = this.updateState.bind(this);
    this.onSave = this.onSave.bind(this);

    this.props.changePaperHeight("70%");
    this.props.changePaperWidth("60%");

  }

  componentWillReceiveProps(nextProps){
      if(this.props.userEmail !== nextProps.userEmail){
  
      if(nextProps.firstTime === true){
        this.props.router.push('/signup');
      }
      else{
        this.props.router.push('/login');
      }
      }
  }

  
  onSave(ev){
    let email = this.state.email;
    console.log(email);
    this.props.checkEmail(email);
  }

  updateState(e) {
      this.setState({email: e.target.value});
   }
    render() {
        return (
            <div>
            <img className="typeface" src={typeface} alt="typeface"></img>
            Presents
            <h1>Core Committee Selection 2017</h1>
            <TextField
            floatingLabelText="Your Email"
            underlineStyle={primaryColorBorder}
            value={this.state.email}
            onChange={this.updateState}
          />
          <RaisedButton className="SignUpbutton" label="Let's get started" primary={true} onClick={this.onSave}/>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  checkEmail: (email) => dispatch(checkEmailRequest(email)),
  changePaperHeight: (height) => dispatch(changePaperHeight(height)),
  changePaperWidth: (width) => dispatch(changePaperWidth(width))
})

const mapStateToProps = ({firstTime, userEmail}) =>({
  firstTime,
  userEmail
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StartupComponent));