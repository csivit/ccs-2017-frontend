import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {reduxForm, Field} from 'redux-form';

import {TextField, SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import {editQuestionRequest} from '../../actions/index';

import RaisedButton from 'material-ui/RaisedButton';

class AdminEditQuestion extends Component {
    constructor(props) {
        super(props);

        this.submitForm = this
            .submitForm
            .bind(this);

    }

    submitForm(data) {

        //this.props.reset();
        this
            .props
            .editQuestion(data);
        
    }


    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="AddQuestionContainer">
                <Paper className="AddQuestionPaper">
                    <h2>Edit Question</h2>

                    <form>
                        <Field
                            name="question"
                            component={TextField}
                            hintText="Question"
                            fullWidth={true}/>
                        <Field
                            name="options"
                            component={TextField}
                            hintText="option1,option2,option3"
                            fullWidth={true}/>
                        <Field
                            name="correctAnswer"
                            component={TextField}
                            hintText="Correct Answer"
                            fullWidth={true}/>
                        <Field
                            name="questionType"
                            component={SelectField}
                            hintText="Type"
                            multiLine={true}
                            fullWidth={true}>
                            <MenuItem value="tech" primaryText="Technical"/>
                            <MenuItem value="management" primaryText="Management"/>
                            <MenuItem value="creative" primaryText="Creative"/>
                        </Field>

                        <Field
                            name="image"
                            component={TextField}
                            hintText="Image can't be edited (too much work (clear this to delete the pic))"
                            fullWidth={true}/>                        

                        
                        <RaisedButton
                            label="Edit"
                            onTouchTap={handleSubmit(this.submitForm)}
                            primary={true}/>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialValues: state.questionEditing
})

const mapDispatchToProps = dispatch => ({
    editQuestion: (values) => dispatch(editQuestionRequest(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'EditQuestionForm'})(AdminEditQuestion));