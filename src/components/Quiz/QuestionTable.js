import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {changeCurrentQuestion} from '../../actions/index';

const styles = {
    container: {
        padding: '2%'
    }
}
const QuestionTableComponent = (props) => {
    return (
        <div style={styles.container}>
            {props.questions.map((question, i) => <FlatButton key={question._id} label={i + 1} onClick={() => props.changeQuestion(i)}/>)}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    changeQuestion: (currentQuestion) => dispatch(changeCurrentQuestion(currentQuestion))
})
export default connect(null, mapDispatchToProps)(QuestionTableComponent);