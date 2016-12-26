import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    card: {
        height: '50%',
        width: '80%',
        margin: '2% auto',
        textAlign: 'center'
    },
    container:{
        flex: 1
    }
}

class TrackCard extends Component {
    render() {
        return (
            <div style={styles.container}>
            <Paper style={styles.card} className="TrackCard">
            </Paper>
            </div>
        );
    }
}

export default TrackCard;