import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import typeface from '../../typeface-black.svg';
import {blue500} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {checkEmailRequest} from '../../actions/index.js';

const primaryColorBorder = {
  borderColor: blue500
}


class App extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
         email: ''
    }

    this.updateState = this.updateState.bind(this);
    this.onSave = this.onSave.bind(this);
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
      <div className="App" >
        <Paper className="card-main" zDepth={1}>
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
        </Paper>  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkEmail: (email) => dispatch(checkEmailRequest(email))
})

export default connect(null, mapDispatchToProps)(App);
