import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Field, reduxForm} from 'redux-form';
import {TextField, RadioButtonGroup} from 'redux-form-material-ui';
import {RadioButton} from 'material-ui/RadioButton';


const styles = {
    questionText: {
        overflowWrap: 'break-word'
    },
    questionContainer: {
        minHeight: '20%',
        backgroundColor: '#00BCD4',
        padding: '1.25rem',
        color: '#FFFFFF'
    },
    questionImage: {
        height: '200px',
        margin: '20px auto',
        display: 'block'
    }
}



class QuizMainComponent extends Component {

    getAnswersContent(question) {
        if (question.options.length > 0) {
            return (
                <div>
                <Field name={'ans' + question._id} component={RadioButtonGroup}>
                    {question
                        .options
                        .map((option, i) => <RadioButton className="AnswerOption" value={option} label={option} key={i}/>)}
                </Field>
                </div>
            )
        } else {
            return (<Field
                name={'ans' + question._id}
                component={TextField}
                multiLine={true}
                floatingLabelText="Answer"
                fullWidth={true}
                />)
        }
    }
    render() {
        const {question, handleSubmit} = this.props;
        return (
            <div>
                <Paper className="quiz-main" zDepth={1}>
                    <Paper style={styles.questionContainer} zDepth={1} className="quiz-question">
                        <p style={styles.questionText}>{(question) ? question.question : "Loading"}</p>
                    </Paper>
                    {(question)?<div>
                            {(question.image !== "") &&
                             <img alt="Loading" style={styles.questionImage} src={"/questionPhotos/" + question.image}/>}
                                
                                <form onSubmit={handleSubmit}>
                                <div className="AnswersContainer">
                                    {this.getAnswersContent(question)}
                                </div>
                                </form>
                            </div>
                        : "Loading"}
                </Paper>
            </div>
        );
    }
}

export default reduxForm({form: 'quizForm', destroyOnUnmount: false})(QuizMainComponent);