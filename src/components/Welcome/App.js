import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import FlexiblePaper from './FlexiblePaper';

class App extends Component {

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
      </div>  
    );
  }
}

const mapStatetoProps = ({flexPaper}) => ({
  flexPaper
})

export default connect(mapStatetoProps)(App);
