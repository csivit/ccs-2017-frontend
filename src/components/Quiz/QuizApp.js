import React, {Component} from 'react';
import QuizMain from './QuizMain';
import Timer from './Timer';
import QuestionTable from './QuestionTable';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getQuestionsQuiz, changeCurrentQuestion,submitAnswersRequest} from '../../actions/index';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {submit, destroy} from 'redux-form';

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

        this.onNextClick = this
            .onNextClick
            .bind(this);
        this.onPrevClick = this
            .onPrevClick
            .bind(this);
        this.onSubmitQuiz = this
            .onSubmitQuiz
            .bind(this);
    }
    
    
    componentWillMount() {
        if(this.props.inQuiz === false){
            this.props.router.push('/app');
        }
    }
    

    componentWillReceiveProps(nextProps) {
        if(nextProps.inQuiz === false){
            this.props.router.push('/app');
        }
    }
        

    requestSubmitQuiz = (values) => {

        console.log(values);
    }
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentDidMount() {
        this
            .props
            .getQuestions(this.props.type);
    }

    onNextClick() {
        this
            .props
            .changeQuestion(this.props.currentQuestion + 1);
    }

    onPrevClick() {
        this
            .props
            .changeQuestion(this.props.currentQuestion - 1);
    }

    onSubmitQuiz() {
        this
            .props
            .submitQuiz();
        
        this.handleClose();

    }
    render() {
        const {currentQuestion, questions, answers, type} = this.props;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.onSubmitQuiz}
            />,
        ];
        return (
            <div>
                <Dialog
          title="Submit Quiz"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Are you you want to submit.
        </Dialog>
                <div style={styles.div}>
                    <Paper zDepth={1} style={styles.paperLeft}>
                        <h4>Questions</h4>
                        <QuestionTable questions={questions}/>
                        <h4>Timer</h4>
                        <Timer onTimeUp={this.onSubmitQuiz} time={this.props.timeQuiz}/>
                        <RaisedButton label="Submit" primary={true} onTouchTap={this.handleOpen}/>
                    </Paper>
                    <div style={styles.paperRight}>
                        <QuizMain 
                        question={questions[currentQuestion]} 
                        onSubmit={
                            (values) => {
                            this.props.submitAnswers(values, type);
                            this.props.destroyAnswers();
                            }
                        }/>
                        <FlatButton
                            style={styles.previousButton}
                            label="Previous"
                            disabled={currentQuestion === 0}
                            onTouchTap={this.onPrevClick}/>
                        <FlatButton
                            style={styles.nextButton}
                            label="Next"
                            disabled={currentQuestion === (questions.length - 1)}
                            primary={true}
                            onTouchTap={this.onNextClick}/>
                    </div>
                </div>

                {answers && <LinearProgress style={ProgressStyle} mode="determinate" value={(answers.values)?(Object.keys(answers.values).length / questions.length * 100):0} />}
            </div>
        );
    }
}

const mapStateToProps = (state, router) => ({
    questions: state.questionsQuiz,
    type: router.params.q_type,
    currentQuestion: state.currentQuestionQuiz,
    answers: state.form.quizForm,
    timeQuiz: state.timeQuiz,
    inQuiz: state.inQuiz
    });

const mapDispathToProps = dispatch => ({
    getQuestions: (type) => dispatch(getQuestionsQuiz(type)),
    changeQuestion: (currentQuestion) => dispatch(changeCurrentQuestion(currentQuestion)),
    submitQuiz: () => dispatch(submit('quizForm')),
    submitAnswers: (values, type) => dispatch(submitAnswersRequest(values, type)),
    destroyAnswers: () => dispatch(destroy('quizForm'))
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(QuizComponent));