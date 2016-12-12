import React, {Component} from 'react';
import Paper from 'material-ui/Paper';


const Questionstyle = {
    minHeight : '20%',
    backgroundColor : '#00BCD4',
    padding: '1.25rem',
    color: '#FFFFFF'
}

const style = {
    overflowWrap: 'break-word'
}



class QuizMainComponent extends Component {
    render() {
        return (
            <div>
            <Paper className="quiz-main" zDepth={1}>
                <Paper style={Questionstyle} zDepth={1} className="quiz-question">
                    <p style={style}>Some Quesion</p>
                </Paper>
            </Paper>
            </div>
        );
    }
}

export default QuizMainComponent;