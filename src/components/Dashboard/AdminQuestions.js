import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Code from 'material-ui/svg-icons/action/code';
import InvertColors from 'material-ui/svg-icons/action/invert-colors';
import Subheader from 'material-ui/Subheader';
import AdminNewQuestion from './AdminNewQuestion';
import AdminEditQuestion from './AdminEditQuestion';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {connect} from 'react-redux';
import {addOrEditQuestionAdmin, getQuestionsAdmin} from '../../actions/index';

class AdminQuestionComponent extends Component {

    constructor(props) {
        super(props);

        this.toggleAdd = this.toggleAdd.bind(this);
    }

    componentDidMount(){
        this.props.getQuesions();
    }
    
    toggleAdd (ev) {
        if(this.props.editOrAdd === 'none'){
            this.props.shiftState('add');            
        }
        else{
            this.props.shiftState('none');
        }
    }
    render() {
        const styles = {
            div: {
                display: 'flex',
                flexDirection: 'row wrap',
            },
            paperLeft: {
                flex: 5,
                height: '90%',
                display: 'flex',
                flexDirection: 'row wrap'
            },
            paperLeftQuestion: {
                flex: 4,
                overflowY: 'auto',
                maxHeight: '100%'
            },
            paperLeftTracks: {
                flex: 2,
                overflowY: 'auto',
                maxHeight: '100%',
                borderRight: '0.4px solid #9b9b9b'
            },
            paperRight: {
                flex: (this.props.editOrAdd === 'none')
                    ? '0.00001'
                    : '3',
                opacity: (this.props.editOrAdd === 'none')
                    ? 'gone'
                    : 'visible',
                overflowY: 'auto',
                maxHeight: '90%',
                backgroundColor: '#F9F9F9',
                transition: 'flex-grow 500ms ease-in-out'
            },
            addButton: {
                 position: 'fixed',
                 bottom: '20px',
                 right: '20px'
            }
        };

        
        return (
            <div>
            <div style={styles.div}>
                <Paper style={styles.paperLeft}>
                    <div style={styles.paperLeftTracks}>
                        <List>
                            <Subheader>Tracks</Subheader>
                            <ListItem primaryText="Tech Questions" containerElement={<Link to="/app/questions/tech"/>} leftIcon={< Code />}/>
                            <ListItem primaryText="Management Questions" containerElement={<Link to="/app/questions/management"/>} leftIcon={< Code />}/>
                            <ListItem primaryText="Creative Questions" containerElement={<Link to="/app/questions/creative"/>} leftIcon={< InvertColors />}/>
                        </List>
                    </div>
                    <div style={styles.paperLeftQuestion}>
                        <List>
                            <Subheader>Questions</Subheader>
                            {this.props.children}
                        </List>
                    </div>
                </Paper>
                <div style={styles.paperRight}>
                    
                    {(this.props.editOrAdd === 'edit')
                        ? <AdminEditQuestion />
                        : <AdminNewQuestion />
                    }
                </div>
            </div>
            <FloatingActionButton style={styles.addButton} onTouchTap={this.toggleAdd}>
                            <ContentAdd />
            </FloatingActionButton>
            </div>
        );
    }
}


const mapStateToProps = (state) =>({
    editOrAdd: state.addOrEditQuestionAdmin
})


const mapDispatchToProps = (dispatch) => ({
    shiftState: (state) => dispatch(addOrEditQuestionAdmin(state)),
    getQuesions: () => dispatch(getQuestionsAdmin())
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminQuestionComponent);