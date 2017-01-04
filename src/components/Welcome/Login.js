import React, {Component} from 'react';
import {loginRequest, changePaperHeight, changePaperWidth, changePaperTop} from '../../actions/index.js';
import {connect} from 'react-redux';
import typeface from '../../typeface-black.svg';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';

class LoginComponent extends Component {

    componentDidMount() {
        this
            .props
            .changePaperHeight("65%");
        this
            .props
            .changePaperWidth("30%");
        this
            .props
            .changePaperTop("20vh");
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="LoginContainer">
                <img className="typeface" src={typeface} alt="typeface"></img>
                <h1>Welcome Back</h1>
                <div>
                    <form>
                        <Field name="email" component={TextField} floatingLabelText="Email"/>
                        <Field name="password" component={TextField} floatingLabelText="Password"/>
                        <RaisedButton
                            className="Loginbutton"
                            label="Login"
                            primary={true}
                            onClick={handleSubmit(this.props.doLogin)}/>
                    </form>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePaperHeight: (height) => dispatch(changePaperHeight(height)),
    changePaperWidth: (width) => dispatch(changePaperWidth(width)),
    changePaperTop: (top) => dispatch(changePaperTop(top)),
    doLogin: (values) => dispatch(loginRequest(values))
})

const mapStateToProps = state => ({
    initialValues: {
        email: state.userEmail
    }
})
const LoginForm = reduxForm({form: 'LoginForm'})(LoginComponent);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);