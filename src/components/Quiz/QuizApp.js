import React, {Component} from 'react';
import QuizMain from './QuizMain';
import Timer from './Timer';
import QuestionTable from './QuestionTable';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {connect} from 'react-redux';
import {getQuestionsQuiz, changeCurrentQuestion} from '../../actions/index';
import FlatButton from 'material-ui/FlatButton';

import './Quiz.css';

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row wrap'
    },
    paperLeft: {
        flex: 1,
        height: '90%',
        textAlign: 'center',
        padding: 10
    },
    paperRight: {
        flex: 4,
        overflowY: 'auto',
        maxHeight: '90%',
        backgroundColor: '#F9F9F9'
    },
    previousButton: {
        position: 'absolute',
        bottom: '10vh',
        left: '30%'
    },
    nextButton: {
        position: 'absolute',
        bottom: '10vh',
        right: '10%'
    }
};

const ProgressStyle = {
    'position': 'fixed',
    'bottom': '0'
}

class QuizComponent extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
    }
    
    componentDidMount() {
        this
            .props
            .getQuestions(this.props.type);
    }

    onNextClick(){
        this.props.changeQuestion(this.props.currentQuestion + 1);
    }

    onPrevClick(){
        this.props.changeQuestion(this.props.currentQuestion - 1);
    }
    render() {
        const {currentQuestion, questions} = this.props;
        return (
            <div>
                <div style={styles.div}>
                    <Paper zDepth={1} style={styles.paperLeft}>
                        <h4>Questions</h4>
                        <QuestionTable questions={questions}/>
                        <h4>Timer</h4>
                        <Timer time={"06 : 00"}/>
                    </Paper>
                    <div style={styles.paperRight}>
                        <QuizMain question={questions[currentQuestion]}/>
                        <FlatButton
                            style={styles.previousButton}
                            label="Previous"
                            disabled={currentQuestion == 0}
                            onTouchTap={this.onPrevClick}/>
                        <FlatButton
                            style={styles.nextButton}
                            label="Next"
                            disabled={currentQuestion == (questions.length - 1)}
                            primary={true}
                            onTouchTap={this.onNextClick}/>

                    </div>
                </div>
                <LinearProgress style={ProgressStyle} mode="determinate" value={20}/>
            </div>
        );
    }
}

const mapStateToProps = (state, router) => ({questions: state.questionsQuiz, type: router.params.q_type, currentQuestion: state.currentQuestionQuiz});

const mapDispathToProps = dispatch => ({
    getQuestions: (type) => dispatch(getQuestionsQuiz(type)),
    changeQuestion: (currentQuestion) => dispatch(changeCurrentQuestion(currentQuestion))
})

export default connect(mapStateToProps, mapDispathToProps)(QuizComponent);