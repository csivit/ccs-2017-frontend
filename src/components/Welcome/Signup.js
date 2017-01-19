import React, {Component} from 'react';
import {signupRequest, changePaperHeight, changePaperWidth, changePaperTop} from '../../actions/index.js';
import {connect} from 'react-redux';
import typeface from '../../typeface-black.svg';
import {Step, Stepper, StepButton} from 'material-ui/Stepper';
import BasicInfo from './SignUpPages/BasicInfo';
import AdditionalInfo from './SignUpPages/AddtionalInfo';
import {destroy} from 'react-redux';

class SignupComponent extends Component {
    state = {
        stepIndex: 0
    };

    handleNext = () => {
        this.setState({stepIndex: 1});
    };

    handlePrev = () => {
        this.setState({stepIndex: 0});
    };

    componentDidMount() {
        this
            .props
            .changePaperHeight("80%");
        this
            .props
            .changePaperWidth("35%");
        this
            .props
            .changePaperTop("10vh");
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <BasicInfo onSubmit={this.handleNext}/>;
            case 1:
                return <AdditionalInfo onPrevious={this.handlePrev} onSubmit={(values) => {
                        this.props.doRegister(values);
                        this.props.deleteRegister(values);
                    }
                }/>
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const {stepIndex} = this.state;
        const contentStyle = {
            margin: '0 16px'
        };

        return (
            <div>
                <img className="typeface" src={typeface} alt="typeface"></img>
                <div
                    style={{
                    maxWidth: 700,
                    margin: 'auto'
                }}>
                    <Stepper linear={false} activeStep={stepIndex}>
                        <Step>
                            <StepButton
                                onClick={() => {
                                this.setState({stepIndex: 0});
                            }}>
                                Your Basic Info
                            </StepButton>
                        </Step>
                        <Step>
                            <StepButton
                                onClick={() => {
                                this.setState({stepIndex: 1});
                            }}>
                                Your Basic Info
                            </StepButton>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {this.getStepContent(stepIndex)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changePaperHeight: (height) => dispatch(changePaperHeight(height)),
    changePaperWidth: (width) => dispatch(changePaperWidth(width)),
    changePaperTop: (top) => dispatch(changePaperTop(top)),
    doRegister: (values) => dispatch(signupRequest(values)),
    deleteRegister: () => dispatch(destroy('SignupForm'))
})

export default connect(null, mapDispatchToProps)(SignupComponent);