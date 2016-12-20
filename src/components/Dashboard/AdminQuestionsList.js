import React, {Component} from 'react';
import {connect} from 'react-redux';


class AdminQuestionsListComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const getVisibleQuestions = (questions , type) =>{
    return questions.filter(question => (question.type == type))
}

const mapStateToProps = (state, router) =>({
    questions: getVisibleQuestions(state.questionsAdmin, router.params.type)
})


const mapDispatchToProps = (dispatch) => ({
    shiftState: (state) => dispatch(addOrEditQuestionAdmin(state))
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminQuestionsListComponent);