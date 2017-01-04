import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    questionText: {
        overflowWrap: 'break-word'
    },
    questionContainer: {
    minHeight : '20%',
    backgroundColor : '#00BCD4',
    padding: '1.25rem',
    color: '#FFFFFF'
    }
}

class QuizMainComponent extends Component {
    render() {
        return (
            <div>
            <Paper className="quiz-main" zDepth={1}>
                <Paper style={styles.questionContainer} zDepth={1} className="quiz-question">
                    <p style={styles.questionText}>{(this.props.question)? this.props.question.question : "Loading"}</p>
                </Paper>
                
            </Paper>
            </div>
        );
    }
}

export default QuizMainComponent;