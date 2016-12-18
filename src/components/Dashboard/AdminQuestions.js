import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Code from 'material-ui/svg-icons/action/code';
import InvertColors from 'material-ui/svg-icons/action/invert-colors';
import Subheader from 'material-ui/Subheader';
import AdminNewQuestion from './AdminNewQuestion';
import AdminEditQuestion from './AdminEditQuestion';
import RaisedButton from 'material-ui/RaisedButton';


class AdminQuestionComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            editOrAdd: 'none'
        }
    }
    render() {
        const  styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
  },
  paperLeft:{
    flex: 5,
    height: '90%',
    display: 'flex',
    flexDirection: 'row wrap'
  },
  paperLeftQuestion:{
    flex: 4,
    overflowY: 'auto',
    maxHeight: '100%',
  },
  paperLeftTracks:{
    flex: 2,
    overflowY: 'auto',
    maxHeight: '100%',
    borderRight: '0.4px solid #9b9b9b'
  },
  paperRight:{
    flex: (this.state.editOrAdd === 'none')?'0.001':'3',
    overflowY: 'auto',
    maxHeight: '90%',
    backgroundColor: '#F9F9F9',
    textAlign: 'center',
    transistion: 'flex 500ms'
  },
  addButton:{
      position: 'absolute',
      top: '12%',
      right: '2%'
  }
};
        return (
            <div style={styles.div}>
                <Paper style={styles.paperLeft}>
                <div style={styles.paperLeftTracks}>
                <List>
                    <Subheader>Tracks</Subheader>
                    <ListItem primaryText="Tech Questions" leftIcon={<Code />} />
                    <ListItem primaryText="Management Questions" leftIcon={<Code />} />
                    <ListItem primaryText="Creative Questions" leftIcon={<InvertColors />} />
                </List>
                </div>
                <div style={styles.paperLeftQuestion}>
                    <List>
                        <Subheader>Questions</Subheader>
                    </List>
                    <RaisedButton style={styles.addButton} primary={true} label={(this.state.editOrAdd === 'none')?'Add':'Back'}/>
                </div>
                </Paper>
                <div style={styles.paperRight}>
                    {(this.state.editOrAdd === 'new') ? <AdminEditQuestion/> : <AdminNewQuestion/>}
                </div>
            </div>
        );
    }
}

export default AdminQuestionComponent;