import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import {addOrEditQuestionAdmin} from '../../actions/index';

class AdminQuestionsListComponent extends Component {
    render() {
        const {questions} = this.props;
        return (
            <div>
                <List>
                    {questions.map((question) => <ListItem key={question._id} primaryText={question.question}/>)}
                </List>
            </div>
        );
    }
}

const getVisibleQuestions = (questions , type) =>{
    return questions.filter(question => (question.questionType === type))
}

const mapStateToProps = (state, router) =>({
    questions: getVisibleQuestions(state.questionsAdmin, router.params.type)
})


const mapDispatchToProps = (dispatch) => ({
    shiftState: (state) => dispatch(addOrEditQuestionAdmin(state))
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminQuestionsListComponent);