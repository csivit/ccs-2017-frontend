import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {validateAdvanced} from './validate';


class AdditionalInfoComponent extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form>
                <Field name="handles" component={TextField} floatingLabelText="Github/LinkedIn Handle"/>
                <Field name="phone" component={TextField} type="number" floatingLabelText="Phone Number"/>
                <Field name="achievements" component={TextField} floatingLabelText="Achievments"/>
                <Field name="area_interest" component={TextField} floatingLabelText="Interests"/>
                <div style={{marginTop: 12}}>
                <FlatButton
                    label="Previous"
                    onClick={this.props.onPrevious}
                    style={{marginRight: 20}}/>
                <RaisedButton
                    label="SignUp"
                    primary={true}
                    onClick={handleSubmit(this.props.onSubmit)}/>
                </div>
            </form>
        );
    }
}

const AdditionalInfoForm = reduxForm({form: 'SignupForm', destroyOnUnmount: false, validate: validateAdvanced})(AdditionalInfoComponent);


export default AdditionalInfoForm;