import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Snackbar from 'material-ui/Snackbar';
import FlexiblePaper from './FlexiblePaper';
import { withRouter } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    };

    componentWillReceiveProps(nextProps){
        if(this.props.message !== nextProps.message){
          console.log(nextProps.message)
            this.setState({
                open: true
            });
        }
        if(nextProps.isAuth){
          this.props.router.push('/app');
        }
  }

  render() {
    const {children, flexPaper} = this.props;
    return (
      <div className="App" >
      <FlexiblePaper
            paperHeight={flexPaper.height}
            paperWidth={flexPaper.width}
            paperTop={flexPaper.top}>
         {children}
      </FlexiblePaper>
      {this.props.message &&
      <Snackbar
          open={this.state.open}
          message={this.props.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      }
      </div>  
    );
  }
}

const mapStatetoProps = ({flexPaper, auth}) => ({
  flexPaper,
  message: auth.errorMessage,
  isAuth: auth.isAuthenticated
})

export default connect(mapStatetoProps)(App);
