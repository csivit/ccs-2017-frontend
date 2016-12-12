import React, {Component} from 'react';
import QuizMain from './QuizMain';
import Timer from './Timer';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';


import './Quiz.css';

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
  },
  paperLeft:{
    flex: 1,
    height: '90%',
    textAlign: 'center',
    padding: 10
  },
  paperRight:{
    flex: 4,
    overflowY: 'auto',
    maxHeight: '90%',
    backgroundColor: '#F9F9F9'
  }
};

const ProgressStyle = {
    'position': 'fixed',
    'bottom': '0'
}

const AppBarStyle = {
    'height': '10%'
}

class QuizComponent extends Component {
    render() {
        return (
            <div>
                <AppBar
                style={AppBarStyle}
                title="Tech Question Paper"
                iconElementRight={<Timer time={"06 : 00"}/>}
                />
                <div style={styles.div}>
                <Paper zDepth={1} style={styles.paperLeft}>
                    <h4>Questions</h4>
                </Paper>
                <div style={styles.paperRight}>
                    <QuizMain />
                </div>
                </div>
                <LinearProgress style={ProgressStyle} mode="determinate" value={20} />
            </div>
        );
    }
}

export default QuizComponent;