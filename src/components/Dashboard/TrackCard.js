import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {startQuiz} from '../../actions/index';
import { withRouter } from 'react-router';

const styles = {
    card: {
        height: '50%',
        width: '80%',
        margin: '2% auto',
        textAlign: 'center',
        padding: '2%'
    },
    container: {
        flex: 1
    }
}

class TrackCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadow: 1
        }

        this.onStartQuiz = this.onStartQuiz.bind(this);
    }

    onStartQuiz(type) {
        this.props.startQuiz();
        this.props.router.push('/app/quiz/'+type);
    }

    onMouseOver = () => this.setState({shadow: 3});
    onMouseOut = () => this.setState({shadow: 1});
    render() {
        const {track, isTaken} = this.props;
        return (
            <div style={styles.container}>
                <Paper
                    style={styles.card}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    zDepth={this.state.shadow}
                    className="TrackCard">
                    <img alt="track" className="trackImage" src={track.image}/>
                    <h2 className="trackTitle">{track.name}</h2>
                    <FlatButton label={(isTaken)?"Already Taken":"Take the Test"} onTouchTap={() => this.onStartQuiz(track.quizType)} disabled={isTaken} primary={true}/>
                </Paper>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startQuiz: () => dispatch(startQuiz())
})
export default connect(null, mapDispatchToProps)(withRouter(TrackCard));