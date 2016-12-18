import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { reduxForm, Field } from 'redux-form';

import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
        className="photoUpload"
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
        {files && Array.isArray(files) && (
          <div>
          { files.map((file, i) => <img src={file.preview} />) }
          </div>
      )}
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}

    </div>
  );
}

class AdminNewQuestion extends Component {
    render() {
        return (
            <div className="AddQuestionContainer">
            <Paper className="AddQuestionPaper">
                <h2>Add New Question</h2>

                <form>
                <div>
            <label htmlFor={FILE_FIELD_NAME}>Files</label>
            <Field
                name={FILE_FIELD_NAME}
                component={renderDropzoneInput}
            />
            </div>
                </form>
            </Paper> 
            </div>
        );
    }
}

export default reduxForm({
  form: 'NewQuestion',
})(AdminNewQuestion);