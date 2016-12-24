import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {reduxForm, Field} from 'redux-form';

import Dropzone from 'react-dropzone';
import {TextField, SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import {addQuestionRequest} from '../../actions/index';

import RaisedButton from 'material-ui/RaisedButton';
const FILE_FIELD_NAME = 'questionPhoto';


class AdminNewQuestion extends Component {
    constructor(props) {
        super(props);

        this.submitForm = this
            .submitForm
            .bind(this);

        this.filesDropped = this.filesDropped.bind(this);

        this.state = {
            files: []
        }
    }

    submitForm(data) {
        var body = new FormData();

        //this.props.reset();

        Object
            .keys(data)
            .forEach((key) => {
                body.append(key, data[key]);
            });
        if(this.state.files.length > 0){
            body.append('questionImage', this.state.files[0])
        }
        this
            .props
            .addQuestion(body);
        
        this.setState({
            files: []
        })
    }

    filesDropped(files){
        this.setState({
            files
        })
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="AddQuestionContainer">
                <Paper className="AddQuestionPaper">
                    <h2>Add New Question</h2>

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
                            name="type"
                            component={SelectField}
                            hintText="Select the type"
                            multiLine={true}
                            fullWidth={true}>
                            <MenuItem value="tech" primaryText="Technical"/>
                            <MenuItem value="management" primaryText="Management"/>
                            <MenuItem value="creative" primaryText="Creative"/>
                        </Field>
                        <div>
                            <label htmlFor="photo">Image File (leave empty if not required)</label>
                            <Dropzone
                                multiple={false}
                                accept={"image/*"}
                                onDrop={this.filesDropped}
                                className="photoUpload">
                                {(this.state.files.length > 0)
                                    ? (
                                        <div>
                                            {this.state.files.map((file, i) => <img className="uploadPreview" key={i} src={file.preview}/>)}
                                        </div>
                                    )
                                    : <div className="dropzoneContent">Try dropping some files here, or click to select files to upload.</div>}

                            </Dropzone>
                        </div>
                        <RaisedButton
                            className="addQuestionButton"
                            label="Add"
                            onTouchTap={handleSubmit(this.submitForm)}
                            primary={true}/>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addQuestion: (values) => dispatch(addQuestionRequest(values))
})

export default connect(null, mapDispatchToProps)(reduxForm({form: 'NewQuestion'})(AdminNewQuestion));