import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    container: {
        padding: '20 20%'
    },
    headingSecond: {
        textAlign: 'center',
        fontWeight: 200,
        fontSize: '3rem',
        margin: 0,
        marginBottom: '5%'
    }
}
class FeedbackComponent extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    //Change to redux later
    onSubmit(values) {
        fetch('/user/feedback', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: sessionStorage.getItem('id_token') || '',
                'Content-type': 'application/json'
            },
                body: JSON.stringify(values)
            })
            .then(response => response.json().then(user => ({user, response})))
            .then(({user, response}) => {
                if (!response.ok) {
                    return Promise.reject(user)
                } else {
                    this.props.router.push('/app');
                }
            })
            .catch(err => console.log("Error: ", err))
    }
    render() {
        const {handleSubmit} = this.props;

        return (
            <div style={styles.container}>
                <h1 style={styles.headingSecond}>Give your feedback here</h1>

                <form>
                    <div>
                        <Field
                            name="question1"
                            component={TextField}
                            multiLine={true}
                            rows={2}
                            fullWidth={true}
                            floatingLabelText="How did you come to know about CSI?"/>
                        <Field
                            name="question2"
                            component={TextField}
                            multiLine={true}
                            rows={2}
                            fullWidth={true}
                            floatingLabelText="How was your experience for taking the test."/>
                        <Field
                            name="question3"
                            component={TextField}
                            multiLine={true}
                            rows={2}
                            fullWidth={true}
                            floatingLabelText="Why do you want to join CSI?"/>

                        <div
                            style={{
                            marginTop: 12
                        }}>
                            <RaisedButton
                                label="Submit"
                                primary={true}
                                onClick={handleSubmit(this.onSubmit)}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const BasicInfoForm = reduxForm({form: 'FeedbackForm'})(FeedbackComponent);

const mapStateToProps = state => ({
    initialValues: {
        email: state.userEmail
    }
})

export default connect(mapStateToProps)(BasicInfoForm);