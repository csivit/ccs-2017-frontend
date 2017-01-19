import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import {addOrEditQuestionAdmin} from '../../actions/index';
import {initialize}  from 'redux-form';

class AdminQuestionsListComponent extends Component {
    constructor(props) {
        super(props);

        this.editQuestion = this.editQuestion.bind(this);   
    }
    
    editQuestion(question){
        var editQuestion = Object.assign({}, question, {options: question.options.join(',')});
        this.props.changeEditingQuestion(editQuestion);
        this.props.shiftState('edit');
    }

    render() {
        const {questions} = this.props;
        return (
            <div>
                <List>
                    {questions.map((question) => 
                        <ListItem 
                        key={question._id}
                        primaryText={question.question}
                        onTouchTap={() => this.editQuestion(question)}/>)}
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
    shiftState: (state) => dispatch(addOrEditQuestionAdmin(state)),
    changeEditingQuestion: (question) => dispatch(initialize('EditQuestionForm', question)),
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminQuestionsListComponent);