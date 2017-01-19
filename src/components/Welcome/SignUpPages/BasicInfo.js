import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {validateBasic} from './validate';

class BasicInfoComponent extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form>
                <Field name="email" component={TextField} floatingLabelText="Email"/>
                <Field name="name" component={TextField} floatingLabelText="Name"/>
                <Field
                    name="regno"
                    component={TextField}
                    floatingLabelText="Registration Number"/>
                <Field name="password" type="password" component={TextField} floatingLabelText="Password"/>
                <div style={{
                    marginTop: 12
                }}>
                    <RaisedButton
                        label="Next"
                        primary={true}
                        onClick={handleSubmit(this.props.onSubmit)}/>
                </div>
            </form>
        );
    }
}

const BasicInfoForm = reduxForm({form: 'SignupForm', destroyOnUnmount: false, validate: validateBasic})(BasicInfoComponent);

const mapStateToProps = state => ({
    initialValues: {
        email: state.userEmail
    }
})

export default connect(mapStateToProps)(BasicInfoForm);